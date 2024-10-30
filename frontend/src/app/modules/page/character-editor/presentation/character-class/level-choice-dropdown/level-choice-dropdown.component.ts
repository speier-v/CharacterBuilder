import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelCharacterClass } from '../../../../../character-model/character.model';

@Component({
  selector: 'level-choice-dropdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './level-choice-dropdown.component.html',
  styleUrl: './level-choice-dropdown.component.css',
})
export class LevelChoiceDropdownComponent implements OnChanges {
  @Input() selectedClass: ModelCharacterClass | null = null;
  @Input() selectedLevel: number | null = null;
  @Output() levelChange = new EventEmitter<number | null>();
  levels: number[] = [];

  ngOnChanges() {
    this.levels = this.selectedClass ? this.selectedClass.levels.map(level => level.level) : [];
  }

  onLevelSelect(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const level = selectElement.value ? parseInt(selectElement.value, 10) : null;
    this.levelChange.emit(level);
  }
}
