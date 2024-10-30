import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

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
  @Output() imageSelected = new EventEmitter<{ src: string; caption: string } | null>();

  images = [
    { src: 'assets/images/character_frame_questionmark.jpeg', caption: 'Caption 1' },
    { src: 'assets/images/character_frame_empty.jpeg', caption: 'Caption 2' },
    { src: 'assets/images/character_frame_empty.jpeg', caption: 'Caption 3' },
    { src: 'assets/images/character_frame_empty.jpeg', caption: 'Caption 4' },
    { src: 'assets/images/character_frame_empty.jpeg', caption: 'Caption 5' },
    { src: 'assets/images/character_frame_empty.jpeg', caption: 'Caption 6' },
    { src: 'assets/images/character_frame_empty.jpeg', caption: 'Caption 7' },
    { src: 'assets/images/character_frame_empty.jpeg', caption: 'Caption 8' },
    { src: 'assets/images/character_frame_empty.jpeg', caption: 'Caption 9' },
  ];

  selectedImage: { src: string; caption: string } | null = null;

  selectImage(image: { src: string; caption: string }) {
    this.selectedImage = image;
    this.imageSelected.emit(this.selectedImage);
  }

  onClose() {
    this.isOpen = false;
    this.close.emit();
  }
}
