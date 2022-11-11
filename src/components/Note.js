import React from 'react'
import { FaTimes } from 'react-icons/fa'

const Note = ({note, onDelete}) => {
  return (
    <div className='note'>
        
        <h2>{note.title} <FaTimes style={{color:'red', cursor:'pointer'}} onClick={()=>onDelete(note.id)}/></h2>
        <p>{note.author}</p>
        <p>{note.content}</p>
    </div>
  )
}

export default Note