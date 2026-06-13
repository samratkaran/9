import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos:[{id:1 , text:"hello"}]
}



export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state, action)=>{
            const newTodo = {
                id:nanoid(),
                text: action.payload  // we are not writing text after payload cause text is our property so we do not need to repeat and payload is object so we can get value same with . as we take in object
                
            }
            state.todos.push(newTodo)

        },
        removeTodo:(state, action)=>{
            state.todos = state.todos.filter((todo)=>todo.id !== action.payload)
        },
       
    }
})

export const {addTodo , removeTodo} = todoSlice.actions

export default todoSlice.reducer

// In previouse contextAPI we are writing the method outside or say in our app compoent or anywhere 
// in redux toolkit we just dont write diclaration, insted we write defination here
// in this we always get two things state and action