import { useState } from "react";
import { useSelector,useDispatch } from "react-redux"
import { addTodo } from "../store/action";

export const Todos = () => {

    const dispatch = useDispatch();
    const todos = useSelector((store) => store.todos);

    const [text, setText] = useState("")
    //  console.log("Inside Todo list")
    return (

        <div>
            <h1>Todo List</h1>
            <input type="text"
                placeholder="Enter Todos"
                onChange={(e)=>setText(e.target.value)}
            />
       
            <button
                onClick={() => {
                    const payload = {
                        status: false,
                        title:text,
                    }
                    dispatch(addTodo(payload));
                }}
            >Add list</button>
            {todos.map((e) => {
               return <div key={e.title}>{e.title}</div>
            })}
        </div>
    )
} 