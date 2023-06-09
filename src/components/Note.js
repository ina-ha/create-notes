import React, { useState} from 'react';
import {FaRegTimesCircle} from 'react-icons/fa'

function Note(props) {

const handleClick = () => {
    props.toRemoveNote(props.note.id);
}


  return (
    <div>{props.note.text}<FaRegTimesCircle onClick={handleClick} /></div>
  )
}

export default Note