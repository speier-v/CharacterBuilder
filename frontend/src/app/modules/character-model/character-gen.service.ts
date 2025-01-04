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
  
  createCharacter(name: string): Character {
    const newCharacter = new Character(name);
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

    return newCharacter;
  }

  createCopiedCharacter(name: string, character: Character): Character {
    const newCharacter = new Character(name);

    Object.assign(newCharacter, character);
    newCharacter.name = name;
    newCharacter.id = undefined;

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

  private getCharacterByName(name: string): Character | undefined {
    const character = this.characters.find(character => character.name === name);
    return character;
  }

  private getCharacterById(id: number): Character | undefined {
    var foundCharacter = this.characters.find(character => character.id === id);
    if (foundCharacter) {
      var character = new Character(foundCharacter.name, foundCharacter.id);
      Object.assign(character, foundCharacter);
      return character;
    } else {
      return undefined;
    }
  }

  updateCurrentCharacter(updatedData: Partial<Character>): void {
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
      
      //this.saveCharactersToStorage();
    } else {
      console.warn(`No current character to update.`);
    }
  }


  // API calls
  fetchPrivateCharacters(params: { visibility: string; playerName: string }): Observable<Character[]> {
    const httpParams = new HttpParams()
      .set('visibility', params.visibility)
      .set('playerName', params.playerName);

    return this.http.get<Character[]>(this.searchUrl, { params : httpParams }).pipe(
      map((data: any[]) => data.map(item => new Character(item.name, item.id)))
    );
  }

  fetchPublicCharacters(): Observable<Character[]> {
    const httpParams = new HttpParams()
      .set('visibility', 'public');

    return this.http.get<Character[]>(this.searchUrl, { params : httpParams }).pipe(
      map((data: any[]) => data.map(item => new Character(item.name, item.id)))
    );
  }

  addCharacter(character: Character): Observable<Character> {
    /*
    return new Observable((subscriber) => {
      this.http.post<Character>(this.apiUrl, character).subscribe(
        (newCharacter) => {
          this.characters.push(newCharacter);
          subscriber.next(newCharacter);
          subscriber.complete();
        },
        (error) => {
          subscriber.error(error);
        }
      );
    });
    */
    return this.http.post<Character>(this.apiUrl, character);
  }

  updateCharacter(character: Character): Observable<Character> {
    return new Observable((subscriber) => {
      this.http.put<Character>(`${this.apiUrl}/${character.id}`, character).subscribe(
        (updatedCharacter) => {
          const index = this.characters.findIndex((c) => c.id === character.id);
          if (index !== -1) {
            this.characters[index] = updatedCharacter;
          }
          subscriber.next(updatedCharacter);
          subscriber.complete();
        },
        (error) => {
          subscriber.error(error);
        }
      );
    });
  }

  deleteCharacter(characterId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${characterId}`);
  }
}
