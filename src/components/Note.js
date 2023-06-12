import React, { useState, useEffect } from 'react';
import {AiOutlineClose} from 'react-icons/ai';
import {HiOutlineDotsHorizontal} from 'react-icons/hi';
import "../App.css";
import PopMenu from './PopMenu';

function Note(props) {
  const [pop, setPop] = useState(false);
  const [color, setColor] = useState("#6EC4D8");
  const [topColor, setTopColor] = useState("#60b2c4");

const handleYellow = () => {
  setColor("#FFF7C0");
  setTopColor("#f8efae");
}

const handleBlue = () => {
  setColor("#6EC4D8");
  setTopColor("#60b2c4");
}
  
const handleSalmon = () => {
  setColor("#FA7C92");
  setTopColor("#f76d84");
}

const handleGreen = () => {
  setColor("#66AB8C");
  setTopColor("#51a881");
}

  const handleClick = () => {
    props.toRemoveNote(props.note.id);
}

const popMenu = () => setPop(!pop);


  return (
    <div className="note">
      <PopMenu handleYellow={handleYellow} handleBlue={handleBlue} handleSalmon={handleSalmon} handleGreen={handleGreen} pop={pop} />
      <div className='note-body' style={{backgroundColor: `${color}`}}>
      <div className="note-menu" style={{backgroundColor: `${topColor}`}}>
      <div><HiOutlineDotsHorizontal className='icon' onClick={popMenu} /></div>
      <div><AiOutlineClose className='icon' onClick={handleClick} /></div>
      </div>
      <div className="note-text">{props.note.text}</div>
      </div>
      
      </div>
  )
}

export default Note