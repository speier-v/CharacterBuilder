import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { IconChoiceModalComponent } from './icon-choice-modal/icon-choice-modal.component';
import { ClassChoiceDropdownComponent } from './class-choice-dropdown/class-choice-dropdown.component';
import { ClassDescriptionComponent } from './class-description/class-description.component';
import { LevelChoiceDropdownComponent } from './level-choice-dropdown/level-choice-dropdown.component';
import { ModelCharacterClass, modelCharacterClasses } from '../../../../character-model/character.model';
import { CharacterGenService } from '../../../../character-model/character-gen.service';
import { Character, IconImages } from '../../../../character-model/character.model';
import { environment } from '../../../../../../environments/environment';

@Component({
  selector: 'character-class',
  standalone: true,
  imports: [IconChoiceModalComponent, CommonModule, ClassChoiceDropdownComponent, ClassDescriptionComponent, LevelChoiceDropdownComponent, ReactiveFormsModule, NgOptimizedImage],
  templateUrl: './character-class.component.html',
  styleUrl: './character-class.component.css',
})
export class CharacterClassComponent {
  @Input() selectedImage: String;
  isModalOpen = false;
  @Output() navigate = new EventEmitter<string>();
  dropdownSelectedClass: string | null = null;

  // logic for character classes
  // TODO: actually load from DB instead of statically from model
  character: Character | null = null;
  characterClasses = modelCharacterClasses;
  selectedClass: ModelCharacterClass | null = null;
  selectedLevel: number | null = null;
  images: Array<String> | null = null;
  visibility: string | null = null;

  constructor(private characterService: CharacterGenService) {
    this.images = new IconImages().images;
    this.selectedImage = this.images[0];
  }

  ngOnInit() {
    this.character = this.characterService.getCurrentCharacter();
    this.images = new IconImages().images;
    this.selectedImage = this.images[0];

    if (this.character != null) {
      this.visibility = this.character.visibility;
      this.copyCharacterForm.get('newCharacterVisibility')?.setValue(`character-visibility-${this.visibility}`);
      this.characterForm.get('characterName')?.setValue(`${this.character.name}`);
    }

    this.characterForm.get('characterName')?.valueChanges.subscribe(name => {
      if (this.character != null && name != null) {
        this.character.name = name;
        this.characterService.updateCurrentCharacter(this.character);
      }
      //console.log('Name changed to:', name);
    });

    this.copyCharacterForm.get('newCharacterVisibility')?.valueChanges.subscribe(value => {
      if (this.character != null && value != null) {
        if (value.includes('private')) {
          this.character.visibility = 'private';
        } else if (value.includes('public')) {
          this.character.visibility = 'public';
        }
        this.characterService.updateCurrentCharacter(this.character);
      }
      //console.log('Visibility changed to:', value);
    });

    //console.log(this.character instanceof Character);
  }

  ngOnChanges() {
    this.character = this.characterService.getCurrentCharacter();
    this.images = new IconImages().images;
    this.selectedImage = this.images[0];

    if (this.character != null) {
      this.visibility = this.character.visibility;
      this.copyCharacterForm.get('newCharacterVisibility')?.setValue(`character-visibility-${this.visibility}`);
      this.characterForm.get('characterName')?.setValue(`${this.character.name}`);
    }

    //console.log(this.character instanceof Character);
  }

  protected readonly copyCharacterForm = new FormGroup({
    newCharacterVisibility: new FormControl('character-visibility-private', { updateOn: 'change' }),
  });

  protected readonly characterForm = new FormGroup({
    characterName: new FormControl('', {updateOn : 'blur'}),
  });

  showImageChoice() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  onImageSelected(image: String) {
    this.selectedImage = image;
    if (this.character != null) {
      this.character.icon = image;
      this.characterService.updateCurrentCharacter(this.character);
    }
  }

  onNavigate() {
    this.navigate.emit('stats');
  }

  onClassChosen(selected: string) {
    this.dropdownSelectedClass = selected;
    this.selectedClass = this.characterClasses.find(c => c.className === selected) || null;

    if (this.selectedClass != null && this.character != null) {
      this.character.characterClass = this.selectedClass.className;
      this.characterService.updateCurrentCharacter(this.character);
    } else if (this.character != null) {
      this.character.characterClass = '';
      this.characterService.updateCurrentCharacter(this.character);
    }
  }

  onLevelSelection(level: number | null) {
    this.selectedLevel = level;

    if (this.character != null && level != null) {
      this.character.level = level;
      this.characterService.updateCurrentCharacter(this.character);
    } else if (this.character != null) {
      this.character.level = 0;
      this.characterService.updateCurrentCharacter(this.character);
    }
  }

  protected readonly environment = environment;
}
