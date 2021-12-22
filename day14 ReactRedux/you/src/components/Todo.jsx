import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { addTodo,delTodo,toggleTodo } from "../store/action";
import { store } from "../store/store"

export const Todo = () => {
    const dispatch = useDispatch();
    const  list  = useSelector((store) => store.todo);
    const [text, setText] = useState("");
    console.log(list);
    return <div>
        <h1>TODO </h1>
        <input type="text" onChange={(e) => { setText(e.target.value) }} />
        <button onClick={() => {
            dispatch(addTodo({
                id:  Math.random(),
                status: true,
                text:text,
            }))
        }} >Enter</button>
        
        {list.map((ele) => {
            return <div key={ele.id}>
                <div  style={ele.status?{color:"red"}:{color:"green"}} > {ele.text}</div>
                <button onClick={() => {
                    dispatch(toggleTodo(ele))
                }}>Toggle</button>
                <button onClick={() => {
                    dispatch(delTodo(ele))
                }} >Delete</button>
            </div> 
        })}
    </div>
}