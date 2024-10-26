import {Component} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf, NgOptimizedImage, NgTemplateOutlet} from "@angular/common";
import {BackgroundImage} from '../shared/background-image.component';
import {FormHeader} from '../shared/form-header.component';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-password-reset',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    NgOptimizedImage,
    ReactiveFormsModule,
    NgTemplateOutlet,
    BackgroundImage,
    FormHeader,
    RouterOutlet
  ],
  templateUrl: './password-reset.component.html',
  styleUrl: './password-reset.component.css'
})
export class PasswordResetComponent {
  protected readonly passwordResetForm = new FormGroup({
    password: new FormControl('', [Validators.required]),
    confirmedPassword: new FormControl('', [Validators.required]),
  });

  showPasswordCleartext = false;
  showConfirmedPasswordClearText = false;

  protected togglePasswordCleartext(forDefaultInputField: boolean) {
    if (forDefaultInputField) {
      this.showPasswordCleartext = !this.showPasswordCleartext;
      return;
    }

    this.showConfirmedPasswordClearText = !this.showConfirmedPasswordClearText;
  }
}
