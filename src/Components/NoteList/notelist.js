import React from 'react';
import Note from '../Note/note';

function NoteList({ notes, onDelete, onEdit }) {
  return (
    <div className="note-list">
      {notes.length > 0 ? (
        notes.map((note, index) => (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            category={note.category}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))
      ) : (
        <p>No notes available</p>
      )}
    </div>
  );
}

export default NoteList;

