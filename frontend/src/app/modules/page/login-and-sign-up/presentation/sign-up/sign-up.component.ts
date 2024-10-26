import {Component} from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators
} from "@angular/forms";
import {NgClass, NgIf, NgOptimizedImage} from "@angular/common";
import {BackgroundImage} from '../shared/background-image.component';
import {FormHeader} from '../shared/form-header.component';
import {RouterLink, RouterOutlet} from '@angular/router';

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
    RouterLink
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  private isSamePassword: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    if (control.get('password')?.value === '' || control.get('confirmedPassword')?.value === '') {
      return null;
    }

    const hasEnteredSamePassword = control.get('password')?.value === control.get('confirmedPassword')?.value;
    return !hasEnteredSamePassword ? {notSamePassword: true} : null;
  };

  protected readonly signUpForm = new FormGroup({
    username: new FormControl('',
      {validators: [Validators.required, Validators.pattern('[_0-9]*([a-zA-Z]+[_0-9]*)+')], updateOn: 'blur'}),
    email: new FormControl('',
      {validators: [Validators.required, Validators.email], updateOn: 'blur'}),
    password: new FormControl('',
      {validators: [Validators.required], updateOn: 'blur'}),
    confirmedPassword: new FormControl('',
      {validators: [Validators.required], updateOn: 'blur'}),
  }, {validators: this.isSamePassword});

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
