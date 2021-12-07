

export const TodoList = ({listPass,handleToggle,handleDelete}) => {
    return <>
        {listPass.map((e) => {
            return <div key={e.id}>{e.text} - - -  {e.status ? "Done" : "Not Done"}- - - 
                <button onClick={()=>handleToggle(e.id)} >Toggle</button> - - -  
                <button onClick={()=>handleDelete(e.id)}>Delete</button>
            </div>
        
        })}
        </>
}