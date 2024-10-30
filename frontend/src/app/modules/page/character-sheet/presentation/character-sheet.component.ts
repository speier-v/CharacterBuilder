import { Component } from '@angular/core';
import { TopBarComponent } from './top-bar/top-bar.component';
import { StatDisplayComponent } from './stat-display/stat-display.component';
import { SavingThrowsDisplayComponent } from './saving-throws-display/saving-throws-display.component';

@Component({
  selector: 'character-sheet',
  standalone: true,
  imports: [TopBarComponent, StatDisplayComponent, SavingThrowsDisplayComponent],
  templateUrl: './character-sheet.component.html',
  styleUrl: './character-sheet.component.css'
})
export class CharacterSheetComponent {

}
