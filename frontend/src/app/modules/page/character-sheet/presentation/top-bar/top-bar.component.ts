import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Router } from '@angular/router';
import { Character } from '../../../../character-model/character.model';
import { CharacterGenService } from '../../../../character-model/character-gen.service';
import { DynamicHeaderComponent } from '../../../shared/dynamic-header/dynamic-header.component';
import { RoutePaths } from '../../../../core/routing/route-paths.enum';
import { environment } from '../../../../../../environments/environment';
import { catchError, of } from 'rxjs';

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

  constructor(private router: Router, private characterService: CharacterGenService) {
    this.character = this.characterService.getCurrentCharacter();
  }

  editButtonClicked() {
    this.router.navigate([`/${RoutePaths.CHARACTER_EDITOR}`]);
  }

  myCharactersButtonClicked() {
    // ######## //
    if (this.character) {
          this.characterService.updateCurrentCharacter(this.character);
          
          // #################### //
          if (this.character && this.character.id) {
            this.characterService.updateCharacter(this.character.id, this.character).pipe(
              catchError((err) => {
                console.error('Error updating character:', err);
                return of(null);
              })
            ).subscribe({
              next: (updatedCharacter) => {
                this.router.navigate([`/${RoutePaths.OVERVIEW}`]);
              },
              error: (err) => {
                console.error('Error updating character:', err);
              }
            });
          }
        } else {
          console.warn(`No current character to update.`);
        }
    // ######## //

    // this.router.navigate([`/${RoutePaths.OVERVIEW}`]);
  }

  protected readonly environment = environment;
}
