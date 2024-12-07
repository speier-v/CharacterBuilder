import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'charactyr-banner',
  standalone: true,
  imports: [
    NgOptimizedImage,
  ],
  templateUrl: './charactyr-banner.component.html',
  styleUrl: './charactyr-banner.component.css'
})
export class CharactyrBannerComponent {

}
