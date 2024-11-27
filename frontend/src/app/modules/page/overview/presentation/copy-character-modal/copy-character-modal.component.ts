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
  @Output() characterCopied = new EventEmitter<number>();

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
    if (this.character && characterName) {
      this.characterService.createCopiedCharacter(characterName, this.character);
      this.characterCopied.emit(this.character.id);
      this.modalClosedEvent.emit();
    }
  }
}
