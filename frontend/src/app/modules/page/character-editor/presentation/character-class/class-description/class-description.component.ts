import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModelCharacterClass } from '../../../../../character-model/character.model';
import { CharacterGenService } from '../../../../../character-model/character-gen.service';
import { Character, skillProficiencies } from '../../../../../character-model/character.model';

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

  selectedAbilities: (keyof skillProficiencies | null)[] = [null, null, null];
  abilities: skillProficiencies = {
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
      this.abilities = this.character.skillProficiencies;
    }

    this.initializeSelectedAbilities();
  }

  get availableAbilities(): (keyof skillProficiencies)[] {
    if (this.abilities) {
      const abilityKeys = Object.keys(this.abilities) as (keyof skillProficiencies)[];
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
        .filter(key => this.abilities[key as keyof skillProficiencies])
        .slice(0, 3) as (keyof skillProficiencies)[];
    } else {
      this.selectedAbilities = [null, null, null];
    }
  }

  onAbilityChange(index: number) {
    const selectedAbility = this.selectedAbilities[index];

    if (this.abilities) {
      Object.keys(this.abilities).forEach(abilityKey => {
        const key = abilityKey as keyof skillProficiencies;

        if (key === selectedAbility) {
          this.abilities[key] = true;
        } else if (!this.selectedAbilities.includes(key)) {
          this.abilities[key] = false;
        }
      });
    }

    if (this.character && this.abilities) {
      this.character.skillProficiencies = this.abilities;
      this.character.calculateSkills();
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
