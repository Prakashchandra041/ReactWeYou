//for delete we generally use filter ---remember


import { TodoInput } from "./TodoInput";
import { useState } from "react";
import { TodoList } from "./TodoList";

export function Todo() {
    const [todoList, setTodoList] = useState([]);
    
    function handleList(todo) {
        setTodoList([...todoList,todo]) 
    }

    function handleToggle(id) {
    const ToggledData= todoList.map((ele) => {
            if (ele.id === id) {
               ele.status=!ele.status
            }
            return ele;
        })
        setTodoList(ToggledData)   
    } 
    function handleDelete(id) {
        const notDeletedList = todoList.filter((ele) => {
            if(ele.id===id){
                return null
            }
            return ele;
        })
        setTodoList(notDeletedList)
        console.log(notDeletedList);
    }
     
    return <>
        <div> <h1>Todo List</h1> </div>
        <TodoInput handleList={handleList}></TodoInput>
        <TodoList displayList={todoList} handleToggle={handleToggle} handleDelete={handleDelete}></TodoList> 
        <br /><br />
        <button onClick={() => {
         const updatedList= todoList.filter((e) =>
             !e.status)
            setTodoList(updatedList);
        }}>Show Not Done List</button> 
        </>
}