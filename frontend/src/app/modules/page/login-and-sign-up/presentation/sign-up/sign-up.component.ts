import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NgClass, NgIf, NgOptimizedImage } from '@angular/common';
import { BackgroundImage } from '../shared/background-image.component';
import { FormHeader } from '../shared/form-header.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { validateInputsHaveSameValue } from '../../../../util/utility';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    NgOptimizedImage,
    ReactiveFormsModule,
    NgClass,
    BackgroundImage,
    FormHeader,
    RouterOutlet,
    RouterLink,
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent {
  protected readonly signUpForm = new FormGroup(
    {
      username: new FormControl('', {
        validators: [
          Validators.required,
          Validators.pattern('[_0-9]*([a-zA-Z]+[_0-9]*)+'),
        ],
        updateOn: 'blur',
      }),
      email: new FormControl('', {
        validators: [Validators.required, Validators.email],
        updateOn: 'blur',
      }),
      password: new FormControl('', {
        validators: [Validators.required],
        updateOn: 'blur',
      }),
      confirmedPassword: new FormControl('', {
        validators: [Validators.required],
        updateOn: 'blur',
      }),
    },
    {
      validators: validateInputsHaveSameValue('password', 'confirmedPassword'),
    },
  );

  protected showPasswordCleartext = false;
  protected showConfirmedPasswordCleartext = false;

  protected togglePasswordCleartext(forFirstInputField: boolean) {
    if (forFirstInputField) {
      this.showPasswordCleartext = !this.showPasswordCleartext;
      return;
    }

    this.showConfirmedPasswordCleartext = !this.showConfirmedPasswordCleartext;
  }
}
