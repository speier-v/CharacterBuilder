import { Component } from '@angular/core';
import { CharacterCardComponent } from '../character-card/character-card.component';
import { RouterLink } from '@angular/router';

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

  protected toggleIsPublicCharactersOverview() {
    this.isPublicCharactersOverview = !this.isPublicCharactersOverview;
  }
}
