
export function TodoList({displayList,handleToggle,handleDelete}) {

    return <>
        {displayList.map((e) => {
            return <div key={e.id}>{e.text}--{e.status ? "Done" : "Not Done"}
                <button onClick={()=>handleDelete(e.id)}>Delete</button>
                <button onClick={()=>handleToggle(e.id) 
                    }> Change Status</button> 
            </div> 
        })}
        </> 
} 