import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { Router } from '@angular/router';
import { RoutePaths } from '../../../core/routing/route-paths.enum';

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
  constructor(private router: Router) {
  }

  goToOverview(): void {
    this.router.navigate([`/${RoutePaths.OVERVIEW}`]);
  }
}
