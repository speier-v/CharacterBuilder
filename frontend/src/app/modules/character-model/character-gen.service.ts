import { Injectable } from '@angular/core';
import { Character, CharacterStats } from './character.model';

@Injectable({
  providedIn: 'root',
})
export class CharacterGenService {
  private characters: Character[] = [];
  private currentCharacter: Character | null = null;
  private lastAssignedId: number = 0;
  
  constructor() {
    this.loadCharactersFromStorage();
  }

  private saveCharactersToStorage(): void {
    localStorage.setItem('characters', JSON.stringify(this.characters));
    console.log(`Characters saved to storage: ${JSON.stringify(this.characters)}`);
  }

  private loadCharactersFromStorage(): void {
    const data = localStorage.getItem('characters');
    this.characters = data ? JSON.parse(data) : [];
    console.log(`Characters loaded from storage: ${JSON.stringify(this.characters)}`);
  }

  createCharacter(name: string): Character {
    const newCharacter = new Character(name, (this.lastAssignedId+1));
    this.lastAssignedId += 1;
    this.characters.push(newCharacter);
    this.setCurrentCharacter(newCharacter.id);
    this.saveCharactersToStorage();
    console.log(`New character created: ${JSON.stringify(newCharacter)}`);
    return newCharacter;
  }

  setCurrentCharacter(id: number): void {
    this.currentCharacter = this.getCharacterById(id) || null;
    if (this.currentCharacter) {
      console.log(`Current character set to: ${this.currentCharacter.name}, ${this.currentCharacter.id}`);
    } else {
      console.warn(`Character with id ${id} not found.`);
    }
  }

  getCharacters(): Character[] {
    console.log(`Getting all characters: ${JSON.stringify(this.characters)}`);
    return this.characters;
  }

  getCurrentCharacter(): Character | null {
    if (this.currentCharacter) {
      console.log(`Current character retrieved: ${JSON.stringify(this.currentCharacter)}`);
    } else {
      console.warn(`No current character is set.`);
    }
    return this.currentCharacter;
  }

  private getCharacterByName(name: string): Character | undefined {
    const character = this.characters.find(character => character.name === name);
    if (character) {
      console.log(`Character found by name ${name}: ${JSON.stringify(character)}`);
    } else {
      console.warn(`Character not found by name: ${name}`);
    }
    return character;
  }

  private getCharacterById(id: number): Character | undefined {
    const character = this.characters.find(character => character.id === id);
    if (character) {
      console.log(`Character found by id ${id}: ${JSON.stringify(character)}`);
    } else {
      console.warn(`Character not found by id: ${id}`);
    }
    return character;
  }

  updateCurrentCharacter(updatedData: Partial<Character>): void {
    if (this.currentCharacter) {
      const index = this.characters.findIndex(char => char.id === this.currentCharacter?.id);
      if (index !== -1) {
        //this.characters[index] = { ...updatedData } as Character;
        Object.assign(this.characters[index], updatedData);
      }

      this.currentCharacter = Object.assign(this.currentCharacter, updatedData) as Character;

      this.currentCharacter.calculateAdditionalStats();
      this.currentCharacter.calculateSavingThrows(this.currentCharacter.level);
      this.currentCharacter.calculateSkills();
      if (index !== -1) {
        this.characters[index] = { ...this.currentCharacter } as Character;
      }
      
      console.log(`Current character updated: ${JSON.stringify(this.currentCharacter)}`);
      this.saveCharactersToStorage();
    } else {
      console.warn(`No current character to update.`);
    }
  }
}
