import React from 'react'
import {BsSquareFill} from 'react-icons/bs';
import "../App.css";

function PopMenu({pop}) {
    
  return (
    <div>
<div className={pop ? "note-popMenu-active" : "note-popMenu"}>
        <BsSquareFill className="icon-color blue"/>
        <BsSquareFill className="icon-color yellow"/>
        <BsSquareFill className="icon-color salmon"/>
        <BsSquareFill className="icon-color green"/>
        </div>

    </div>
  )
}

export default PopMenu