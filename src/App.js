import React from 'react';
import { useState } from 'react';
import InputField from './components/InputField';
import Note from './components/Note';
import './App.css';


function App() {
  const [notes, setNotes] = useState([{id: 0, text: 'Add your notes'}]);
  
  const toAddNote = (note) => setNotes((notes) => [note, ...notes]);  

  const toRemoveNote = (toRemoveId) => {
    setNotes((notes) => notes.filter((note) => note.id !== toRemoveId))
  }

  const removeAll = () => {
    setNotes([])
  }
  return (
    <main>
     <InputField toAddNote={toAddNote}/>
     <div className='notes'>
      {notes.map((note) => <div className='note'><Note toRemoveNote={toRemoveNote} note={note} /></div>)}
     </div>
     <div className='remove'>
     <button className='btn' onClick={removeAll}>Remove all</button>
     </div>
    </main>
  );
};

export default App