import {Component} from '@angular/core';
import {NgClass, NgIf, NgOptimizedImage} from '@angular/common';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {LoginAndSignUpScreenState} from '../model/login-and-sign-up-screen-state.enum';

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
  protected readonly loginOrSignUpForm = new FormGroup({
    usernameFormControl: new FormControl(''),
    emailFormControl: new FormControl(''),
    passwordFormControl: new FormControl('')
  });

  protected screenState = LoginAndSignUpScreenState.LOGIN
  protected showPasswordCleartext = false;

  protected toggleShowPasswordCleartext() {
    this.showPasswordCleartext = !this.showPasswordCleartext;
  }

  protected setScreenState(screenState: LoginAndSignUpScreenState) {
    this.screenState = screenState;
  }

  protected alternateActionButtonClicked() {
    const newScreenState = this.screenState == LoginAndSignUpScreenState.LOGIN ?
      LoginAndSignUpScreenState.SIGN_UP : LoginAndSignUpScreenState.LOGIN;
    this.setScreenState(newScreenState);
  }

  protected getButtonTextForState(): string {
    switch (this.screenState) {
      case LoginAndSignUpScreenState.LOGIN:
        return 'Log in';
      case LoginAndSignUpScreenState.SIGN_UP:
        return 'Sign up';
      case LoginAndSignUpScreenState.PASSWORD_RESET:
        return 'Send link';
    }
  }

  protected readonly LoginAndSignUpScreenState = LoginAndSignUpScreenState;
}
