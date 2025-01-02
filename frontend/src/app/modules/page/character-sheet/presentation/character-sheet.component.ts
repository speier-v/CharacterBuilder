import { Component, OnInit } from '@angular/core';
import { TopBarComponent } from './top-bar/top-bar.component';
import { StatDisplayComponent } from './stat-display/stat-display.component';
import { SavingThrowsDisplayComponent } from './saving-throws-display/saving-throws-display.component';
import { SkillsDisplayComponent } from './skills-display/skills-display.component';
import { AbilitiesAndSpellsComponent } from './abilities-and-spells/abilities-and-spells.component';
import { Character } from '../../../character-model/character.model';
import { CharacterGenService } from '../../../character-model/character-gen.service';
import { ActivatedRoute } from '@angular/router';
import { CharacterSheetRouteData } from '../../../core/routing/character-sheet-route-data.model';
import { NgIf, NgOptimizedImage } from '@angular/common';
import { environment } from '../../../../../environments/environment';
import { DetectClicksOutsideDirective } from '../../shared/detect-clicks-outside.directive';

@Component({
  selector: 'character-sheet',
  standalone: true,
  imports: [TopBarComponent, StatDisplayComponent, SavingThrowsDisplayComponent, SkillsDisplayComponent, AbilitiesAndSpellsComponent, NgOptimizedImage, NgIf, DetectClicksOutsideDirective],
  templateUrl: './character-sheet.component.html',
  styleUrl: './character-sheet.component.css',
})
export class CharacterSheetComponent implements OnInit {
  isEditable!: boolean;
  character: Character | null = null;
  characterImageOverlayIsOpen = false;

  toggleOverlayOpen() {
    this.characterImageOverlayIsOpen = !this.characterImageOverlayIsOpen;
  }

  constructor(private characterService: CharacterGenService, private route: ActivatedRoute) {
    this.character = this.characterService.getCurrentCharacter();
  }

  ngOnInit() {
    const routeData: CharacterSheetRouteData = this.route.snapshot.data as CharacterSheetRouteData;
    this.isEditable = routeData.isEditable;
  }

  protected readonly environment = environment;
}
