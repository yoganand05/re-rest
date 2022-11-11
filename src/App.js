import React from 'react'
import Header from './components/Header'
import Notes from './components/Notes'
import AddNote from './components/AddNote'
import { useState } from 'react'
import { useEffect } from 'react'




function App() {
  const [showAddNote, setShowAddNote] = useState(false)
  const [notes,setNotes] = useState([])

  useEffect(() => {
    const getNotes = async () => {
      const notesFromServer = await fetchNotes()
      setNotes(notesFromServer)
    }
    getNotes()
  }, [])


//fetch tasks from server
const fetchNotes = async () => {
  const res = await fetch ('http://localhost:5000/notes')
  const data = await res.json()
  return data
}


//addding a note to our state
const addNote = async (note) => {
  const res = await fetch('http://localhost:5000/notes', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(note),
  })

  const data = await res.json()

  setNotes([...notes, data])
}

// deleting a note

const deleteNote = async (id) => {
  await fetch(`http://localhost:5000/notes/${id}`, {
    method: 'DELETE'
  })
  setNotes(notes.filter((note)=> note.id !== id))
  
}



  return (
    <div className="container">
      <Header showAddNote={showAddNote} onAdd={()=>setShowAddNote(!showAddNote)}/>
      {showAddNote && <AddNote notes={notes} onAddition={addNote}/>}
      {notes.length > 0 ? (
        <Notes notes={notes} onDelete={deleteNote}/>
        ) 
      : ('No more notes')}
      
    </div>
  );
}

export default App;
