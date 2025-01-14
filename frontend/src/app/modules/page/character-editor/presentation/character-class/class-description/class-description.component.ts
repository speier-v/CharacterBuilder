import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModelCharacterClass, Skill, DisplaySkill } from '../../../../../character-model/character.model';
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

  constructor(private characterService: CharacterGenService) {}

  ngOnInit() {
    this.initializeAbilities();
  }

  ngOnChanges() {
    this.initializeAbilities();
  }

  private initializeAbilities(): void {
    if (this.character) {
      this.abilities = this.character.skillsProficiencies;
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
        .filter(key => this.abilities[key as keyof SkillsProficiencies])
        .slice(0, 3) as (keyof SkillsProficiencies)[];
    } else {
      this.selectedAbilities = [null, null, null];
    }
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
      this.character.skillsProficiencies = this.abilities;
      this.character.calculateSkills();
      this.characterService.updateCurrentCharacter(this.character);
    }
  }
  

  /*
  getSkills() {
    if (!this.selectedClass || !this.selectedLevel) {
      return [];
    } else {
      return this.selectedClass.levels
        .filter(level => level.level <= this.selectedLevel!)
        .flatMap(level => level.skills);
    }
  }
  */

  getSkills() {
    if (!this.selectedClass || !this.selectedLevel) {
      return [];
    } else {
      return this.selectedClass.levels
        .filter(level => level.level <= this.selectedLevel!)
        .flatMap(level =>
          level.skills.map(skill => ({
            ...skill,
            featureType: level.featureType, // Attach featureType to the skill
          }))
        );
    }
  }

  renderFeature(skill: DisplaySkill): string {
    const template = this.featureTemplates[skill.featureType as keyof typeof featureTemplates];
    return template
      ? template
          .replace('{{name}}', skill.name)
          .replace('{{description}}', skill.description)
      : `<strong>${skill.name}:</strong> ${skill.description}`;
  }  
}
