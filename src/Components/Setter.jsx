
function Setter({handleItem, itemObject}) {


  return (
    <div >
        <form action="">
        <input 
        type="text" 
        name='entry'
        value={itemObject.entry}
        onChange={handleItem}
        className='set-todo'
        />
        </form>

        <button className='todo-btn'>Set Item</button>
    </div>
  )
}

export default Setter