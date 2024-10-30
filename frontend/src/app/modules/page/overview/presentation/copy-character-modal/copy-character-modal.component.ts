import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForOf, NgIf } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

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
  @Output() modalClosedEvent = new EventEmitter<void>();

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
}
