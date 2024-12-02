import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  private notes: string[] = [];

  addNote(note: string) {
    this.notes.push(note);
  }

  getNotes() {
    // Retourne une copie du tableau pour éviter les références directes
    return JSON.parse(JSON.stringify(this.notes));
  }
}