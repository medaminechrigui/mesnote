import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListeNotesComponent } from './liste-notes/liste-notes.component';
import { NotesService } from './services/notes.service';

@NgModule({
  declarations: [
    AppComponent,
    ListeNotesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [NotesService],
  bootstrap: [AppComponent]
})
export class AppModule { }