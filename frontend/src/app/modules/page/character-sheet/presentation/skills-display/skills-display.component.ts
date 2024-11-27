import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Character, skills } from '../../../../character-model/character.model';
import { CharacterGenService } from '../../../../character-model/character-gen.service';

@Component({
  selector: 'skills-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills-display.component.html',
  styleUrl: './skills-display.component.css',
})
export class SkillsDisplayComponent {
  character : Character | null = null;

  constructor(private characterService: CharacterGenService) {
    this.character = characterService.getCurrentCharacter();
  }
}
