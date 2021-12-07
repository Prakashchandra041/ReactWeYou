import { TodoInput } from "./TodoInput";
import { TodoList } from "./TodoList";
import { useState } from "react";
export const Todo = () => {
    const [list, setList] = useState([])
    const [showFilter, setShowFilter] = useState(false);
    function listUpdate(data) {
        setList([...list,data])
    }

    function handleToggle(id) {
    const updatedList =   list.map((ele) => {
            if (ele.id === id) { 
                ele.status = !ele.status;
            }
            return ele;
    })
        setList(updatedList)
    }

    // function handleNotDone() {
    //     const updateList = list.filter((ele) => !ele.status)   //this part is changed, earlier we done this way which updted the orginal list when we show not done
    //     setList(updateList)
    // }

    function handleDelete(id) {
        const updatedList = list.filter((ele) => {
            if (ele.id === id) {
                return null
            }
            return ele;
        })
        setList(updatedList);
    }
    //  line no 39 mai original list ko sirp filter kar rahe hai update nahi must watch video no 4 from 27:30 min
    return <>
        <h1>TODO</h1> 
        <TodoInput listUpdate={listUpdate}></TodoInput>
        <TodoList listPass={showFilter ? list.filter((ele) => !ele.status) : list} handleToggle={handleToggle} handleDelete={handleDelete}></TodoList>
        <button onClick={() => {
            setShowFilter(!showFilter)
        }}> { showFilter? "Show all list":"  Show not completed"} </button>
        </>
}