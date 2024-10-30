import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'top-bar',
  standalone: true,
  imports: [],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.css'
})
export class TopBarComponent {
  
  constructor(private router: Router) {}

  @Output() navigate = new EventEmitter<string>();

  clickToNav() {
    this.router.navigate(['/character-editor']);
  }
}
