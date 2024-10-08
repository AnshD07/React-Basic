import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{ id: 1, text: "HEllo you can add todos here" , isedit : false }]
}


export const todoSlice = createSlice({
    name: 'todo',
    initialState,//declared at top we can also provide it here
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
                isedit:false
            }
  
            if (todo.text != "") state.todos.push(todo)
            else    alert("Please enter something in todo") 
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        
        updateTodo: (state, action) => { 
            const todoId = action.payload.updateId
            const updateText = action.payload.input
            
            state.todos = state.todos.map((todo) => todo.id === todoId ? { ...todo, text: updateText } : todo)

        }

    }
})

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions

export default todoSlice.reducer
