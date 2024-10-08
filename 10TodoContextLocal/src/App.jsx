import { useEffect, useState } from 'react'
import { TodoProvider } from './contexts'
import { TodoForm, TodoItem } from './components'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {  // spred operator in object also work and todo is object
    setTodos((prev) => [{ ...todo }, ...prev]) //! we don't want old all value get replace so we need access of previous state 

    // here prev is previous array of todos   
    // prev is previous state of todo that is array
  }


  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? todo : prevTodo))
    // if true than new todo add kri lo ne nakar as is it pdo reva do
  }


  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
    //! which id is not match that going to filter and if match that is out of array so it basically remove that todo from todos list
  }

  //! Business logic
  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id ? {
          ...prevTodo,
          completed: !prevTodo.completed
        } : prevTodo))

    // spread todo object and overwrite the value of completed to inverse what boolean before it have with spred operator completed get overwrite
  }


  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos")) //! getItem store data in form of string so we need to parse it into JSON 

    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  //! don't forget to Provide value
  return (
    <TodoProvider value={{ todos, addTodo, deleteTodo, updateTodo, toggleComplete }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-xl rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">

            {/* Loop and Add TodoItem here in react with loop key is necessary */}

            {todos.map((todo) => (
              <div key={todo.id} className='w-full'>
                <TodoItem todoObj={todo} />
              </div>
            ))}

          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
