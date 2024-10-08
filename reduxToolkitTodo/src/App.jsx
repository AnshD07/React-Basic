import './App.css'
import AddTodo from './components/AddTod'
import Todos from './components/Todos'

function App() {

  return (
    <>
      <h1 className='text-4xl'>Todo</h1>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App
