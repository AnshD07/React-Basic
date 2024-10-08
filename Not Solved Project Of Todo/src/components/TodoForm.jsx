import React, { useState } from 'react'
import { useTodo } from '../contexts/TodoContext';

function TodoForm() {

    const { addTodo } = useTodo();

    const [todo, setTodo] = useState("")

    const addingTodo = (e) => {
        e.preventDefault(); //! don't forget to add preventDefault in any submite event listner okay
        if (!todo) return

        addTodo({ todo, id: Date.now(), completed: false })
        setTodo("") // for cleaning memory purpose
    }

    return (
        <form
            className="flex"
            onSubmit={addingTodo}
        >
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"

                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

