import { useEffect, useState } from "react";
import { useSelector,useDispatch } from "react-redux"
import { addTodo, addTodoError, addTodoLoading, addTodoSuccess, getTodoError, getTodoLoading, getTodoSuccess } from "../store/action";
import axios from "axios";
export const Todos = () => {

    const dispatch = useDispatch();
    const {loading,error,data} = useSelector((store) => store.todos);
    const [text, setText] = useState("")
    //  console.log("Inside Todo list")
    useEffect(() => {
        getData();
    },[])

    const getData = async () => {
        dispatch(getTodoLoading())
        try {
            const { data } = await axios.get("http://localhost:3001/todos");
            dispatch(getTodoSuccess(data));
        } catch (error) {
            dispatch(getTodoError(error));
        }
       
    }

    return loading ? ("...Loading..."): (
        <div> 
            <h1>Todo List</h1>
            <input type="text" 
                placeholder="Enter Todos"
                onChange={(e)=>setText(e.target.value)}
            />
       
            <button
                onClick={ async() => {
                    dispatch(addTodoLoading());
                    const payload = {
                        status: false,
                        title:text,
                    }
                    try {
                        const {data} = await axios.post("http://localhost:3001/todos", payload)
                        dispatch(addTodoSuccess(data));
                        getData();
                    } catch (err) {
                        dispatch(addTodoError(err));
                    }
                    // dispatch(addTodo(payload));
                }}
            >Add list</button>
            {data.map((e) => {
               return <div key={e.title}>{e.title}</div>
            })}
        </div>
    )
}



// MUST WATCH THE RECORDED VIDEO FROM 2:2O:00 SIR EXPLAIN WHOLE 
// IN NUTSHELL