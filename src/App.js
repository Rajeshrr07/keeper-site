import React, { useEffect, useState} from 'react';
import './App.css';
import Header from './Components/Header/header';
import Footer from './Components/Footer/footer';
import Note from './Components/Note/note.jsx';
import Create from './Components/Create/create';

function App() {
  const [notes, setNotes] = useState([]);

useEffect(()=>{
  const storeNotes = localStorage.getItem('notes');
  if (storeNotes) {
    setNotes(JSON.parse(storeNotes));
  }
},[])

useEffect(()=>{
  localStorage.setItem('notes', JSON.stringify(notes));
})

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((note,index) => {
        return index !== id;
      });
    });
  }

  return (
    <div id='main'>
      <Header />
      <Create onAdd={addNote} />
      {notes.map((noteItem, index) => (
        <Note
          key={index}
          id={index}
          title={noteItem.title}
          content={noteItem.content}
          onDelete={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
