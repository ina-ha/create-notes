import React from 'react'
import { useState } from 'react'
import InputField from './InputField';
import Note from './Note';


function CreateNotes() {
  const [notes, setNotes] = useState([{id: 0, text: 'Add your notes'}]);
  
  const toAddNote = (note) => setNotes((notes) => [note, ...notes]);  

  const toRemoveNote = (toRemoveId) => {
    setNotes((notes) => notes.filter((note) => note.id !== toRemoveId))
  }

  const removeAll = () => {
    setNotes([])
  }
  return (
    <div>
     
     <InputField toAddNote={toAddNote}/>
     <ul>
      {notes.map((note) => <div><Note toRemoveNote={toRemoveNote} note={note} /></div>)}
     </ul>
     <button onClick={removeAll}>Remove all</button>
     
    </div>
  );
};

export default CreateNotes