import React, { useState } from 'react';
import {AiOutlineClose} from 'react-icons/ai';
import {HiOutlineDotsHorizontal} from 'react-icons/hi';
import "../App.css";
import PopMenu from './PopMenu';

function Note(props) {
  const [pop, setPop] = useState(false);
  



  const handleClick = () => {
    props.toRemoveNote(props.note.id);
}

const popMenu = () => setPop(!pop);


  return (
    <div className="note">
      <PopMenu pop={pop} />
      <div className='note-body'>
      <div className="note-menu">
      <div><HiOutlineDotsHorizontal className='icon' onClick={popMenu} /></div>
      <div><AiOutlineClose className='icon' onClick={handleClick} /></div>
      </div>
      <div className="note-text">{props.note.text}</div>
      </div>
      
      </div>
  )
}

export default Note