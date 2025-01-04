import { Injectable } from '@angular/core';
import { Character } from './character.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, map, Observable, of, switchMap } from 'rxjs';
import { UsernameAndLogoutComponent } from '../page/shared/username-and-logout/username-and-logout.component';
import { KeycloakService } from 'keycloak-angular';

@Injectable({
  providedIn: 'root',
})
export class CharacterGenService {
  private characters: Character[] = [];
  private currentCharacter: Character | null = null;
  public userName: string;

  private apiUrl = 'http://localhost:8090/characters';
  private searchUrl = `${this.apiUrl}/search/by-visibility`;
  
  constructor(private http: HttpClient, private readonly keycloakService: KeycloakService) {
    this.userName = keycloakService.getUsername();

    var visibility = 'private';
    var playerName = this.userName;
    this.fetchPrivateCharacters({ visibility, playerName })
    .subscribe(data => {
      this.characters = data;
    });
  }

  /*
    private loadCharactersFromStorage(): void {
    const data = localStorage.getItem('characters');
    const parsedData = data ? JSON.parse(data) : [];
    this.characters = parsedData.map((item: any) => {
        const character = new Character(item.name, item.id);
        Object.assign(character, item);
        return character;
      });
    }
  */

  createCharacter(name: string): Character {
    const newCharacter = new Character(name);
    this.addCharacter(newCharacter).subscribe({
      next: (character) => {
        console.log('Character added:', character);
        //alert(`Character ${character.id} added successfully!`);
      },
      error: (err) => {
        console.error('Error adding character:', err);
        alert('Failed to add character. Please try again.');
      },
    });
    this.characters.push(newCharacter);
    this.setCurrentCharacter(newCharacter);

    return newCharacter;
  }

  createCopiedCharacter(name: string, character: Character): Character {
    const newCharacter = new Character(name);

    Object.assign(newCharacter, character);
    newCharacter.name = name;
    newCharacter.id = undefined;

    this.addCharacter(newCharacter).subscribe({
      next: (character) => {
        console.log('Character added:', character);
        //alert(`Character ${character.name} added successfully!`);
      },
      error: (err) => {
        console.error('Error adding character:', err);
        alert('Failed to add character. Please try again.');
      },
    });
    this.characters.push(newCharacter);
    this.setCurrentCharacter(newCharacter);
    //this.saveCharactersToStorage();

    return newCharacter;
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
      const index = this.characters.findIndex(char => char.id === this.currentCharacter?.id);
      if (index !== -1) {
        Object.assign(this.characters[index], updatedData);
      }

      this.currentCharacter = Object.assign(this.currentCharacter, updatedData) as Character;

      this.currentCharacter.calculateStats();
      if (index !== -1) {
        this.characters[index] = { ...this.currentCharacter } as Character;
      }
      
      // #################### //
      if (this.currentCharacter && this.currentCharacter.id) {
        this.updateCharacter(this.currentCharacter.id, this.currentCharacter).pipe(
          catchError((err) => {
            console.error('Error updating character:', err);
            return of(null);
          })
        ).subscribe({
          next: (updatedCharacter) => {
            return updatedCharacter;
          },
          error: (err) => {
            console.error('Error updating character:', err);
          }
        });
      }
    } else {
      console.warn(`No current character to update.`);
    }

    if (this.currentCharacter) {
      return this.currentCharacter;
    } else {
      return new Character('unnamed');
    }
  }


  // API calls
  fetchPrivateCharacters(params: { visibility: string; playerName: string }): Observable<Character[]> {
    const httpParams = new HttpParams()
      .set('visibility', params.visibility)
      .set('playerName', params.playerName);

    return this.http.get<Character[]>(this.searchUrl, { params : httpParams }).pipe(
      map((data: any[]) => data.map(
        item =>
          {
            const character = new Character(item.name, item.id);
            Object.assign(character, item);
            return character;
          }
      )
    ));
  }

  fetchPublicCharacters(): Observable<Character[]> {
    const httpParams = new HttpParams()
      .set('visibility', 'public');

    return this.http.get<Character[]>(this.searchUrl, { params : httpParams }).pipe(
      map((data: any[]) => data.map(item => new Character(item.name, item.id)))
    );
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
