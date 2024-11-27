import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Character } from '../../../../character-model/character.model';
import { CharacterGenService } from '../../../../character-model/character-gen.service';

@Component({
  selector: 'saving-throws-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './saving-throws-display.component.html',
  styleUrl: './saving-throws-display.component.css',
})
export class SavingThrowsDisplayComponent {

  character: Character | null = null;
  savingThrows: {} | null = null;
  senses: {} | null = null;

  constructor(private characterService: CharacterGenService) {
    this.character = this.characterService.getCurrentCharacter();
  }

  ngOnInit() {
    this.savingThrows = {
      strength: this.character?.savingThrows.strength,
      charisma: this.character?.savingThrows.charisma,
      dexterity: this.character?.savingThrows.dexterity,
      constitution: this.character?.savingThrows.constitution,
      wisdom: this.character?.savingThrows.wisdom,
      intelligence: this.character?.savingThrows.intelligence,
    };
    this.senses = {
      'passive perception': this.character?.additionalStats.passivePerception,
      'passive investigation': this.character?.additionalStats.passiveInvestigation,
      'passive insight': this.character?.additionalStats.passiveInsight,
    };
  }
}
