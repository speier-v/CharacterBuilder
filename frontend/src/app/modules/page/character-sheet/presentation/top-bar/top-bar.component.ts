import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Router } from '@angular/router';
import { Character } from '../../../../character-model/character.model';
import { CharacterGenService } from '../../../../character-model/character-gen.service';
import { DynamicHeaderComponent } from '../../../shared/dynamic-header/dynamic-header.component';
import { RoutePaths } from '../../../../core/routing/route-paths.enum';
import { environment } from '../../../../../../environments/environment';
import { catchError, of } from 'rxjs';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'top-bar',
  standalone: true,
  imports: [CommonModule, DynamicHeaderComponent, NgOptimizedImage],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.css',
})
export class TopBarComponent {
  @Input() isEditable: boolean = false;
  @Output() navigate = new EventEmitter<string>();
  @Output() characterImageIconClicked = new EventEmitter<void>();

  character: Character | null = null;
  user: string;

  constructor(private router: Router,
    private characterService: CharacterGenService,
    private readonly keycloakService: KeycloakService) {
    this.character = this.characterService.getCurrentCharacter();
    this.user = this.keycloakService.getUsername();
  }

  editButtonClicked() {
    this.router.navigate([`/${RoutePaths.CHARACTER_EDITOR}`]);
  }

  myCharactersButtonClicked() {
    // ######## //
    if (this.character) {
      this.characterService.updateCurrentCharacter(this.character);
      
      this.router.navigate([`/${RoutePaths.OVERVIEW}`]);
    }
  }

  protected readonly environment = environment;
}
