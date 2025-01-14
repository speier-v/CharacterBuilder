import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { CharacterCardComponent } from '../character-card/character-card.component';
import { CharacterGenService } from '../../../../character-model/character-gen.service';
import { Character } from '../../../../character-model/character.model';
import { Router } from '@angular/router';
import { DynamicHeaderComponent } from '../../../shared/dynamic-header/dynamic-header.component';
import { RoutePaths } from '../../../../core/routing/route-paths.enum';
import { environment } from '../../../../../../environments/environment';
import { catchError, of, switchMap } from 'rxjs';
import { NgxSpinnerService, NgxSpinner, NgxSpinnerComponent } from "ngx-spinner";

@Component({
  selector: 'character-cards-overview',
  standalone: true,
  imports: [
    CharacterCardComponent,
    CommonModule,
    DynamicHeaderComponent,
    NgOptimizedImage,
    NgxSpinnerComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.css',
})
export class OverviewComponent implements OnInit, OnChanges, AfterViewInit {
  protected isPublicCharactersOverview = false;
  characters: Character[] = [];

  constructor(
    private characterService: CharacterGenService,
    private router: Router,
    private spinner: NgxSpinnerService
  ) {
    //this.getCharactersBasedOnView();
  }

  ngAfterViewInit(): void {
    this.spinner.show();
  }

  ngOnInit(): void {
    this.getCharactersBasedOnView();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getCharactersBasedOnView();
  }

  trackByCharacterId(index: number, character: Character): number {
    if (character.id) {
      return character.id;
    }
    return 0;
  }

  protected toggleIsPublicCharactersOverview() {
    this.isPublicCharactersOverview = !this.isPublicCharactersOverview;

    this.getCharactersBasedOnView();
  }

  createCharacter(): void {
    this.characterService.createCharacter('unnamed');
    this.router.navigate([`/${RoutePaths.CHARACTER_EDITOR}`]);
  }

  onCharacterDeleted(id: number): void {
    this.characterService.deleteCharacter(id).pipe(
      switchMap(() => this.characterService.fetchPrivateCharacters({visibility: 'private', playerName: this.characterService.userName})),
      catchError((err) => {
        console.error('Error deleting or fetching characters:', err);
        return of([]);
      })
    ).subscribe({
      next: (updatedCharacters) => {
        this.characters = updatedCharacters;
      },
      error: (err) => {
        console.error('Error fetching characters after delete:', err);
      }
    });
  }

  public getCharactersBasedOnView() {
    this.spinner.show();

    if (this.isPublicCharactersOverview) {
      this.characterService.fetchPublicCharacters()
      .subscribe((data: Character[]) => {
        this.spinner.hide();

        this.characters = data.map((item: any) => {
          const character = new Character(item.name, item.id);
          Object.assign(character, item);
          return character;
        });

      });
    } else {
      var visibility = 'private';
      var playerName = this.characterService.userName;
      this.characterService.fetchPrivateCharacters({ visibility, playerName })
      .subscribe(data => {
        this.spinner.hide();

        this.characters = data.map((item: any) => {
          const character = new Character(item.name, item.id);
          Object.assign(character, item);
          return character;
        });

        console.log(this.characters);
      });
    }
  }

  protected readonly environment = environment;
}
