import { Component } from '@angular/core';
import { NotesService } from '../services/notes.service';

@Component({
  selector: 'app-liste-notes',
  templateUrl: './liste-notes.component.html',
  styleUrls: ['./liste-notes.component.css'],
  providers: [NotesService]
})
export class ListeNotesComponent {
  noteInput: string = '';
  notes: string[] = [];

  constructor(private notesService: NotesService) {}

  onAddNote() {
    if (this.noteInput.trim()) {
      this.notesService.addNote(this.noteInput);
      this.noteInput = ''; // Réinitialiser le champ de saisie
    }
  }

  onShowNotes() {
    this.notes = this.notesService.getNotes();
  }
}