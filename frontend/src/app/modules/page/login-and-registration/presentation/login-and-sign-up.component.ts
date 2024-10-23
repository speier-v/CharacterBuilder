import {Component} from '@angular/core';
import {NgClass, NgIf, NgOptimizedImage} from '@angular/common';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    NgOptimizedImage,
    ReactiveFormsModule,
    NgIf,
    NgClass
  ],
  templateUrl: './login-and-sign-up.component.html',
  styleUrl: './login-and-sign-up.component.css'
})
export class LoginAndSignUpComponent {
  loginOrSignUpForm = new FormGroup({
    emailFormControl: new FormControl(''),
    passwordFormControl: new FormControl('')
  });

  isLoginPage = true;

  toggleIsLoginPage() {
    this.isLoginPage = !this.isLoginPage;
  }
}
