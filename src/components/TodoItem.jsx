import './todo.css';
import { useState } from "react";

export const Todoitem = ({getdata})=>{
    const [todo,setTodo] = useState("");
    const handlechanges=(e)=>{
        if(e.target.value.length!==" "){
            setTodo(e.target.value)
        }
    }
    return (
        <form>
            <input onChange={handlechanges} type="text" placeholder="todo" />
            <button onClick={(e)=>{
                e.preventDefault();
                getdata(todo)}}>+</button>
        </form>
    )
}