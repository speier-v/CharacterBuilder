import { Component, Input, TemplateRef } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { UsernameAndLogoutComponent } from '../username-and-logout/username-and-logout.component';
import { CharactyrBannerComponent } from '../charactyr-banner/charactyr-banner.component';

@Component({
  selector: 'dynamic-header',
  standalone: true,
  imports: [
    UsernameAndLogoutComponent,
    CharactyrBannerComponent,
    NgTemplateOutlet,
  ],
  templateUrl: './dynamic-header.component.html',
  styleUrl: './dynamic-header.component.css',
})
export class DynamicHeaderComponent {
  @Input() pageTitle: TemplateRef<any> | undefined;
  @Input() headerEndActions: TemplateRef<any> | undefined;
}
