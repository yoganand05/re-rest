import React from 'react'
import { useState } from 'react'

const AddNote = ({onAddition}) => {
    const [title,setTitle] = useState('')
    const [author,setAuthor] = useState('')
    const [content,setContent ] = useState('')

    const onSubmit = (e) => {
      e.preventDefault()
      if(!title){
        alert('Please add task')
        return
      }
      
      onAddition({ title, author, content })

      setTitle('')
      setAuthor('')
      setContent('')
    }

  return (
    <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
            <label>Title</label>
            <input 
              type='text' 
              placeholder='Add Title'
              value={title}
              onChange={(e)=>setTitle(e.target.value)}
              />
        </div>
        <div className='form-control'>
            <label>Author</label>
            <input
              type='text' 
              placeholder='Add Author'
              value={author}
              onChange={(e)=>setAuthor(e.target.value)}
              />
        </div>
        <div className='form-control'>
            <label>Content</label>
            <input 
              type='text' 
              placeholder='Add Content'
              value={content}
              onChange={(e)=>setContent(e.target.value)}
              />
        </div>
        <input type='submit' value='Save Note' className='btn btn-block
            '/>
    </form>
  )
}

export default AddNote