import './App.css'
import Todo from './Components/Todo'
import Setter from './Components/Setter'
import { useState } from 'react'
import { nanoid } from 'nanoid'

function App() {

  
  const [itemsArray, setItemsArray] = useState([])
  const [item, setItem] = useState({
    id: nanoid(),
    entry: "",
    checked: false
  })

  function handleItem(event) {

    const {name, value} = event.target

    setItem((prevState) => ({
        ...prevState,
        [name] : value
    }));
  }

  const toggleCheck = (id) => {
    const checkedIdx = itemsArray.findIndex((i) => i.id === id);
    if (checkedIdx === -1 ) return;
    const updatedItem = [...itemsArray];
    updatedItem[checkedIdx].checked = !updatedItem[checkedIdx].checked;
    setItem(updatedItem)
  }

  const remove = () => {
    setItemsArray([...itemsArray].filter((i) => !i.checked));
  }

  const items = itemsArray.map(item => {
    return <Todo 
    key={nanoid()}
    id={item.id}
    item={item.name}
    onChange={() => toggleCheck(item.id)}
    value={item.checked}
    />
  });


  return (
    <main className='app'>
        <div className='background'>
          <h1 className='todo-h1'>TO DO LIST</h1>
          
          {items}

          {items.length > 0 && <button style={{marginTop: 20}} onClick={() => remove()}>Delete</button>}
          </div>

    <Setter itemObject={item} handleItem={handleItem} setItemsArray={setItemsArray} itemsArray={itemsArray}/>

    </main>
  )
}

export default App
