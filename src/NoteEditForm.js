// NoteEditForm.js
import React, { useState } from 'react';

const NoteEditForm = ({ note, onSaveEdit }) => {
  const [editedTitle, setEditedTitle] = useState(note.title);
  const [editedContent, setEditedContent] = useState(note.content);

  const handleTitleChange = (e) => {
    setEditedTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setEditedContent(e.target.value);
  };

  const handleSaveEdit = () => {
    // Check if editedTitle and editedContent are not empty
    if (editedTitle.trim() !== '' && editedContent.trim() !== '') {
      // Call the onSaveEdit function passed from the parent component
      onSaveEdit(note.id, { title: editedTitle, content: editedContent });
    }
  };

  return (
    <div className='card'>
      <h2>Edit Note</h2>
      <form>
        <label>Title:</label>
        <input type="text" value={editedTitle} onChange={handleTitleChange} />
        <br />
        <br />
        <br />
        <label>Content:</label>
        <textarea value={editedContent} onChange={handleContentChange} />
        <br />
        <br />
        <br />
        <button type="button" onClick={handleSaveEdit}>
          Save Edit
        </button>
      </form>
    </div>
  );
};

export default NoteEditForm;
