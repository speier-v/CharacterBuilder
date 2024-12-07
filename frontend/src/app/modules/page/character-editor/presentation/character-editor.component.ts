import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { StatsComponent } from './stats/stats.component';
import { CharacterClassComponent } from './character-class/character-class.component';
import { RoutePaths } from '../../../core/routing/route-paths.enum';
import { DynamicHeaderComponent } from '../../shared/dynamic-header/dynamic-header.component';

@Component({
  selector: 'character-editor',
  standalone: true,
  imports: [CommonModule, StatsComponent, CharacterClassComponent, DynamicHeaderComponent],
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
    this.router.navigate([`/${RoutePaths.PRIVATE_CHARACTER_SHEET}`]);
  }
}
