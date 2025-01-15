import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModelCharacterClass, Skill, DisplaySkill, Abilities } from '../../../../../character-model/character.model';
import { CharacterGenService } from '../../../../../character-model/character-gen.service';
import { Character, SkillsProficiencies } from '../../../../../character-model/character.model';
import { featureTemplates } from '../../../../../character-model/character.model';

@Component({
  selector: 'class-description',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './class-description.component.html',
  styleUrl: './class-description.component.css',
})
export class ClassDescriptionComponent {
  @Input() selectedClass: ModelCharacterClass | null = null;
  @Input() selectedLevel: number | null = null;
  @Input() character: Character | null = null;
  featureTemplates = featureTemplates;

  selectedAbilities: (keyof SkillsProficiencies | null)[] = [null, null, null];
  abilities: SkillsProficiencies = {
    acrobatics: false,
    animalHandling: false,
    arcana: false,
    athletics: false,
    deception: false,
    history: false,
    insight: false,
    intimidation: false,
    investigation: false,
    medicine: false,
    nature: false,
    perception: false,
    performance: false,
    persuasion: false,
    religion: false,
    sleightOfHand: false,
    stealth: false,
    survival: false,
  };
  baseStats: Abilities = {
    strength: 0,
    dexterity: 0,
    constitution: 0,
    intelligence: 0,
    wisdom: 0,
    charisma: 0
  };
  selectedStat : string = '';
  objectKeys = Object.keys;

  constructor(private characterService: CharacterGenService) {
    this.initializeAbilities();
  }

  ngOnInit() {
    this.initializeAbilities();
  }

  ngOnChanges() {
    this.initializeAbilities();
  }

  private initializeAbilities(): void {
    if (this.character) {
      for (const key in this.abilities) {
        if (this.character.skillsProficiencies.hasOwnProperty(key)) {
          this.abilities[key as keyof SkillsProficiencies] = this.character.skillsProficiencies[key as keyof SkillsProficiencies];
        }
      }

      this.selectedStat = this.character.asiIn;
    }

    this.initializeSelectedAbilities();
  }

  get availableAbilities(): (keyof SkillsProficiencies)[] {
    if (this.abilities) {
      const abilityKeys = Object.keys(this.abilities) as (keyof SkillsProficiencies)[];
      return abilityKeys.filter(
        ability =>
          !this.selectedAbilities.includes(ability) ||
          this.selectedAbilities.some(selectedAbility => selectedAbility === ability)
      );
    }
    return [];
  }

  initializeSelectedAbilities(): void {
    if (this.abilities) {
      this.selectedAbilities = Object.keys(this.abilities)
        .filter(key => this.abilities[key as keyof SkillsProficiencies] && key != "id")
        .slice(0, 3) as (keyof SkillsProficiencies)[];
    } else {
      this.selectedAbilities = [null, null, null];
    }
  }

  onStatChange(newStat: string): void {
    this.character = this.characterService.getCurrentCharacter();
    // Undo the previous bonus
    if (this.selectedStat && this.character) {
      console.log("Prev: "+this.character.abilities[this.selectedStat as keyof typeof this.character.abilities]);
      this.character.abilities[this.selectedStat as keyof typeof this.character.abilities] -= 2;
    }

    // Apply the new bonus
    if (newStat && this.character) {
      console.log("New: "+this.character.abilities[newStat as keyof typeof this.character.abilities]);
      this.character.abilities[newStat as keyof typeof this.character.abilities] += 2;
    }

    // Update the selected stat
    this.selectedStat = newStat;

    this.character?.calculateStats();
  }

  onAbilityChange(index: number) {
    this.character = this.characterService.getCurrentCharacter();
    const selectedAbility = this.selectedAbilities[index];

    if (this.abilities) {
      Object.keys(this.abilities).forEach(abilityKey => {
        const key = abilityKey as keyof SkillsProficiencies;

        if (key === selectedAbility) {
          this.abilities[key] = true;
        } else if (!this.selectedAbilities.includes(key)) {
          this.abilities[key] = false;
        }
      });
    }

    if (this.character && this.abilities) {
      
      for (const key in this.abilities) {
        if (this.character.skillsProficiencies.hasOwnProperty(key)) {
          this.character.skillsProficiencies[key as keyof SkillsProficiencies] = this.abilities[key as keyof SkillsProficiencies];
        }
      }
      
      this.character.calculateStats();
      this.characterService.updateCurrentCharacter(this.character);
    }
  }
  
  getSkills() {
    if (!this.selectedClass || !this.selectedLevel) {
      return [];
    } else {
      return this.selectedClass.levels
        .filter(level => level.level <= this.selectedLevel!)
        .flatMap(level => level.skills);
    }
  }
}
