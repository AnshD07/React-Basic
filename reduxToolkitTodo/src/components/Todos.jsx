import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';


function Todos() {
  const todos = useSelector(state => state.todos)
  console.log(todos)
 
  return (
    <>
      <div>Todos</div>
      <ul className="list-none">
        {todos.map((todo) => (
          <TodoItem todo={todo} key={todo.id}/>
        ))}

      </ul>
    </>
  )
}

export default Todos  