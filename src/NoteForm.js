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
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-gray-200 p-8 rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-4">Add a Note</h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Title:</label>
            <input
              type="text"
              value={title}
              onChange={handleTitleChange}
              className="mt-1 p-2 w-full rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Content:</label>
            <textarea
              value={content}
              onChange={handleContentChange}
              className="mt-1 p-2 w-full rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
            />
          </div>
          <button
            type="button"
            onClick={handleAddNote}
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
          >
            Add Note
          </button>
        </form>
      </div>
    </div>
  );
};

export default NoteForm;
