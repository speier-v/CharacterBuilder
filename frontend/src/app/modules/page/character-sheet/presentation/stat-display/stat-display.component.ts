import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { Abilities, Character } from '../../../../character-model/character.model';
import { CharacterGenService } from '../../../../character-model/character-gen.service';

@Component({
  selector: 'stat-display',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './stat-display.component.html',
  styleUrl: './stat-display.component.css',
})
export class StatDisplayComponent {

  character: Character | null = null;
  statEntries: [string, any][] | null = null;
  stats: Abilities | null = null;

  constructor(private characterService: CharacterGenService) {
    this.character = this.characterService.getCurrentCharacter();

    if (this.character) {
      this.stats = this.character?.abilities;
      this.statEntries = Object.entries(this.stats);
    }    
  }

  calculateModifier(value: number | null): number {
    if (value === null) return 0;
    return Math.floor((value - 10) / 2);
  }
}
