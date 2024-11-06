import './App.css'
import Todo from './Components/Todo'
import Setter from './Components/Setter'
import { useState } from 'react'
import { nanoid } from 'nanoid'

function App() {

  const [item, setItem] = useState({
    id: nanoid(),
    entry: ""
})

function handleItem(event) {

    const {name, value} = event.target

    setItem((prevState) => ({
        ...prevState,
        [name] : value
    }));
}

function handleClick () {
  console.log('Hola')
}

  return (
    <main className='app'>
        <div className='background'>
          <h1 className='todo-h1'>TO DO LIST</h1>
          <Todo itemObject={item}/>
          </div>

    <Setter itemObject={item} handleItem={handleItem}/>

    </main>
  )
}

export default App
