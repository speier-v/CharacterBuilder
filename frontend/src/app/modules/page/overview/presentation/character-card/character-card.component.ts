import { ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { NgIf, NgOptimizedImage } from '@angular/common';
import { Router } from '@angular/router';
import { CopyCharacterModalComponent } from '../copy-character-modal/copy-character-modal.component';
import { Character } from '../../../../character-model/character.model';
import { CharacterGenService } from '../../../../character-model/character-gen.service';
import { RoutePaths } from '../../../../core/routing/route-paths.enum';
import { environment } from '../../../../../../environments/environment';
import { DetectClicksOutsideDirective } from '../../../shared/detect-clicks-outside.directive';

@Component({
  selector: 'character-card',
  standalone: true,
  imports: [
    CopyCharacterModalComponent,
    NgIf,
    NgOptimizedImage,
    DetectClicksOutsideDirective,
  ],
  templateUrl: './character-card.component.html',
  styleUrl: './character-card.component.css',
})
export class CharacterCardComponent implements OnChanges {
  @Input() isPublicCharacterCard = false;
  @Input() character: Character | null = null;
  @Output() characterDeleted = new EventEmitter<number>();
  @Output() characterCopied = new EventEmitter<void>();

  protected modalOpen = false;
  protected showDeleteConfirmationDialog = false;

  constructor(private router: Router,
    private characterService: CharacterGenService,
    private cdr: ChangeDetectorRef)
    {
    console.log(`Card with the following character ${this.character}`);
  }

  ngOnChanges() {
    this.cdr.detectChanges();
    console.log(this.character);
  }

  protected toggleModalVisibility() {
    this.modalOpen = !this.modalOpen;
  }

  protected toggleShowDeleteConfirmationDialog() {
    this.showDeleteConfirmationDialog = !this.showDeleteConfirmationDialog;
  }

  navigateToEditor() {
    if (this.character != null) {
      this.characterService.setCurrentCharacter(this.character);
    }
    this.router.navigate([`/${RoutePaths.CHARACTER_EDITOR}`]);
  }

  navigateToCharacterSheet() {
    if (this.character != null) {
      this.characterService.setCurrentCharacter(this.character);
    }

    if (this.isPublicCharacterCard) {
      this.router.navigate([`/${RoutePaths.PUBLIC_CHARACTER_SHEET}`]);
    } else {
      this.router.navigate([`/${RoutePaths.PRIVATE_CHARACTER_SHEET}`]);
    }
  }

  deleteCharacter() {
    if (this.character && this.character.id) {
      this.characterDeleted.emit(this.character.id);
    } else {
      console.log('couldn\'t assign this.character for deletion??');
    }
  }

  onCharacterCopied() {
    this.characterCopied.emit();
  }

  protected readonly environment = environment;
}
