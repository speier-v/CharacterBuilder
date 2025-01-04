import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Abilities, Character } from '../../../../character-model/character.model';
import { CharacterGenService } from '../../../../character-model/character-gen.service';
import { RoutePaths } from '../../../../core/routing/route-paths.enum';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'stats',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.css',
})
export class StatsComponent {

  @Output() navigate = new EventEmitter<string>();
  @Input() stats: Abilities = {
    dexterity: 10,
    strength: 10,
    wisdom: 10,
    intelligence: 10,
    charisma: 10,
    constitution: 10,
  };
  @Output() statsChange = new EventEmitter<Abilities>();
  selectedStat: string | null = null;
  rolledValue: number | null = null;
  showScoreModifierTable: boolean = false;
  character: Character | null = null;
  isFromSavedCharacter: boolean = false;
  selectedOption: string = '';

  availableValues = [15, 14, 13, 12, 10, 8] as (number | string)[];
  manualEntryStats: { [key in keyof Abilities]?: boolean } = {};
  manualStatValues: { [key in keyof Abilities]?: number | null } = {};
  rolledEntryStats: { [key in keyof Abilities]?: boolean } = {};
  rolledStatValues: { [key in keyof Abilities]?: number | null } = {};
  statsList: (keyof Abilities)[] = [
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
    if (this.character != null) {
      this.stats = this.character.abilities;
      this.initializeStats();
    }
  }

  initializeStats() {
    let allValuesAreNull = true;
    for (const stat in this.stats) {
      if (this.stats.hasOwnProperty(stat)) {
        const statKey = stat as keyof Abilities;

        this.manualEntryStats[statKey] = true;
        this.manualStatValues[statKey] = this.stats[statKey];

        if (this.stats[statKey] !== null) {
          allValuesAreNull = false;
        }
      }
    }

    this.isFromSavedCharacter = !allValuesAreNull;
  }

  isValueAssigned(value: string | number): boolean {
    return typeof value === 'number' && Object.values(this.stats).includes(value);
  }

  assignValue(stat: keyof Abilities, event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const value = selectElement.value;

    if (value === 'manual') {
      this.manualEntryStats[stat] = true;
      this.rolledEntryStats[stat] = false;
      this.rolledValue = null;
      this.stats[stat] = 0;
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
      this.stats[stat] = value ? parseInt(value, 10) : 0;
    }
    this.statsChange.emit(this.stats);
    this.setStatsToCharacter();
  }


  updateManualValue(stat: keyof Abilities, event: Event) {
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
    this.stats[stat] = value ? value : 0;
    this.statsChange.emit(this.stats);
    this.setStatsToCharacter();
  }

  setStatsToCharacter() {
    this.character = this.characterService.getCurrentCharacter();
    if (this.character != null) {
      this.character.abilities = this.stats;
      this.characterService.updateCurrentCharacter(this.character);
    }
    console.log('Stats: ', this.stats);
  }

  unassignValue(stat: keyof Abilities) {
    this.stats[stat] = 0;
    this.manualEntryStats[stat] = false;
    this.rolledEntryStats[stat] = false;
    this.statsChange.emit(this.stats);
  }

  toggleDescription(stat: string): void {
    this.selectedStat = this.selectedStat === stat ? null : stat;
  }

  clickToNav() {
    this.character = this.characterService.getCurrentCharacter();
    this.router.navigate([`/${RoutePaths.PRIVATE_CHARACTER_SHEET}`]);
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
    this.character = this.characterService.getCurrentCharacter();
    this.navigate.emit('character-class');
  }

  onSelectionChange() {
    switch (this.selectedOption) {
      case 'Standard Array':
        //this.executeOption1();
        break;
      case 'Manual':
        //this.executeOption2();
        break;
      case 'Random':
        var stat;
        for (stat of this.statsList) {
          this.manualEntryStats[stat] = false;
          this.rolledEntryStats[stat] = true;
          this.rolledValue = this.roll4d6();
          this.rolledStatValues[stat] = this.rolledValue;
          this.stats[stat] = this.rolledValue;
        }
        break;
    }

    this.statsChange.emit(this.stats);
    this.setStatsToCharacter();
  }

  reroll() {
    var stat;
    for (stat of this.statsList) {
      this.manualEntryStats[stat] = false;
      this.rolledEntryStats[stat] = true;
      this.rolledValue = this.roll4d6();
      this.rolledStatValues[stat] = this.rolledValue;
      this.stats[stat] = this.rolledValue;
    }
    this.statsChange.emit(this.stats);
    this.setStatsToCharacter();
  }
}
