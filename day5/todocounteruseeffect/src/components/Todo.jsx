 // must watch video 5 from 1:39 hr to know what is stail state in useEffect
// json-server db.json --port 3001 --watch       --to run server

import { useState, useEffect } from "react";
export const Todo=()=> {
    const [data, setData] = useState([]);
    const [text, setText] = useState("");
    const [page, setPage] = useState(1);
    
    useEffect(() => {
        getTodo()
    }, [page]);

    const getTodo = () => {
        fetch(`http://localhost:3001/todo?_page=${page}&_limit=3`)
            .then((d) => d.json())
            .then(setData)  //.then((data)=>setData)  (this two is same just way of  writing is different) 
        
    };

    function handleButton() {
        fetch("http://localhost:3001/todo", {
            method: "POST",
            body: JSON.stringify({
                title: text,
                status: false,
            }),
            headers: {
                "Content-Type": "application/json"
            }
        }) .then(getTodo) 
    }


//   useEffect(() => {
//     fetch(" http://localhost:3001/todo")
//       .then((d) => d.json())
//       .then((res) => {
//         console.log("res: ", res);
//         setData(res);
//       });
  
//   }, [])
  
   
  // useEffect(() => {
  //   async function networkreq() {
  //     let res = await fetch("http://localhost:3001/todo")
  //     const data = await res.json();
  //     setData(data);
  //   }
  //   networkreq();
  // },[])
  
  return (
      <div>
          <input type="text" placeholder="Enter Your List" onChange={(e)=>setText(e.target.value)}/>
          <button onClick={handleButton}>Enter</button>
          {data.map((e) => <div key={e.id}>{e.title}</div>)}
          <button onClick={() => {
              return setPage(page-1)
          }}>Previous</button>

          <button onClick={() => {
              return setPage(page+1)
          }}>Next</button>
    </div>
  );
}

