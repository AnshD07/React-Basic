import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, updateTodo } from '../features/todo/todoSlice'

function AddTodo() {

  const [input, setInput] = useState('')
  const [updateId, setUpdateId] = useState("")
  const [isupdating, setIsupdating] = useState(false)
  const todos = useSelector(state => state.todos)


  const dispatch = useDispatch()

  const addTodoHandler = (e) => {
    e.preventDefault()
    dispatch(addTodo(input))
    setInput('')
  }

  const updateTodoHandler = (e) => {
    e.preventDefault()
    dispatch(updateTodo(input, updateId))
    setInput('')
    setIsupdating(false)
  }

  function editing(todo) {
    setIsupdating(true)
    setUpdateId(todo.id)
    setInput(todo.text)

    return { ...todo, isedit: false, text: input }
  }

  todos.map((todo) => todo.isedit ? editing(todo) : todo)

  return (
    <form onSubmit={isupdating ? updateTodoHandler : addTodoHandler} className="space-x-3 mt-12">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Add Todo
      </button>
    </form>
  )
}

export default AddTodo