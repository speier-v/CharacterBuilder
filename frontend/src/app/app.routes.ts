import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import {LoginAndSignUpComponent} from './modules/page/login-and-registration/presentation/login-and-sign-up.component';
import {OverviewComponent} from './modules/page/overview/presentation/overview/overview.component';
import { CharacterEditorComponent } from './modules/page/character-editor/presentation/character-editor.component';
import { CharacterSheetComponent } from './modules/page/character-sheet/character-sheet.component';

export const routes: Routes = [
  {path: '', component: LoginAndSignUpComponent},
  {path: 'overview', component: OverviewComponent},
  {path: 'character-editor', component: CharacterEditorComponent},
  {path: 'character-sheet', component: CharacterSheetComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
