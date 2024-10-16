import React, { useState, useEffect } from 'react';
import './create.css';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function Create(props) {
  const [isExpanted, setIsExpanted] = useState(false);
  const [note, setNode] = useState({ title: "", content: "" });

  useEffect(() => {
    if (props.noteToEdit) {
      setNode(props.noteToEdit); // Pre-fill the form with the note being edited
      setIsExpanted(true);
    }
  }, [props.noteToEdit]);

  const expand = () => {
    setIsExpanted(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNode(prevNote => ({
      ...prevNote,
      [name]: value,
    }));
  };

  const submitNote = (e) => {
    e.preventDefault();
    props.onAdd(note);
    setNode({ title: "", content: "" });
    setIsExpanted(false);
  };

  return (
    <div>
      <form>
        {isExpanted && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}
        <textarea
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanted ? 3 : 1}
        />
        <Zoom in={true}>
          <Fab className='button' onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default Create;
