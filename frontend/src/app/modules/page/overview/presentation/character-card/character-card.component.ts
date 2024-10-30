import {Component, Input} from '@angular/core';
import {NgIf, NgOptimizedImage} from '@angular/common';
import {RouterLink} from '@angular/router';
import {CopyCharacterModalComponent} from '../copy-character-modal/copy-character-modal.component';

@Component({
  selector: 'character-card',
  standalone: true,
  imports: [
    NgOptimizedImage,
    RouterLink,
    CopyCharacterModalComponent,
    NgIf,
  ],
  templateUrl: './character-card.component.html',
  styleUrl: './character-card.component.css'
})
export class CharacterCardComponent {
  @Input() isPublicCharacterCard = false;

  protected modalOpen = false;
  protected showDeleteConfirmationDialog = false;

  protected toggleModalVisibility() {
    this.modalOpen = !this.modalOpen;
  }

  protected toggleShowDeleteConfirmationDialog() {
    this.showDeleteConfirmationDialog = !this.showDeleteConfirmationDialog;
  }
}
