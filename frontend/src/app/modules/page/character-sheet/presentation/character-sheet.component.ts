import { Component } from '@angular/core';
import { TopBarComponent } from './top-bar/top-bar.component';
import { StatDisplayComponent } from './stat-display/stat-display.component';
import { SavingThrowsDisplayComponent } from './saving-throws-display/saving-throws-display.component';
import { SkillsDisplayComponent } from './skills-display/skills-display.component';
import { AbilitiesAndSpellsComponent } from './abilities-and-spells/abilities-and-spells.component';

@Component({
  selector: 'character-sheet',
  standalone: true,
  imports: [TopBarComponent, StatDisplayComponent, SavingThrowsDisplayComponent, SkillsDisplayComponent, AbilitiesAndSpellsComponent],
  templateUrl: './character-sheet.component.html',
  styleUrl: './character-sheet.component.css',
})
export class CharacterSheetComponent {

}
