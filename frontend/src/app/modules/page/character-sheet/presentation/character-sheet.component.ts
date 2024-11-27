import { Component } from '@angular/core';
import { TopBarComponent } from './top-bar/top-bar.component';
import { StatDisplayComponent } from './stat-display/stat-display.component';
import { SavingThrowsDisplayComponent } from './saving-throws-display/saving-throws-display.component';
import { SkillsDisplayComponent } from './skills-display/skills-display.component';
import { AbilitiesAndSpellsComponent } from './abilities-and-spells/abilities-and-spells.component';
import { Character } from '../../../character-model/character.model';
import { CharacterGenService } from '../../../character-model/character-gen.service';

@Component({
  selector: 'character-sheet',
  standalone: true,
  imports: [TopBarComponent, StatDisplayComponent, SavingThrowsDisplayComponent, SkillsDisplayComponent, AbilitiesAndSpellsComponent],
  templateUrl: './character-sheet.component.html',
  styleUrl: './character-sheet.component.css',
})
export class CharacterSheetComponent {
  character: Character | null = null;

  constructor(private characterService: CharacterGenService) {
    this.character = this.characterService.getCurrentCharacter();
  }
}
