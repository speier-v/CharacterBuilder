import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgModel } from '@angular/forms';
import { Character } from '../../../../../character-model/character.model';
import { CharacterGenService } from '../../../../../character-model/character-gen.service';

@Component({
  selector: 'class-choice-dropdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './class-choice-dropdown.component.html',
  styleUrl: './class-choice-dropdown.component.css',
})
export class ClassChoiceDropdownComponent {
  items = ['Select option', 'Fighter', 'Wizard', 'Rogue'];
  selectedItem: string | null = null;
  isDropdownOpen = false;
  character: Character | null = null;

  @Output() itemSelected = new EventEmitter<string>();

  constructor(private characterService: CharacterGenService) {
    this.character = this.characterService.getCurrentCharacter();
  }

  ngOnInit() {
    if (this.character != null && this.character.characterClass == '') {
      this.selectedItem = this.items[0];
      this.itemSelected.emit(this.selectedItem);
    } else if (this.character != null) {
      this.selectedItem = this.character.characterClass;
      this.itemSelected.emit(this.selectedItem);
    }
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
    console.log('Dropdown is now:', this.isDropdownOpen);
  }

  selectItem(item: string) {
    this.selectedItem = item;
    this.isDropdownOpen = false;

    if (item == 'Select option') {
      this.itemSelected.emit(undefined);
    } else {
      this.itemSelected.emit(item);
    }
  }
}
