import { Component, OnChanges, OnInit } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { CharacterCardComponent } from '../character-card/character-card.component';
import { CharacterGenService } from '../../../../character-model/character-gen.service';
import { Character } from '../../../../character-model/character.model';
import { Router } from '@angular/router';
import { DynamicHeaderComponent } from '../../../shared/dynamic-header/dynamic-header.component';
import { RoutePaths } from '../../../../core/routing/route-paths.enum';
import { environment } from '../../../../../../environments/environment';

@Component({
  selector: 'character-cards-overview',
  standalone: true,
  imports: [
    CharacterCardComponent,
    CommonModule,
    DynamicHeaderComponent,
    NgOptimizedImage,
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.css',
})
export class OverviewComponent implements OnInit, OnChanges {
  protected isPublicCharactersOverview = false;
  characters: Character[] = [];

  constructor(
    private characterService: CharacterGenService,
    private router: Router,
  ) {
    this.characters = characterService.getCharacters();
  }

  ngOnChanges() {
    this.characters = this.characterService.getCharacters();
  }

  ngOnInit() {
    this.characters = this.characterService.getCharacters();
  }

  protected toggleIsPublicCharactersOverview() {
    this.isPublicCharactersOverview = !this.isPublicCharactersOverview;

    if (this.isPublicCharactersOverview) {
      this.characters = this.characterService.getPublicCharacters();
    } else {
      this.characters = this.characterService.getCharacters();
    }
  }

  createCharacter(): void {
    this.characterService.createCharacter('unnamed');
    this.router.navigate([`/${RoutePaths.CHARACTER_EDITOR}`]);
  }

  onCharacterDeleted(characterId: number) {
    this.characters = this.characterService.getCharacters();
  }

  protected readonly environment = environment;
}
