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
      strength: this.character?.savingThrows.strengthSave,
      charisma: this.character?.savingThrows.charismaSave,
      dexterity: this.character?.savingThrows.dexteritySave,
      constitution: this.character?.savingThrows.constitutionSave,
      wisdom: this.character?.savingThrows.wisdomSave,
      intelligence: this.character?.savingThrows.intelligenceSave,
    };
    this.senses = {
      'passive perception': this.character?.passivePerception,
      'passive investigation': this.character?.passivePerception,
      'passive insight': this.character?.passivePerception,
    };
  }
}
