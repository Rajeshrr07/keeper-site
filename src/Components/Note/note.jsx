import React from 'react';
import './note.css';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function NoteItem(props) {
  const handleClick = () => {
    props.onDelete(props.id);
  }
  const handleEdit = () => {
    props.onEdit(props.id);
  };

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <div className="button">
      <EditIcon onClick={handleEdit}>EDIT</EditIcon>
        <DeleteIcon onClick={handleClick}>DELETE</DeleteIcon>
      </div>
    </div>
  );
}

export default NoteItem;



