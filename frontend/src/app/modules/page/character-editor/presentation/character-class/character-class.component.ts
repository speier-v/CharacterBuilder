import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { IconChoiceModalComponent } from './icon-choice-modal/icon-choice-modal.component';
import { ClassChoiceDropdownComponent } from './class-choice-dropdown/class-choice-dropdown.component';
import { ClassDescriptionComponent } from './class-description/class-description.component';
import { LevelChoiceDropdownComponent } from './level-choice-dropdown/level-choice-dropdown.component';
import { ModelCharacterClass, modelCharacterClasses } from '../../../../character-model/character.model';
import { CharacterGenService } from '../../../../character-model/character-gen.service';
import { Character, IconImages } from '../../../../character-model/character.model';

@Component({
  selector: 'character-class',
  standalone: true,
  imports: [IconChoiceModalComponent, CommonModule, ClassChoiceDropdownComponent, ClassDescriptionComponent, LevelChoiceDropdownComponent, ReactiveFormsModule],
  templateUrl: './character-class.component.html',
  styleUrl: './character-class.component.css',
})
export class CharacterClassComponent {
  @Input() selectedImage: String;
  isModalOpen = false;
  @Output() navigate = new EventEmitter<string>();
  dropdownSelectedClass: string | null = null;

  // logic for character classes
  // TODO: actually load from DB instead of statically from model
  character: Character | null = null;
  characterClasses = modelCharacterClasses;
  selectedClass: ModelCharacterClass | null = null;
  selectedLevel: number | null = null;
  images: Array<String>;

  constructor(private characterService: CharacterGenService) {
    this.character = this.characterService.getCurrentCharacter();
    this.images = new IconImages().images;
    this.selectedImage = this.images[0];
  }

  protected readonly copyCharacterForm = new FormGroup({
    newCharacterVisibility: new FormControl('character-visibility-private', { updateOn: 'blur' }),
  });

  showImageChoice() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  onImageSelected(image: string) {
    this.selectedImage = image;
    if (this.character != null) {
      this.character.icon = image;
      this.characterService.updateCurrentCharacter(this.character);
    }
  }

  onNavigate() {
    this.navigate.emit('stats');
  }

  onClassChosen(selected: string) {
    this.dropdownSelectedClass = selected;
    this.selectedClass = this.characterClasses.find(c => c.className === selected) || null;
    this.selectedLevel = null;

    if (this.selectedClass != null && this.character != null) {
      this.character.characterClass = this.selectedClass.className;
      this.characterService.updateCurrentCharacter(this.character);
    } else if (this.character != null) {
      this.character.characterClass = '';
      this.characterService.updateCurrentCharacter(this.character);
    }
  }

  onLevelSelection(level: number | null) {
    this.selectedLevel = level;

    if (this.character != null && level != null) {
      this.character.level = level;
      this.characterService.updateCurrentCharacter(this.character);
    } else if (this.character != null) {
      this.character.level = 0;
      this.characterService.updateCurrentCharacter(this.character);
    }
  }
}
