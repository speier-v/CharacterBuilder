import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForOf, NgIf } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CharacterGenService } from '../../../../character-model/character-gen.service';
import { Character } from '../../../../character-model/character.model';
import { Router } from '@angular/router';

@Component({
  selector: 'copy-character-modal',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    ReactiveFormsModule,
  ],
  templateUrl: './copy-character-modal.component.html',
  styleUrl: './copy-character-modal.component.css',
})
export class CopyCharacterModalComponent {
  @Input() modalOpen: boolean = false;
  @Input() character : Character | null = null;
  @Output() modalClosedEvent = new EventEmitter<void>();
  @Output() characterCopied = new EventEmitter<void>();

  constructor(private router: Router, private characterService: CharacterGenService) {
  }

  protected readonly copyCharacterForm = new FormGroup({
    newCharacterName: new FormControl('', {
      validators: [Validators.required, Validators.pattern('([a-zA-Z0-9]+[ -]*)+')],
      updateOn: 'blur',
    }),
    newCharacterVisibility: new FormControl('character-visibility-private', { updateOn: 'blur' }),
  });

  protected modalClosed() {
    this.modalClosedEvent.emit();
  }

  createCopiedCharacter() {
    const characterName = this.copyCharacterForm.get('newCharacterName')?.value;
    const visibility = this.copyCharacterForm.get('newCharacterVisibility')?.value?.split("-")[2];
    if (this.character && characterName && visibility) {
      this.characterService.createCopiedCharacter(characterName, visibility, this.character).subscribe({
        next: (createdCharacter: Character) => {
          this.characterCopied.emit();
          this.modalClosedEvent.emit();
        },
        error: (err) => {
          console.error('Error copying character:', err);
          alert('Failed to copy character. Please try again.');
        },
      });
    }
  }
}
