import './App.css'
import Todo from './Components/Todo'
import Setter from './Components/Setter'

function App() {

  return (
    <main className='app'>
        <div className='background'>
          <h1 className='todo-h1'>TO DO LIST</h1>
          <Todo />
          </div>

    <Setter />

    </main>
  )
}

export default App
