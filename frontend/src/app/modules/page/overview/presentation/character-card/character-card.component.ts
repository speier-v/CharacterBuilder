import { Component, Input, Output, EventEmitter } from '@angular/core';
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
  @Output() characterDeleted = new EventEmitter<number>();

  protected modalOpen = false;
  protected showDeleteConfirmationDialog = false;

  constructor(private router: Router, private characterService: CharacterGenService) {

  }

  /*
  ngOnInit() {
    //console.log(this.character instanceof Character);
  }
  */

  /*
  ngOnChanges() {
    //console.log(this.character instanceof Character);
  }
  */

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

  navigateToCharacterSheet() {
    if (this.character != null) {
      this.characterService.setCurrentCharacter(this.character.id);
    } 
    this.router.navigate(['/character-sheet']);
  }

  deleteCharacter() {
    console.log("in deleteCharacter!");
    if (this.character) {
      console.log("Deleting character...");
      this.characterService.deleteCharacterById(this.character.id);
      console.log("Deleted character!");
      this.characterDeleted.emit(this.character.id);
    } else {
      console.log("couldn't assign this.character for deletion??");
    }
  }

  onCharacterCopied(characterId: number) {
    this.characterDeleted.emit(characterId);
  }
}
