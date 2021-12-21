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

  return (
    <div className="App">
      <div>Running Counter {data}</div>
    </div>
  );
};
