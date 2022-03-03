//code 2



import {  useRef } from "react";
export function Example2() {
     
     const eleRef = useRef(null);
     return <>
         <div ref={eleRef}   style={{    //remember don't write eleRef.currnet
          width: "300px", 
          height: "300px ",
          background: "yellow",
          border: "1px solid black",
      }}  >div one</div>

      <div style={{
          width: "300px",
          height: "300px ",
          background: "blue",
          border: "1px solid black",
      }}  >div two</div>

      <div style={{
          width: "300px",
          height: "300px ",
          background: "red",
          border: "1px solid black",
      }}  >div three</div>

      <button onClick={() => {
        eleRef.current.scrollIntoView({
          behavior: 'smooth',
        });

      }} >click me</button>

      </>
  
}

