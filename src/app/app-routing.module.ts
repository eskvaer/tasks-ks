import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TableSelectionExampleComponent} from './task-list/task-list.component';
import {ProfileEditorComponent} from './to-do-list-editor/to-do-list-editor.component';

const routes: Routes = [
  { path: '', component: TableSelectionExampleComponent },
  { path: 'edit/:id', component: ProfileEditorComponent },
  { path: 'add', component: ProfileEditorComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload', useHash: true}) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
