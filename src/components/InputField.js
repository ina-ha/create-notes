import React, {useState} from 'react'
import { defineId } from './Functions';
import "../App.css";

function InputField(props) {
const [text, setText] = useState("");


const handleChange = ({target}) => {setText(target.value);}


const handleSubmit = (event) => {event.preventDefault();
    const note = {id: defineId(),
    text: text}
 props.toAddNote(note);
 setText('')
}

  return (
    <div>
        <form className="add" onSubmit={handleSubmit}>
            
            <div className="add-bar">
            <input type='text' onChange={handleChange} value={text} placeholder='Type here'></input>
            </div>
            <div>
            <button className='btn' type='submit'>Add</button>
            </div>
            
        </form>
    
    </div>
  )
}

export default InputField