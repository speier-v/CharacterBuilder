import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterCardComponent } from '../character-card/character-card.component';
import { CharacterGenService } from '../../../../character-model/character-gen.service';
import { Character } from '../../../../character-model/character.model';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'character-cards-overview',
  standalone: true,
  imports: [
    CharacterCardComponent,
    RouterLink,
    CommonModule
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.css',
})
export class OverviewComponent {
  protected isPublicCharactersOverview = false;
  characters: Character[] = [];

  constructor(
    private characterService: CharacterGenService,
    private router: Router
  ) {
    this.characters = characterService.getCharacters();
  }

  protected toggleIsPublicCharactersOverview() {
    this.isPublicCharactersOverview = !this.isPublicCharactersOverview;
  }

  createCharacter(): void {
    this.characterService.createCharacter('unnamed');
    this.router.navigate(['/character-editor']);
  }
}
