import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'saving-throws-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './saving-throws-display.component.html',
  styleUrl: './saving-throws-display.component.css'
})
export class SavingThrowsDisplayComponent {
  savingThrows = {
    strength: 6,
    charisma: 4,
    dexterity: 3,
    constitution: 2,
    wisdom: 1,
    intelligence: -2
  };
}
