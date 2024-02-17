// NoteList.js
import React, { useState } from 'react';
import NoteEditForm from './NoteEditForm';

const NoteList = ({ notes, onEditNote, onDeleteNote }) => {
  const [editingNote, setEditingNote] = useState(null);

  const handleEditClick = (note) => {
    setEditingNote(note);
  };

  const handleSaveEdit = (noteId, editedNote) => {
    // Call the onEditNote function passed from the parent component
    onEditNote(noteId, editedNote);
    // Reset the editingNote state
    setEditingNote(null);
  };

  const handleDeleteClick = (noteId) => {
    // Call the onDeleteNote function passed from the parent component
    onDeleteNote(noteId);
  };

  return (
    <div>
      <h2>Notes</h2>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            <strong>{note.title}</strong>
            <p>{note.content}</p>
            {editingNote === note ? (
              <NoteEditForm note={note} onSaveEdit={handleSaveEdit} />
            ) : (
              <>
                <button onClick={() => handleEditClick(note)}>Edit</button>
                <button onClick={() => handleDeleteClick(note.id)}>
                  Delete
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NoteList;
