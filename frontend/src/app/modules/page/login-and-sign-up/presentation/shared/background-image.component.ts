import { Component } from '@angular/core';
import { NgIf, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'background-image',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgIf,
  ],
  template: `<img ngSrc="assets/images/bg_login_2.webp" fill
                  alt="Background image of the Charactyr website's login and registration page showing a character walking towards a fantasy land"
                  priority>`,
})
export class BackgroundImage {

}
