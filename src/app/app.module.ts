import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import {TableSelectionExampleComponent} from './task-list/task-list.component';
import {ProfileEditorComponent} from './to-do-list-editor/to-do-list-editor.component';
import {ToDoListService} from '../services/to-do-list.service';
import {TopBarComponent} from './top-bar/top-bar.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: [
    AppComponent,
    ProfileEditorComponent,
    TopBarComponent,
    TableSelectionExampleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: '', component: TableSelectionExampleComponent},
      {path: 'edit/:id', component: ProfileEditorComponent},
      {path: 'add', component: ProfileEditorComponent},
    ]),
    ReactiveFormsModule,
    MatTableModule,
    MatCheckboxModule,
  ],
  providers: [
    ToDoListService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
