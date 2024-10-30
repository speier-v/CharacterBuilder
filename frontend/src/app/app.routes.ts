import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {OverviewComponent} from './modules/page/overview/presentation/overview/overview.component';
import {CharacterEditorComponent} from './modules/page/character-editor/presentation/character-editor.component';
import {CharacterSheetComponent} from './modules/page/character-sheet/presentation/character-sheet.component';
import {
  RequestPasswordResetComponent
} from './modules/page/login-and-sign-up/presentation/request-password-reset/request-password-reset.component';
import {
  PasswordResetComponent
} from './modules/page/login-and-sign-up/presentation/password-reset/password-reset.component';
import {SignUpComponent} from './modules/page/login-and-sign-up/presentation/sign-up/sign-up.component';
import {LoginComponent} from './modules/page/login-and-sign-up/presentation/login/login.component';

export const routes: Routes = [
  {path: '', component: LoginComponent, title: 'Charactyr Login'},
  {path: 'login', component: LoginComponent, title: 'Charactyr Login'},
  {path: 'sign-up', component: SignUpComponent, title: 'Sign up at Charactyr'},
  {path: 'request-password-reset', component: RequestPasswordResetComponent, title: 'Request password reset'},
  {path: 'reset-password', component: PasswordResetComponent, title: 'Reset your password'},
  {path: 'overview', component: OverviewComponent, title: 'Saved characters'},
  {path: 'character-editor', component: CharacterEditorComponent},
  {path: 'character-sheet', component: CharacterSheetComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
