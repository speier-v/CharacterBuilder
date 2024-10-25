import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { OverviewComponent } from './overview/overview.component';
import { StatsComponent } from './stats/stats.component';
import { CharacterClassComponent } from './character-class/character-class.component';

@Component({
    selector: 'character-editor',
    standalone: true,
    imports: [CommonModule, OverviewComponent, StatsComponent, CharacterClassComponent],
    templateUrl: './character-editor.component.html',
    styleUrl: './character-editor.component.css'
  })

export class CharacterEditorComponent {

  constructor(private router: Router) {}

  selectedComponent: string = 'overview';

  selectComponent(component: string) {
    this.selectedComponent = component;
  }

  clickToNav() {
    this.router.navigate(['/character-sheet']);
  }
}