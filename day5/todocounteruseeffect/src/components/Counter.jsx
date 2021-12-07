import { useState, useEffect } from "react";
export const Counter = () => {
  const [data, setData] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      console.log("set");
      setData((value) => {
  
        if (value === 10) {
          clearInterval(id);
          return 10;
        }
        return value + 1;
      });
    }, 1000);

    return (() => {      // this is clean up function it will return form useEffect , must watch 5th video from 2:05 hr
      clearInterval(id); 
    })
  }, []);
// json-server --watch db.json --port 3001
  return (
    <div className="App">
      <h1>Running Counter </h1>
      <p>{data}</p>
    </div>
  );
};
