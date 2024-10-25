import {Routes} from '@angular/router';
import {LoginAndSignUpComponent} from './modules/page/login-and-registration/presentation/login-and-sign-up.component';
import {OverviewComponent} from './modules/page/overview/presentation/overview/overview.component';
import { CharacterEditorComponent } from './modules/page/character-editor/presentation/character-editor.component';

export const routes: Routes = [
  {path: '', component: LoginAndSignUpComponent},
  {path: 'overview', component: OverviewComponent},
  {path: 'character-editor', component: CharacterEditorComponent}
];
