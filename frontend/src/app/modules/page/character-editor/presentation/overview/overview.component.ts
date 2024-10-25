import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconChoiceModalComponent } from './icon-choice-modal/icon-choice-modal.component';

@Component({
  selector: 'overview',
  standalone: true,
  imports: [IconChoiceModalComponent, CommonModule],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.css'
})
export class OverviewComponent {
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
    this.navigate.emit('character-class');
  }
}
