// App.js
import React, { useState } from 'react';
import './App.css';
import NoteList from './NoteList';
import NoteForm from './NoteForm';

function App() {
  const [notes, setNotes] = useState([]);

  const handleAddNote = (newNote) => {
    // Update the notes state with the new note
    setNotes([...notes, newNote]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Collaborative Notes</h1>
        <NoteForm onAddNote={handleAddNote} />
        <NoteList notes={notes} />
      </header>
    </div>
  );
}

export default App;
