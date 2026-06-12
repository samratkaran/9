import { useState } from "react";
import { useTodo } from "../context";


const TodoForm = () => {

 const [formTodo ,setFormTodo] = useState('')
 const {addTodo} = useTodo()

 const add = (e)=>{
    e.preventDefault()

    if(!formTodo) return

    addTodo({todo:formTodo, completed:false})
    setFormTodo('')

 }
    
 return (
        <form  onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={formTodo}
                onChange={(e)=>setFormTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0" >
                Add
            </button>
        </form>
    );
}

export default TodoForm
