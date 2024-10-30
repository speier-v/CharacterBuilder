import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf, NgOptimizedImage } from '@angular/common';
import { BackgroundImage } from '../shared/background-image.component';
import { FormHeader } from '../shared/form-header.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    NgOptimizedImage,
    ReactiveFormsModule,
    BackgroundImage,
    FormHeader,
    RouterOutlet,
    RouterLink,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  protected readonly loginForm = new FormGroup({
    email: new FormControl('',
      { validators: [Validators.required, Validators.email], updateOn: 'blur' }),
    password: new FormControl('', { validators: [Validators.required], updateOn: 'blur' }),
    stayLoggedIn: new FormControl(false),
  });

  protected showPasswordCleartext = false;

  protected togglePasswordClearText() {
    this.showPasswordCleartext = !this.showPasswordCleartext;
  }
}
