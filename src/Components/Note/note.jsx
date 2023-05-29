import React from 'react';
import './note.css';
import DeleteIcon from '@mui/icons-material/Delete';

function NoteItem(props) {
  const handleClick = () => {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <div className="button">
        <DeleteIcon onClick={handleClick}>DELETE</DeleteIcon>
      </div>
    </div>
  );
}

export default NoteItem;
