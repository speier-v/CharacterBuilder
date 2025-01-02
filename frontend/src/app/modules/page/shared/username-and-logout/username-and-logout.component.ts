import { Component } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { NgClass } from '@angular/common';

@Component({
  selector: 'username-and-logout',
  standalone: true,
  imports: [
    NgClass,
  ],
  templateUrl: './username-and-logout.component.html',
  styleUrl: './username-and-logout.component.css',
})
export class UsernameAndLogoutComponent {
  profileActionsVisible = false;

  toggleProfileActionsVisible() {
    this.profileActionsVisible = !this.profileActionsVisible;
  }

  constructor(private readonly keycloakService: KeycloakService) {
  }

  get username(): string {
    return this.keycloakService.isLoggedIn() ? this.keycloakService.getUsername() : 'Default User';
  }

  logout() {
    this.keycloakService.logout();
  }
}
