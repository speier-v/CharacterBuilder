import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CharacterStats } from '../../../../character-model/character.model';

@Component({
  selector: 'stats',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.css'
})
export class StatsComponent {

  constructor(private router: Router) {}

  @Input() stats: CharacterStats = {
    dexterity: null,
    strength: null,
    wisdom: null,
    intelligence: null,
    charisma: null,
    constitution: null
  };
  @Output() statsChange = new EventEmitter<CharacterStats>();

  selectedStat: string | null = null;
  availableValues = [15, 14, 13, 12, 10, 8];
  statsList: (keyof CharacterStats)[] = [
    'dexterity', 'strength', 'wisdom', 'intelligence', 'charisma', 'constitution'
  ];
  statDescriptions: { [key: string]: string } = {
    strength: 'Determines physical power and carrying capacity.',
    dexterity: 'Represents agility, reflexes, and balance.',
    constitution: 'Affects endurance and health points.',
    intelligence: 'Reflects reasoning and memory.',
    wisdom: 'Influences perception and intuition.',
    charisma: 'Measures force of personality and persuasiveness.'
  };
  statIcons: { [key: string]: string } = {
    strength: '💪',
    dexterity: '🏃',
    constitution: '💖',
    intelligence: '🧠',
    wisdom: '🦉',
    charisma: '🎭'
  };

  isValueAssigned(value: number): boolean {
    return Object.values(this.stats).includes(value);
  }

  assignValue(stat: keyof CharacterStats, event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const value = selectElement.value ? parseInt(selectElement.value, 10) : null;
    this.stats[stat] = value;
    this.statsChange.emit(this.stats);
  }

  unassignValue(stat: keyof CharacterStats) {
    this.stats[stat] = null;
    this.statsChange.emit(this.stats);
  }

  toggleDescription(stat: string): void {
    this.selectedStat = this.selectedStat === stat ? null : stat;
  }

  clickToNav() {
    this.router.navigate(['/character-sheet']);
  }
}
