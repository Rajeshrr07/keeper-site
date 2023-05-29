import React, { useState } from 'react'
import './create.css'
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function Create(props) {
  const [isExpanted,setIsExpanted] = useState(false);

    const expand = () =>{
      setIsExpanted(true);
    }
  const [note,setNode] = useState({
    title : "",
    content : "",
  })

  const handleChange = (e) =>{
    const {name,value}= e.target;
    setNode(prevNote => {
      return {
        ...prevNote,
        [name] : value
      }
    })
  }

  const submitNote = (e) => {
    props.onAdd(note);
    setNode({
      title : "",
      content : "",
    })
    e.preventDefault();
  }
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
            <AddIcon></AddIcon>
          </Fab>
        </Zoom>
        
        
      </form>
    </div>
  )
}
export default  Create;