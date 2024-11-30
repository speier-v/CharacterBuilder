import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgClass, NgOptimizedImage } from '@angular/common';
import { UsernameAndLogoutComponent } from '../../../shared/username-and-logout/username-and-logout.component';

@Component({
  selector: 'overview-header',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgClass,
    UsernameAndLogoutComponent,
  ],
  templateUrl: './overview-header.component.html',
  styleUrl: './overview-header.component.css',
})
export class OverviewHeaderComponent {
  @Input() isPublicCharactersOverview = false;
  @Output() overviewTypeToggled: EventEmitter<void> = new EventEmitter();
  @Output() createCharacterClicked: EventEmitter<void> = new EventEmitter();

  toggleOverviewType() {
    this.overviewTypeToggled.emit();
  }

  createCharacterButtonClicked() {
    this.createCharacterClicked.emit();
  }
}
