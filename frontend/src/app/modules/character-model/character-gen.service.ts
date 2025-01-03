import { Injectable } from '@angular/core';
import { Character } from './character.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsernameAndLogoutComponent } from '../page/shared/username-and-logout/username-and-logout.component';

@Injectable({
  providedIn: 'root',
})
export class CharacterGenService {
  private characters: Character[] = [];
  private currentCharacter: Character | null = null;
  private userName: string;

  private apiUrl = 'http://localhost:8080/api/characters';
  private searchUrl = `${this.apiUrl}/search/by-visibility`;
  
  constructor(private http: HttpClient) {
    //this.loadCharactersFromStorage();
    //this.fetchCharacters();
    this.userName = UsernameAndLogoutComponent.userName;
    this.fetchPrivateCharacters('private', this.userName);
  }

  private saveCharactersToStorage(): void {
    localStorage.setItem('characters', JSON.stringify(this.characters));
  }

  deleteCharacterById(id: number): void {
    console.log("in deleteCharacterById");
    const index = this.characters.findIndex(char => char.id === id);
    console.log(`Found index ${index}!`);
    if (index !== -1) {
      console.log(`Splicing characters at index ${index}!`);
      this.characters.splice(index, 1);
    }
    this.saveCharactersToStorage();
    this.loadCharactersFromStorage();
  }

  private loadCharactersFromStorage(): void {
    const data = localStorage.getItem('characters');
    const parsedData = data ? JSON.parse(data) : [];
    this.characters = parsedData.map((item: any) => {
      const character = new Character(item.name, item.id);
      Object.assign(character, item);
      return character;
    });
  }

  createCharacter(name: string): Character {
    const newCharacter = new Character(name);
    this.characters.push(newCharacter);
    this.setCurrentCharacter(newCharacter);
    this.saveCharactersToStorage();
    
    return newCharacter;
  }

  createCopiedCharacter(name: string, character: Character): Character {
    const newCharacter = new Character(name);

    Object.assign(newCharacter, character);
    newCharacter.name = name;
    newCharacter.id = undefined;

    this.characters.push(newCharacter);
    this.setCurrentCharacter(newCharacter);
    this.saveCharactersToStorage();

    return newCharacter;
  }

  setCurrentCharacter(character: Character): void {
    this.currentCharacter = character;
    if (this.currentCharacter) {
      console.log(`Current character set to: ${this.currentCharacter.name}, ${this.currentCharacter.id}`);
    } else {
      console.warn(`Character not assigned.`);
    }
  }

  getCharacters(): Character[] {
    return this.characters;
  }

  getPublicCharacters(): Character[] {
    return this.characters.filter(character => character.visibility === 'public');
  }

  getCurrentCharacter(): Character | null {
    if (this.currentCharacter) {
      ////console.log(`Current character retrieved: ${JSON.stringify(this.currentCharacter)}`);
      //console.log(this.currentCharacter instanceof Character);
    } else {
      //console.warn(`No current character is set.`);
    }
    return this.currentCharacter;
  }

  private getCharacterByName(name: string): Character | undefined {
    const character = this.characters.find(character => character.name === name);
    if (character) {
      ////console.log(`Character found by name ${name}: ${JSON.stringify(character)}`);
    } else {
      ////console.warn(`Character not found by name: ${name}`);
    }
    return character;
  }

  private getCharacterById(id: number): Character | undefined {
    var foundCharacter = this.characters.find(character => character.id === id);
    if (foundCharacter) {
      var character = new Character(foundCharacter.name, foundCharacter.id);
      Object.assign(character, foundCharacter);
      ////console.log("getCharacterById");
      ////console.log(character instanceof Character);
      return character;
      ////console.log(`Character found by id ${id}: ${JSON.stringify(character)}`);
    } else {
      return undefined;
      ////console.warn(`Character not found by id: ${id}`);
    }
  }

  updateCurrentCharacter(updatedData: Partial<Character>): void {
    if (this.currentCharacter) {
      const index = this.characters.findIndex(char => char.id === this.currentCharacter?.id);
      if (index !== -1) {
        //this.characters[index] = { ...updatedData } as Character;
        Object.assign(this.characters[index], updatedData);
      }

      this.currentCharacter = Object.assign(this.currentCharacter, updatedData) as Character;

      this.currentCharacter.calculateStats();
      //this.currentCharacter.calculateSavingThrows(this.currentCharacter.level);
      //this.currentCharacter.calculateSkills();
      if (index !== -1) {
        this.characters[index] = { ...this.currentCharacter } as Character;
      }
      
      ////console.log(`Current character updated: ${JSON.stringify(this.currentCharacter)}`);
      this.saveCharactersToStorage();
    } else {
      ////console.warn(`No current character to update.`);
    }
  }


  // API calls
  fetchCharacters(): Observable<Character[]> {
    return new Observable((subscriber) => {
      this.http.get<Character[]>(this.apiUrl).subscribe(
        (data: Character[]) => {
          this.characters = data;
          subscriber.next(this.characters);
          subscriber.complete();
        },
        (error) => {
          subscriber.error(error);
        }
      );
    });
  }

  addCharacter(character: Character): Observable<Character> {
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
    return new Observable((subscriber) => {
      this.http.delete<void>(`${this.apiUrl}/${characterId}`).subscribe(
        () => {
          this.characters = this.characters.filter((c) => c.id !== characterId);
          subscriber.next();
          subscriber.complete();
        },
        (error) => {
          subscriber.error(error);
        }
      );
    });
  }

  fetchPrivateCharacters(visibility: string, playerName: string): Observable<Character[]> {
    const params = new HttpParams().set('visibility', visibility).set('playerName', playerName);

    return new Observable((subscriber) => {
      this.http.get<Character[]>(this.searchUrl, { params }).subscribe(
        (data: Character[]) => {
          this.characters = data;
          subscriber.next(this.characters);
          subscriber.complete();
        },
        (error) => {
          subscriber.error(error);
        }
      );
    });
  }

  fetchPublicCharacters(): Observable<Character[]> {
    const params = new HttpParams().set('visibility', 'public');

    return new Observable((subscriber) => {
      this.http.get<Character[]>(this.searchUrl, { params }).subscribe(
        (data: Character[]) => {
          this.characters = data;
          subscriber.next(this.characters);
          subscriber.complete();
        },
        (error) => {
          subscriber.error(error);
        }
      );
    });
  }
}
