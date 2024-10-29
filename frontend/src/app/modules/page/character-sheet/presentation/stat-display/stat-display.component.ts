import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { CharacterStats } from '../../../../character-model/character.model';

@Component({
  selector: 'stat-display',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './stat-display.component.html',
  styleUrl: './stat-display.component.css'
})
export class StatDisplayComponent {
  stats: CharacterStats = {
    dexterity: 10,
    strength: 12,
    wisdom: 14,
    intelligence: 17,
    charisma: 9,
    constitution: 20
  };
  statEntries = Object.entries(this.stats);
  proficiencyModifier : number = 4;
  currentHP : number = 40;
  maxHP : number = 80;
  initiative : number = 4;
  armorClass : number = 17;

  calculateModifier(value: number | null): number {
    if (value === null) return 0;
    return Math.floor((value - 10) / 2);
  }
}
