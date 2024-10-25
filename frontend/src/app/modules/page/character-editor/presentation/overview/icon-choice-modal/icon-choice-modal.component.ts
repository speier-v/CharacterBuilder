import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'icon-choice-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icon-choice-modal.component.html',
  styleUrl: './icon-choice-modal.component.css'
})
export class IconChoiceModalComponent {
  @Input() isOpen: boolean = false;
  @Output() close = new EventEmitter<void>();

  onClose() {
    this.isOpen = false;
    this.close.emit();
  }
}
