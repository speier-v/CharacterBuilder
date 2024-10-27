import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconChoiceModalComponent } from './icon-choice-modal/icon-choice-modal.component';
import { ClassChoiceDropdownComponent } from './class-choice-dropdown/class-choice-dropdown.component';
import { ClassDescriptionComponent } from './class-description/class-description.component';
import { LevelChoiceDropdownComponent } from './level-choice-dropdown/level-choice-dropdown.component';
import { modelCharacterClasses, ModelCharacterClass } from '../../character.model';

@Component({
  selector: 'character-class',
  standalone: true,
  imports: [IconChoiceModalComponent, CommonModule, ClassChoiceDropdownComponent, ClassDescriptionComponent, LevelChoiceDropdownComponent],
  templateUrl: './character-class.component.html',
  styleUrl: './character-class.component.css'
})
export class CharacterClassComponent {
  @Input() selectedImage: { src: string; caption: string } | null = null;
  isModalOpen = false;
  @Output() navigate = new EventEmitter<string>();
  dropdownSelectedClass: string | null = null;

  // logic for character classes
  // TODO: actually load from DB instead of statically from model
  characterClasses = modelCharacterClasses;
  selectedClass: ModelCharacterClass | null = null;
  selectedLevel: number | null = null;


  showImageChoice() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  onImageSelected(image: { src: string; caption: string } | null) {
    this.selectedImage = image;
  }

  onNavigate() {
    this.navigate.emit('stats');
  }

  onClassChosen(selected: string) {
    this.dropdownSelectedClass = selected;
    this.selectedClass = this.characterClasses.find(c => c.className === selected) || null;
    this.selectedLevel = null;
  }

  onLevelSelection(level: number | null) {
    this.selectedLevel = level;
  }
}
