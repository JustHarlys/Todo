
function Setter({handleItem, itemObject, itemsArray, setItemsArray}) {


  return (
    <div >
        <form>
        <input 
        type="text" 
        name='entry'
        value={itemObject.entry}
        onChange={handleItem}
        className='set-todo'
        />
        </form>

        <button className='todo-btn' onClick={() => {setItemsArray([...itemsArray, {id: itemObject.id, name : itemObject.entry}])}}>Set Item</button>
    </div>
  )
}

export default Setter