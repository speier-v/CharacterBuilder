import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { StatsComponent } from './stats/stats.component';
import { CharacterClassComponent } from './character-class/character-class.component';

@Component({
  selector: 'character-editor',
  standalone: true,
  imports: [CommonModule, StatsComponent, CharacterClassComponent],
  templateUrl: './character-editor.component.html',
  styleUrl: './character-editor.component.css',
})

export class CharacterEditorComponent {

  selectedComponent: string = 'character-class';

  constructor(private router: Router) {
  }

  selectComponent(component: string) {
    this.selectedComponent = component;
  }

  clickToNav() {
    this.router.navigate(['/character-sheet']);
  }
}
