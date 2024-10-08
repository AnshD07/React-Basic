import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "this is todo",
            completed: false
        }
    ],
    addTodo: (todo) => { },
    deleteTodo: (id) => { },
    updateTodo: (id, todo) => { },
    toggleComplete: (id) => { }
})

export const TodoProvider = TodoContext.Provider

export function useTodo() {
    return useContext(TodoContext)
}