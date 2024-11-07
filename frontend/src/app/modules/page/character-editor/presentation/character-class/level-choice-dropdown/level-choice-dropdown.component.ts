import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModelCharacterClass, Character, modelCharacterClasses } from '../../../../../character-model/character.model';
import { CharacterGenService } from '../../../../../character-model/character-gen.service';

@Component({
  selector: 'level-choice-dropdown',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './level-choice-dropdown.component.html',
  styleUrl: './level-choice-dropdown.component.css',
})
export class LevelChoiceDropdownComponent implements OnChanges {
  @Input() selectedClass: ModelCharacterClass | null = null;
  @Input() selectedLevel: number | null = null;
  @Output() levelChange = new EventEmitter<number | null>();
  level : number | null = null;
  levels: number[] = [];
  character: Character | null = null;

  constructor(private characterService: CharacterGenService) {
    this.character = this.characterService.getCurrentCharacter();
  }

  ngOnInit() {
    if (this.character != null) {
      const selectedClassName = this.character.characterClass;
      const find = modelCharacterClasses.find((characterClass) => characterClass.className === selectedClassName);
      if (find) {
        this.selectedClass = find;
        this.levels = this.character.characterClass ? this.selectedClass.levels.map(level => level.level) : [];
        this.level = this.character.level;
        console.log(`Level ${this.level}, levels: ${this.levels}, selectedClass ${this.selectedClass}`);
      } else {
        this.levels = [];
      }
      this.levelChange.emit(this.level);
    }
  }

  ngOnChanges() {
    this.levels = this.selectedClass ? this.selectedClass.levels.map(level => level.level) : [];
  }

  onLevelSelect(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.level = selectElement.value ? parseInt(selectElement.value, 10) : null;
    this.levelChange.emit(this.level);
  }
}
