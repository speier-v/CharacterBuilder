import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OverviewComponent } from './modules/page/overview/presentation/overview/overview.component';
import { CharacterEditorComponent } from './modules/page/character-editor/presentation/character-editor.component';
import { CharacterSheetComponent } from './modules/page/character-sheet/presentation/character-sheet.component';
import { CharacterSheetRouteData } from './modules/page/overview/model/character-sheet-route-data.model';

export const routes: Routes = [
  { path: '', redirectTo: 'overview', pathMatch: 'full' },
  { path: 'overview', component: OverviewComponent, title: 'Saved characters' },
  { path: 'character-editor', component: CharacterEditorComponent },
  { path: 'private-character-sheet', component: CharacterSheetComponent, data: new CharacterSheetRouteData(true) },
  { path: 'public-character-sheet', component: CharacterSheetComponent, data: new CharacterSheetRouteData(false) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
