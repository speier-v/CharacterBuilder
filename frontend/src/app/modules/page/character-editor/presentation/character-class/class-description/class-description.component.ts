import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelCharacterClass } from '../../../character.model';

@Component({
  selector: 'class-description',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './class-description.component.html',
  styleUrl: './class-description.component.css'
})
export class ClassDescriptionComponent {
  @Input() selectedClass: ModelCharacterClass | null = null;
  @Input() selectedLevel: number | null = null;

  getSkills() {
    if (!this.selectedClass || !this.selectedLevel) {
      return [];
    } else {
      return this.selectedClass.levels
      .filter(level => level.level <= this.selectedLevel!)
      .flatMap(level => level.skills);
    }   
  }
}
