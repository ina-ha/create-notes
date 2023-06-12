import React from 'react'
import {BsSquareFill} from 'react-icons/bs';
import "../App.css";

function PopMenu({pop, handleYellow, handleBlue, handleSalmon, handleGreen}) {
    
  return (
    <div>
<div className={pop ? "note-popMenu-active" : "note-popMenu"}>
        <BsSquareFill onClick={handleBlue} className="icon-color blue"/>
        <BsSquareFill onClick={handleYellow} className="icon-color yellow"/>
        <BsSquareFill onClick={handleSalmon} className="icon-color salmon"/>
        <BsSquareFill onClick={handleGreen} className="icon-color green"/>
        </div>

    </div>
  )
}

export default PopMenu