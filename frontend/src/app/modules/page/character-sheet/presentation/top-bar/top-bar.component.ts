import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Character } from '../../../../character-model/character.model';
import { CharacterGenService } from '../../../../character-model/character-gen.service';

@Component({
  selector: 'top-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.css',
})
export class TopBarComponent {

  @Output() navigate = new EventEmitter<string>();

  character: Character | null = null;

  constructor(private router: Router, private characterService: CharacterGenService) {
    this.character = this.characterService.getCurrentCharacter();
  }

  clickToNav(path: string) {
    this.router.navigate([path]);
  }
}
