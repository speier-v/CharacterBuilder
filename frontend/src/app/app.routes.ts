import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OverviewComponent } from './modules/page/overview/presentation/overview/overview.component';
import { CharacterEditorComponent } from './modules/page/character-editor/presentation/character-editor.component';
import { CharacterSheetComponent } from './modules/page/character-sheet/presentation/character-sheet.component';
import { UserListComponent } from './modules/page/overview/presentation/overview/user-list/user-list.component';
import { UserFormComponent } from './modules/page/overview/presentation/overview/user-form/user-form.component';

export const routes: Routes = [
  { path: '', redirectTo: 'overview', pathMatch: 'full' },
  { path: 'overview', component: OverviewComponent, title: 'Saved characters' },
  { path: 'character-editor', component: CharacterEditorComponent },
  { path: 'character-sheet', component: CharacterSheetComponent },
  { path: 'users', component: UserListComponent },
  { path: 'adduser', component: UserFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
