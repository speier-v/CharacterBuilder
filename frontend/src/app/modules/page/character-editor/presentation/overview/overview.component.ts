import { Component } from '@angular/core';
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
  isModalOpen = false;

  showImageChoice() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
}
