import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Character, GatheredSkills, Skill, SkillsProficiencies } from '../../../../character-model/character.model';
import { CharacterGenService } from '../../../../character-model/character-gen.service';

@Component({
  selector: 'skills-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills-display.component.html',
  styleUrl: './skills-display.component.css',
})
export class SkillsDisplayComponent {
  character : Character | null = null;
  gatheredSkills: GatheredSkills;
  dexterityMod: number | undefined;
  strengthMod: number | undefined;
  wisdomMod: number | undefined;
  intelligenceMod: number | undefined;
  charismaMod: number | undefined;

  constructor(private characterService: CharacterGenService) {
    this.character = characterService.getCurrentCharacter();
    this.gatheredSkills = {
      acrobatics: { ability: "Dex", proficient: false, bonus: 0 },
      animalHandling: { ability: "Wis", proficient: false, bonus: 0 },
      arcana: { ability: "Int", proficient: false, bonus: 0 },
      athletics: { ability: "Str", proficient: false, bonus: 0 },
      deception: { ability: "Cha", proficient: false, bonus: 0 },
      history: { ability: "Int", proficient: false, bonus: 0 },
      insight: { ability: "Wis", proficient: false, bonus: 0 },
      intimidation: { ability: "Cha", proficient: false, bonus: 0 },
      investigation: { ability: "Int", proficient: false, bonus: 0 },
      medicine: { ability: "Wis", proficient: false, bonus: 0 },
      nature: { ability: "Int", proficient: false, bonus: 0 },
      perception: { ability: "Wis", proficient: false, bonus: 0 },
      performance: { ability: "Cha", proficient: false, bonus: 0 },
      persuasion: { ability: "Cha", proficient: false, bonus: 0 },
      religion: { ability: "Wis", proficient: false, bonus: 0 },
      sleightOfHand: { ability: "Dex", proficient: false, bonus: 0 },
      stealth: { ability: "Dex", proficient: false, bonus: 0 },
      survival: { ability: "Wis", proficient: false, bonus: 0 },
    };

    if (this.character) {

      this.dexterityMod = this.calculateModifier(this.character.abilities.dexterity);
      this.strengthMod = this.calculateModifier(this.character.abilities.strength);
      this.wisdomMod = this.calculateModifier(this.character.abilities.wisdom);
      this.intelligenceMod = this.calculateModifier(this.character.abilities.intelligence);
      this.charismaMod = this.calculateModifier(this.character.abilities.charisma);

      this.gatheredSkills = {
        acrobatics: { ability: "Dex", proficient: this.character.skillsProficiencies.acrobatics, bonus: this.calculateProficiency(this.dexterityMod, this.character.skillsProficiencies.acrobatics) },
        animalHandling: { ability: "Wis", proficient: this.character.skillsProficiencies.animalHandling, bonus: this.calculateProficiency(this.wisdomMod, this.character.skillsProficiencies.animalHandling) },
        arcana: { ability: "Int", proficient: this.character.skillsProficiencies.arcana, bonus: this.calculateProficiency(this.intelligenceMod, this.character.skillsProficiencies.arcana) },
        athletics: { ability: "Str", proficient: this.character.skillsProficiencies.athletics, bonus: this.calculateProficiency(this.strengthMod, this.character.skillsProficiencies.athletics) },
        deception: { ability: "Cha", proficient: this.character.skillsProficiencies.deception, bonus: this.calculateProficiency(this.charismaMod, this.character.skillsProficiencies.deception) },
        history: { ability: "Int", proficient: this.character.skillsProficiencies.history, bonus: this.calculateProficiency(this.intelligenceMod, this.character.skillsProficiencies.history) },
        insight: { ability: "Wis", proficient: this.character.skillsProficiencies.insight, bonus: this.calculateProficiency(this.wisdomMod, this.character.skillsProficiencies.insight) },
        intimidation: { ability: "Cha", proficient: this.character.skillsProficiencies.intimidation, bonus: this.calculateProficiency(this.charismaMod, this.character.skillsProficiencies.intimidation) },
        investigation: { ability: "Int", proficient: this.character.skillsProficiencies.investigation, bonus: this.calculateProficiency(this.intelligenceMod, this.character.skillsProficiencies.investigation) },
        medicine: { ability: "Wis", proficient: this.character.skillsProficiencies.medicine, bonus: this.calculateProficiency(this.wisdomMod, this.character.skillsProficiencies.medicine) },
        nature: { ability: "Int", proficient: this.character.skillsProficiencies.nature, bonus: this.calculateProficiency(this.intelligenceMod, this.character.skillsProficiencies.nature) },
        perception: { ability: "Wis", proficient: this.character.skillsProficiencies.perception, bonus: this.calculateProficiency(this.wisdomMod, this.character.skillsProficiencies.perception) },
        performance: { ability: "Cha", proficient: this.character.skillsProficiencies.performance, bonus: this.calculateProficiency(this.charismaMod, this.character.skillsProficiencies.performance) },
        persuasion: { ability: "Cha", proficient: this.character.skillsProficiencies.persuasion, bonus: this.calculateProficiency(this.charismaMod, this.character.skillsProficiencies.persuasion) },
        religion: { ability: "Wis", proficient: this.character.skillsProficiencies.religion, bonus: this.calculateProficiency(this.wisdomMod, this.character.skillsProficiencies.religion) },
        sleightOfHand: { ability: "Dex", proficient: this.character.skillsProficiencies.sleightOfHand, bonus: this.calculateProficiency(this.dexterityMod, this.character.skillsProficiencies.sleightOfHand) },
        stealth: { ability: "Dex", proficient: this.character.skillsProficiencies.stealth, bonus: this.calculateProficiency(this.dexterityMod, this.character.skillsProficiencies.stealth) },
        survival: { ability: "Wis", proficient: this.character.skillsProficiencies.survival, bonus: this.calculateProficiency(this.wisdomMod, this.character.skillsProficiencies.survival) },
      };
    }
  }

  calculateProficiency(base: number, isProficient: boolean) : number {
    if (isProficient && this.character) {
      return base + this.character.proficiencyBonus;
    } else {
      return base;
    }
  }

  calculateModifier(score: number | null): number {
    if (score != null) {
      return Math.floor((score - 10) / 2);
    }
    return Math.floor((10 - 10) / 2);
  }
}
