import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModelCharacterClass } from '../../../../../character-model/character.model';

@Component({
  selector: 'class-description',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './class-description.component.html',
  styleUrl: './class-description.component.css'
})
export class ClassDescriptionComponent {
  @Input() selectedClass: ModelCharacterClass | null = null;
  @Input() selectedLevel: number | null = null;
  selectedAbilities: (any | null)[] = [null, null, null];

  abilities = [
    [false, "Dex", "Acrobatics", "+3"],
    [false, "Wis", "Animal Handling", "+9"],
    [false, "Int", "Arcana", "+6"],
    [false, "Str", "Athletics", "+0"],
    [false, "Cha", "Deception", "+5"],
    [false, "Int", "History", "+3"],
    [false, "Wis", "Insight", "+5"],
    [false, "Cha", "Intimidation", "+4"],
    [false, "Int", "Investigation", "+9"],
    [false, "Wis", "Medicine", "-1"],
    [false, "Int", "Nature", "+5"],
    [false, "Wis", "Perception", "+5"],
    [false, "Cha", "Performance", "+0"],
    [false, "Cha", "Persuasion", "+0"],
    [false, "Int", "Religion", "+5"],
    [false, "Dex", "Sleight of Hand", "+3"],
    [false, "Dex", "Stealth", "+3"],
    [false, "Wis", "Survival", "-1"]
  ];

  get availableAbilities() {
    return this.abilities.filter(ability => 
      !this.selectedAbilities.includes(ability) || 
      this.selectedAbilities.some(selectedAbility => selectedAbility === ability)
    );
  }

  onAbilityChange(index: number) {
    const selectedAbility = this.selectedAbilities[index];

    this.abilities.forEach(abillity => {
      if (abillity === selectedAbility) {
        abillity[0] = true;
      } else if (!this.selectedAbilities.includes(abillity)) {
        abillity[0] = false;
      }
    });
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
