import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'top-bar',
  standalone: true,
  imports: [],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.css',
})
export class TopBarComponent {

  @Output() navigate = new EventEmitter<string>();

  constructor(private router: Router) {
  }

  clickToNav(path: string) {
    this.router.navigate([path]);
  }
}
