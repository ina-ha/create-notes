import React, {useState} from 'react'
import { defineId } from './Functions';

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
        <form onSubmit={handleSubmit}>
            <input type='text' onChange={handleChange} value={text} placeholder='Type here'></input>
            <button type='submit'>Add</button>
            
        </form>
    </div>
  )
}

export default InputField