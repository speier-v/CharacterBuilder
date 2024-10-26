import { Component } from '@angular/core';
import {CharacterCardComponent} from '../character-card/character-card.component';

@Component({
  selector: 'character-cards-overview',
  standalone: true,
  imports: [
    CharacterCardComponent
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.css'
})
export class OverviewComponent {

}
