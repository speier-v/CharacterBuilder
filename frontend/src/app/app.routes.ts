import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OverviewComponent } from './modules/page/overview/presentation/overview/overview.component';
import { CharacterEditorComponent } from './modules/page/character-editor/presentation/character-editor.component';
import { CharacterSheetComponent } from './modules/page/character-sheet/presentation/character-sheet.component';
import { RoutePaths } from './modules/core/routing/route-paths.enum';
import { CharacterSheetRouteData } from './modules/core/routing/character-sheet-route-data.model';

export const routes: Routes = [
  { path: RoutePaths.ROOT, redirectTo: 'overview', pathMatch: 'full' },
  { path: RoutePaths.OVERVIEW, component: OverviewComponent, title: 'Saved characters' },
  { path: RoutePaths.CHARACTER_EDITOR, component: CharacterEditorComponent, title: 'Character Editor' },
  {
    path: RoutePaths.PRIVATE_CHARACTER_SHEET,
    component: CharacterSheetComponent,
    data: new CharacterSheetRouteData(true),
    title: 'Character Sheet',
  },
  {
    path: RoutePaths.PUBLIC_CHARACTER_SHEET,
    component: CharacterSheetComponent,
    data: new CharacterSheetRouteData(false),
    title: 'Character Sheet',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
