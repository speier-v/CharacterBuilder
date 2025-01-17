import { Injectable } from '@angular/core';
import { Abilities, Character, SkillsProficiencies } from './character.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { KeycloakService } from 'keycloak-angular';
import { FeatureService } from './feature.service';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CharacterGenService {
  private characters: Character[] = [];
  private currentCharacter: Character | null = null;
  public userName: string;

  private apiUrl = `${environment.backendUrl}/characters`;
  private searchUrl = `${this.apiUrl}/search/by-visibility`;

  constructor(
    private http: HttpClient,
    private readonly keycloakService: KeycloakService,
    private featureService: FeatureService) {
    this.userName = keycloakService.getUsername();
  }

  createCharacter(name: string): Promise<Character> {
    const newCharacter = new Character(name, this.userName);
    return new Promise((resolve, reject) => {
      this.addCharacter(newCharacter).subscribe({
        next: (character) => {
          console.log('Character added:', character);
          //alert(`Character ${character.id} added successfully!`);
          this.characters.push(character);
          this.setCurrentCharacter(character);

          resolve(character);
        },
        error: (err) => {
          console.error('Error adding character:', err);
          alert('Failed to add character. Please try again.');
          reject(err);
        },
      });
    });
  }

  createCopiedCharacter(name: string, visibility: string, character: Character): Observable<Character> {
    const newCharacter = new Character(name, this.userName);
    //Object.assign(newCharacter, character);
    newCharacter.name = name;
    newCharacter.visibility = visibility;
    newCharacter.characterClass = character.characterClass;
    newCharacter.level = character.level;
    newCharacter.icon = character.icon;
    newCharacter.asiIn = character.asiIn;

    // skill proficiencies
    for (const key in character.skillsProficiencies) {
      if (newCharacter.skillsProficiencies.hasOwnProperty(key)) {
        newCharacter.skillsProficiencies[key as keyof SkillsProficiencies] = character.skillsProficiencies[key as keyof SkillsProficiencies];
      }
    }

    // abilities
    for (const key in character.abilities) {
      if (newCharacter.abilities.hasOwnProperty(key)) {
        newCharacter.abilities[key as keyof Abilities] = character.abilities[key as keyof Abilities];
      }
    }

    newCharacter.calculateStats();

    console.log("!!!!! "+newCharacter);

    return this.addCharacter(newCharacter).pipe(
      map((createdCharacter: Character) => {
        console.log('Character added:', createdCharacter);
        return createdCharacter;
      }),
      catchError((err) => {
        console.error('Error adding character:', err);
        alert('Failed to add character. Please try again.');
        throw err;
      })
    );

    /*
    this.addCharacter(newCharacter).subscribe({
      next: (character) => {
        console.log('Character added:', character);
      },
      error: (err) => {
        console.error('Error adding character:', err);
        alert('Failed to add character. Please try again.');
      },
    });
    */
  }

  setCurrentCharacter(character: Character): void {
    this.currentCharacter = character;
    if (this.currentCharacter) {
      console.log(`Current character set to: ${this.currentCharacter.name}, ${this.currentCharacter.id}, ${typeof character}`);
    } else {
      console.warn(`Character not assigned.`);
    }
  }

  getCharacters(): Character[] {
    return this.characters;
  }

  getCurrentCharacter(): Character | null {
    return this.currentCharacter;
  }

  updateCurrentCharacter(updatedData: Partial<Character>): Character {
    if (this.currentCharacter) {
      /*
      const index = this.characters.findIndex(char => char.id === this.currentCharacter?.id);
      if (index !== -1) {
        Object.assign(this.characters[index], updatedData);
      }
      */

      this.currentCharacter = Object.assign(this.currentCharacter, updatedData) as Character;
      this.currentCharacter = new Character(this.currentCharacter.name, this.currentCharacter.playerName);
      Object.assign(this.currentCharacter, updatedData);
      this.currentCharacter.calculateStats();
      
      /*
      if (index !== -1) {
        this.characters[index] = { ...this.currentCharacter } as Character;
      }
      */

      // #################### //
      if (this.currentCharacter && this.currentCharacter.id) {
        this.updateCharacter(this.currentCharacter.id, this.currentCharacter).pipe(
          catchError((err) => {
            console.error('Error updating character:', err);
            return of(null);
          }),
        ).subscribe({
          next: (updatedCharacter) => {
            this.fetchPrivateCharacters({visibility: 'public', playerName: this.userName});
            return updatedCharacter;
          },
          error: (err) => {
            console.error('Error updating character:', err);
          },
        });
      }
    } else {
      console.warn(`No current character to update.`);
    }

    if (this.currentCharacter) {
      return this.currentCharacter;
    } else {
      return new Character('unnamed', this.userName);
    }
  }


  // API calls
  fetchPrivateCharacters(params: { visibility: string; playerName: string }): Observable<Character[]> {
    const httpParams = new HttpParams()
      .set('visibility', params.visibility)
      .set('playerName', params.playerName);

    return this.http.get<Character[]>(this.searchUrl, { params: httpParams }).pipe(
      map((data: any[]) => data.map(
          item => {
            const character = new Character(item.name, item.id);
            Object.assign(character, item);

            return character;
          },
        ),
      ));
  }

  fetchPublicCharacters(): Observable<Character[]> {
    const httpParams = new HttpParams()
      .set('visibility', 'public');

    return this.http.get<Character[]>(this.searchUrl, { params: httpParams }).pipe(
      map((data: any[]) => data.map(
          item => {
            const character = new Character(item.name, item.id);
            Object.assign(character, item);

            return character;
          },
        ),
      ));
  }

  addCharacter(character: Character): Observable<Character> {
    return this.http.post<Character>(this.apiUrl, character);
  }

  updateCharacter(id: number, updatedCharacter: Character): Observable<Character> {
    return this.http.put<Character>(`${this.apiUrl}/${id}`, updatedCharacter);
  }

  deleteCharacter(characterId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${characterId}`);
  }
}
