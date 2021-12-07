import { useState } from "react";
import { nanoid } from "nanoid";
export const TodoInput = ({listUpdate}) => {
    const [text, setText] = useState("");

    function handleInput({target}) {
        setText(target.value)
    }
    function handleBtnInput() {  
        const data = {
            id:nanoid(4),
            text: text,
            status: false,   
        }
        listUpdate(data)
        setText("")
    }
    return <>
        <input type="text" placeholder="Enter the your list" onChange={handleInput} value={text} />
         <button onClick={handleBtnInput} >Enter</button>
        </>
}