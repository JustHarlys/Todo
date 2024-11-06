import React, { useState } from 'react'

function Todo() {

    const [isChecked, setIsChecked] = useState(false)

  return (
    <div className='todo-container'>
        <input type="checkbox" defaultChecked={false}/>
        <p className='todo-p'>Lorem Ipsum Navas Bla BLA BLA</p>
    </div>
  )
}

export default Todo