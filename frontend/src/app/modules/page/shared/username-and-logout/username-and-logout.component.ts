import { Component } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { NgIf } from '@angular/common';
import { DetectClicksOutsideDirective } from '../detect-clicks-outside.directive';

@Component({
  selector: 'username-and-logout',
  standalone: true,
  imports: [
    DetectClicksOutsideDirective,
    NgIf,
  ],
  templateUrl: './username-and-logout.component.html',
  styleUrl: './username-and-logout.component.css',
})
export class UsernameAndLogoutComponent {
  profileActionsVisible = false;
  static userName: string;

  toggleProfileActionsVisible() {
    this.profileActionsVisible = !this.profileActionsVisible;
  }

  constructor(private readonly keycloakService: KeycloakService) {
    UsernameAndLogoutComponent.userName = this.keycloakService.getUsername();
  }

  get username(): string {
    return this.keycloakService.isLoggedIn() ? this.keycloakService.getUsername() : 'Default User';
  }

  logout() {
    this.keycloakService.logout();
  }
}
