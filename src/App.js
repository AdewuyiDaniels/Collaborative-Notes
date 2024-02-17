// App.js
import React, { useState } from 'react';
import './App.css';
import NoteList from './NoteList';
import NoteForm from './NoteForm';

function App() {
  const [notes, setNotes] = useState([]);

  const handleAddNote = (newNote) => {
    setNotes([...notes, { id: notes.length + 1, ...newNote }]);
  };

  const handleEditNote = (noteId, editedNote) => {
    // Update the notes state with the edited note
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === noteId ? { ...note, ...editedNote } : note
      )
    );
  };

  const handleDeleteNote = (noteId) => {
    // Filter out the deleted note from the notes state
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== noteId));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Collaborative Notes</h1>
        <NoteForm onAddNote={handleAddNote} />
        <NoteList
          notes={notes}
          onEditNote={handleEditNote}
          onDeleteNote={handleDeleteNote}
        />
      </header>
    </div>
  );
}

export default App;
