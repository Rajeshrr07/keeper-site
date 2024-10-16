import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './Components/Header/header';
import Footer from './Components/Footer/footer';
import Note from './Components/Note/note.jsx';
import Create from './Components/Create/create';
import SearchBar from './Components/SearchBar/searchbar.js';
import NoteList from './Components/NoteList/notelist.js';

function App() {
  const [notes, setNotes] = useState([]);
  const [editingNote, setEditingNote] = useState(null); 
  const [searchQuery, setSearchQuery] = useState('');
  useEffect(() => {
    const storedNotes = localStorage.getItem('notes');
    if (storedNotes) {
      setNotes(JSON.parse(storedNotes));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]); 

  const addNote = (newNote) => {
    if (editingNote !== null) {

      setNotes((prevNotes) => {
        const updatedNotes = [...prevNotes];
        updatedNotes[editingNote] = newNote; 
        return updatedNotes;
      });
      setEditingNote(null); 
    } else {
      setNotes((prevNotes) => {
        return [...prevNotes, newNote];
      });
    }
  };

  const deleteNote = (id) => {
    setNotes((prevNotes) => {
      return prevNotes.filter((note, index) => index !== id);
    });
  };

  const editNote = (id) => {
    setEditingNote(id); 
  };

  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const clearNotes = () => {
    setNotes([]);
    localStorage.removeItem('notes'); 
  };

  const noteToEdit = editingNote !== null ? notes[editingNote] : null; // Get the note to edit

  return (
    <div id='main'>
      <Header />
      <div  id='note-container'>

      <SearchBar setSearchQuery={setSearchQuery} />
      <Create onAdd={addNote} noteToEdit={noteToEdit} />
      <NoteList notes={filteredNotes} onDelete={deleteNote} onEdit={editNote} />
      <button className='clear_button' onClick={clearNotes}>Clear All Notes</button>
      </div>
      <Footer />
      
    </div>
  );
}

export default App;
