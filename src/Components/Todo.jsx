import { useState } from 'react'

function Todo({item, onChange, value}) {


  return (
      <div className='todo-container'>
        <input type="checkbox" onChange={onChange} checked={value}/>

         <p className='todo-p'>{item}</p>
      </div>
  )
}

export default Todo