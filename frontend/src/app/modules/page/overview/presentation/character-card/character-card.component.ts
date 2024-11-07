import { Component, Input } from '@angular/core';
import { NgIf, NgOptimizedImage } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { CopyCharacterModalComponent } from '../copy-character-modal/copy-character-modal.component';
import { Character } from '../../../../character-model/character.model';
import { CharacterGenService } from '../../../../character-model/character-gen.service';

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
  styleUrl: './character-card.component.css',
})
export class CharacterCardComponent {
  @Input() isPublicCharacterCard = false;
  @Input() character : Character | null = null;

  protected modalOpen = false;
  protected showDeleteConfirmationDialog = false;

  constructor(private router: Router, private characterService: CharacterGenService) {

  }

  protected toggleModalVisibility() {
    this.modalOpen = !this.modalOpen;
  }

  protected toggleShowDeleteConfirmationDialog() {
    this.showDeleteConfirmationDialog = !this.showDeleteConfirmationDialog;
  }

  navigateToEditor() {
    if (this.character != null) {
      this.characterService.setCurrentCharacter(this.character.id);
    }    
    this.router.navigate(['/character-editor']);
  }
}
