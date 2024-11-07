import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconImages } from '../../../../../character-model/character.model';

@Component({
  selector: 'icon-choice-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icon-choice-modal.component.html',
  styleUrl: './icon-choice-modal.component.css',
})
export class IconChoiceModalComponent {
  @Input() isOpen: boolean = false;
  @Output() close = new EventEmitter<void>();
  @Output() imageSelected = new EventEmitter<String>();

  selectedImage: String | null = null;
  images: Array<String>;

  constructor() {
    this.images = new IconImages().images;
  }

  selectImage(image: String) {
    this.selectedImage = image;
    this.imageSelected.emit(this.selectedImage);
  }

  onClose() {
    this.isOpen = false;
    this.close.emit();
  }
}
