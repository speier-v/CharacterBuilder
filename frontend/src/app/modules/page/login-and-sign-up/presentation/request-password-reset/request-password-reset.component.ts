import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf, NgOptimizedImage } from '@angular/common';
import { BackgroundImage } from '../shared/background-image.component';
import { FormHeader } from '../shared/form-header.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-password-reset-link',
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
  templateUrl: './request-password-reset.component.html',
  styleUrl: './request-password-reset.component.css',
})
export class RequestPasswordResetComponent {
  protected email = new FormControl('',
    { validators: [Validators.required, Validators.email], updateOn: 'blur' });
}
