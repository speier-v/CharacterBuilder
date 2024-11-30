import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgClass, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'overview-header',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgClass,
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
