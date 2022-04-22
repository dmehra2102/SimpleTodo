import { useState } from "react"
import { Todoitem } from "./TodoItem"

export const Todolist = ()=>{
    const [todolist,setTodolist] = useState([]);
    const getdata = (data)=>{
        if(data.length!==0){
            setTodolist([...todolist,data]);
        }
    }
    return (
        <div>
            <Todoitem getdata={getdata}/>
            {todolist.map(el=>{return <li className="things_to_do">{el}<input type='checkbox'/></li>})}
        </div>
    )
}