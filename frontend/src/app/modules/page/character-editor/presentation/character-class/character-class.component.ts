import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconChoiceModalComponent } from './icon-choice-modal/icon-choice-modal.component';
import { ClassChoiceDropdownComponent } from './class-choice-dropdown/class-choice-dropdown.component';

@Component({
  selector: 'character-class',
  standalone: true,
  imports: [IconChoiceModalComponent, CommonModule, ClassChoiceDropdownComponent],
  templateUrl: './character-class.component.html',
  styleUrl: './character-class.component.css'
})
export class CharacterClassComponent {
  @Input() selectedImage: { src: string; caption: string } | null = null;
  isModalOpen = false;
  @Output() navigate = new EventEmitter<string>();

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
}
