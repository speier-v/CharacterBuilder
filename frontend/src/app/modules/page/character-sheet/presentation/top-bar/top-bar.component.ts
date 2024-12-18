import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Router } from '@angular/router';
import { Character } from '../../../../character-model/character.model';
import { CharacterGenService } from '../../../../character-model/character-gen.service';
import { DynamicHeaderComponent } from '../../../shared/dynamic-header/dynamic-header.component';
import { RoutePaths } from '../../../../core/routing/route-paths.enum';
import { environment } from '../../../../../../environments/environment';

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
    this.router.navigate([`/${RoutePaths.OVERVIEW}`]);
  }

  getMiniCharacterFrameImageName(imageName: String): string {
    return 'mini_'.concat(imageName.replace('.jpeg', '.png'));
  }

  protected readonly environment = environment;
}
