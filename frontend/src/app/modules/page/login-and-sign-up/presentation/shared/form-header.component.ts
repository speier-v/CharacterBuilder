import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'form-header',
  standalone: true,
  imports: [
    NgOptimizedImage,
  ],
  template: `
    <div class="flex flex-col justify-center items-center">
      <img ngSrc="assets/images/character-avatar.png"
           alt="Charactyr logo" width="140" height="140"
           class="rounded-full" priority>
      <h1 class="mt-2 text-4xl lg:text-5xl accent-font">CHARACTYR</h1>
    </div>`,
})
export class FormHeader {

}
