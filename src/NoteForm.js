// NoteForm.js
import React, { useState } from 'react';

const NoteForm = ({ onAddNote }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleAddNote = () => {
    // Check if title and content are not empty
    if (title.trim() !== '' && content.trim() !== '') {
      // Call the onAddNote function passed from the parent component
      onAddNote({ title, content });
      // Clear the form
      setTitle('');
      setContent('');
    }
  };

  return (
    <div>
      <h2>Add a Note</h2>
      <form>
        <label>Title:</label>
        <input type="text" value={title} onChange={handleTitleChange} />
        <br />
        <label>Content:</label>
        <textarea value={content} onChange={handleContentChange} />
        <br />
        <button type="button" onClick={handleAddNote}>
          Add Note
        </button>
      </form>
    </div>
  );
};

export default NoteForm;
