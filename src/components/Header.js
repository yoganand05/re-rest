import React from 'react'
import Button from './Button'

const Header = ({onAdd, showAddNote}) => {
  return (
    <header className='header'>
        <h1>Notebook App</h1>
        <Button color={showAddNote? 'red':'green'}
          text={showAddNote? 'Close':'Add'} 
          onClick={onAdd}/>
    </header>
  )
}

export default Header