import { createContext, useContext } from "react";

// default value
export const TodoContext = createContext({ //! we only give in this context which one is varible and method don't create functionality of them do it later
    todos: [
        {
            id: 1,
            todo: "Todo Message from Ansh",
            completed: false
        }
    ],
    addTodo: (todo) => { },
    updateTodo: (id, todo) => { },
    deleteTodo: (id) => { },
    toggleComplete: (id) => { }
})

export const TodoProvider = TodoContext.Provider

export const useTodo = () => {
    return useContext(TodoContext)
}