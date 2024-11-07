import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CharacterStats, Character } from '../../../../character-model/character.model';
import { CharacterGenService } from '../../../../character-model/character-gen.service';

@Component({
  selector: 'stats',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.css',
})
export class StatsComponent {

  @Output() navigate = new EventEmitter<string>();
  @Input() stats: CharacterStats = {
    dexterity: null,
    strength: null,
    wisdom: null,
    intelligence: null,
    charisma: null,
    constitution: null,
  };
  @Output() statsChange = new EventEmitter<CharacterStats>();
  selectedStat: string | null = null;
  rolledValue: number | null = null;
  showScoreModifierTable: boolean = false;
  character: Character | null = null;

  availableValues = [15, 14, 13, 12, 10, 8, 'manual', 'random'] as (number | string)[];
  manualEntryStats: { [key in keyof CharacterStats]?: boolean } = {};
  manualStatValues: { [key in keyof CharacterStats]?: number | null } = {};
  rolledEntryStats: { [key in keyof CharacterStats]?: boolean } = {};
  rolledStatValues: { [key in keyof CharacterStats]?: number | null } = {};
  statsList: (keyof CharacterStats)[] = [
    'dexterity', 'strength', 'wisdom', 'intelligence', 'charisma', 'constitution',
  ];
  statDescriptions: { [key: string]: string } = {
    strength: `Strength measures your character's physical power and athletic ability. It determines how well they can lift heavy objects, perform feats of brute strength, and deal damage in melee combat. A high Strength score is essential for classes like Fighters and Barbarians, who rely on their might to dominate the battlefield.`,
    dexterity: 'Dexterity reflects agility, reflexes, and hand-eye coordination. It affects your character’s ability to dodge attacks, move stealthily, and perform tasks requiring finesse, such as picking locks or using ranged weapons. Rogues and Rangers often benefit from high Dexterity scores, as it enhances their ability to strike quickly and avoid danger.',
    constitution: 'Constitution represents your character\'s health and stamina. It influences hit points, which determine how much damage your character can take before falling unconscious. A strong Constitution is vital for all classes, especially those that often find themselves in combat, as it bolsters their resilience and durability.',
    intelligence: 'Intelligence measures your character\'s mental acuity and problem-solving abilities. It affects knowledge-based skills, spellcasting for Wizards, and the ability to recall information. Characters with high Intelligence can excel in academic pursuits, magic use, and strategic planning.',
    wisdom: 'Wisdom gauges your character\'s perception, insight, and intuition. It impacts skills related to awareness and understanding of the environment and other characters. Clerics and Druids rely on Wisdom to cast their spells and connect with the world around them, making it crucial for those who seek to guide or heal their allies.',
    charisma: 'Charisma reflects your character\'s charm, persuasion, and leadership abilities. It affects social interactions, making it easier to influence others, negotiate, and command respect. Classes like Bards and Sorcerers thrive on high Charisma scores, using their personality to inspire, deceive, or captivate others in and out of combat.',
  };
  statIcons: { [key: string]: string } = {
    strength: '💪',
    dexterity: '🏃',
    constitution: '💖',
    intelligence: '🧠',
    wisdom: '🦉',
    charisma: '🎭',
  };
  scoreModifierTable = [
    { value: '1', modifier: '-5' },
    { value: '2–3', modifier: '-4' },
    { value: '4–5', modifier: '-3' },
    { value: '6–7', modifier: '-2' },
    { value: '8–9', modifier: '-1' },
    { value: '10–11', modifier: '+0' },
    { value: '12–13', modifier: '+1' },
    { value: '14–15', modifier: '+2' },
    { value: '16–17', modifier: '+3' },
    { value: '18–19', modifier: '+4' },
    { value: '20–21', modifier: '+5' },
    { value: '22–23', modifier: '+6' },
    { value: '24–25', modifier: '+7' },
    { value: '26–27', modifier: '+8' },
    { value: '28–29', modifier: '+9' },
    { value: '30', modifier: '+10' },
  ];

  constructor(private router: Router, private characterService: CharacterGenService) {
    this.character = this.characterService.getCurrentCharacter();
  }

  isValueAssigned(value: string | number): boolean {
    return typeof value === 'number' && Object.values(this.stats).includes(value);
  }

  assignValue(stat: keyof CharacterStats, event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const value = selectElement.value;

    if (value === 'manual') {
      this.manualEntryStats[stat] = true;
      this.rolledEntryStats[stat] = false;
      this.rolledValue = null;
      this.stats[stat] = null;
    } else if (value === 'random') {
      this.manualEntryStats[stat] = false;
      this.rolledEntryStats[stat] = true;
      this.rolledValue = this.roll4d6();
      this.rolledStatValues[stat] = this.rolledValue;
      this.stats[stat] = this.rolledValue;
    } else {
      this.rolledValue = null;
      this.manualEntryStats[stat] = false;
      this.rolledEntryStats[stat] = false;
      this.stats[stat] = value ? parseInt(value, 10) : null;
    }
    this.statsChange.emit(this.stats);
    this.setStatsToCharacter();
  }


  updateManualValue(stat: keyof CharacterStats, event: Event) {
    const inputElement = event.target as HTMLInputElement;
    let value = inputElement.value ? parseInt(inputElement.value, 10) : null;

    if (value !== null && value > 30) {
      value = 30;
      inputElement.value = '30';
    } else if (value !== null && value < 1) {
      value = 1;
      inputElement.value = '1';
    }

    this.manualStatValues[stat] = value;
    this.stats[stat] = value;
    this.statsChange.emit(this.stats);
    this.setStatsToCharacter();
  }

  setStatsToCharacter() {
    if (this.character != null) {
      this.character.stats = this.stats;
      this.characterService.updateCurrentCharacter(this.character);
    }    
    console.log('Stats: ', this.stats);
  }

  unassignValue(stat: keyof CharacterStats) {
    this.stats[stat] = null;
    this.manualEntryStats[stat] = false;
    this.rolledEntryStats[stat] = false;
    this.statsChange.emit(this.stats);
  }

  toggleDescription(stat: string): void {
    this.selectedStat = this.selectedStat === stat ? null : stat;
  }

  clickToNav() {
    this.router.navigate(['/character-sheet']);
  }

  calculateModifier(value: number | null): number {
    if (value === null) return 0;
    return Math.floor((value - 10) / 2);
  }

  toggleScoreModifierTable() {
    this.showScoreModifierTable = !this.showScoreModifierTable;
  }

  isNumber(value: any): boolean {
    return typeof value === 'number';
  }

  roll4d6(): number {
    const rolls = Array.from({ length: 4 }, () => Math.floor(Math.random() * 6) + 1);
    rolls.sort((a, b) => b - a);
    rolls.pop();
    return rolls.reduce((acc, roll) => acc + roll, 0);
  }

  onNavigate() {
    this.navigate.emit('character-class');
  }
}
