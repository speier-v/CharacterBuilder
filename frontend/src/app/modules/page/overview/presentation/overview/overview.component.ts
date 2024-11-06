import { Component } from '@angular/core';
import { CharacterCardComponent } from '../character-card/character-card.component';
import { CharacterGenService } from '../../../../character-model/character-gen.service';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'character-cards-overview',
  standalone: true,
  imports: [
    CharacterCardComponent,
    RouterLink,
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.css',
})
export class OverviewComponent {
  protected isPublicCharactersOverview = false;

  constructor(
    private characterService: CharacterGenService,
    private router: Router
  ) {}

  protected toggleIsPublicCharactersOverview() {
    this.isPublicCharactersOverview = !this.isPublicCharactersOverview;
  }

  createCharacter(): void {
    this.characterService.createCharacter('unnamed');
    this.router.navigate(['/character-editor']);
  }
}
