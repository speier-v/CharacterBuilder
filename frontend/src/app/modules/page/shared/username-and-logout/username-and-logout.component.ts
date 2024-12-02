import { Component } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'username-and-logout',
  standalone: true,
  imports: [],
  templateUrl: './username-and-logout.component.html',
  styleUrl: './username-and-logout.component.css',
})
export class UsernameAndLogoutComponent {
  constructor(private readonly keycloakService: KeycloakService) {
  }

  get username(): string {
    return this.keycloakService.isLoggedIn() ? this.keycloakService.getUsername() : 'Default User';
  }

  logout() {
    this.keycloakService.logout();
  }
}
