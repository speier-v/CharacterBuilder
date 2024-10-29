import { Injectable } from '@angular/core';
import { Character, ModelCharacterClass, CharacterStats } from './character.model';

@Injectable({
  providedIn: 'root'
})
export class CharacterGenService {
  private characters: Character[] = [];

  constructor() { }

  createCharacter(name: string, characterClass: string, stats: CharacterStats): Character {
    const newCharacter: Character = {
      name,
      level: 1,
      characterClass,
      stats,
    };

    this.characters.push(newCharacter);
    return newCharacter;
  }

  getCharacters(): Character[] {
    return this.characters;
  }
}
