import React from 'react';
import {AiOutlineClose} from 'react-icons/ai';
import {HiOutlineDotsHorizontal} from 'react-icons/hi';
import "../App.css";

function Note(props) {

const handleClick = () => {
    props.toRemoveNote(props.note.id);
}


  return (
    <div>
      <div className="note-menu">
      <div><HiOutlineDotsHorizontal className='icon' /></div>
      <div><AiOutlineClose className='icon' onClick={handleClick} /></div>
      </div>
      <div className="note-text">{props.note.text}</div>
      
      
      </div>
  )
}

export default Note