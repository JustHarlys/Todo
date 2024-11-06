import { useState } from 'react'
import { nanoid } from 'nanoid'

function Setter() {

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

    console.log(item)

  return (
    <div>
        <form action="">
        <input 
        type="text" 
        name='entry'
        value={item.entry}
        onChange={handleItem}
        />
        </form>
    </div>
  )
}

export default Setter