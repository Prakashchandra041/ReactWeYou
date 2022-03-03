// code 1


import { useState } from "react";

 export function Example1() {
  const [mousePosition, setMousePosition] = useState("");
  return (
  
      <div
        onMouseMove={(e) => setMousePosition(`${e.clientX}---${e.clientY}`)}
        onContextMenu={(e) => {
          e.preventDefault()
          alert("Hello")
        }}

        style={{
          width: "500px",
          height: "300px",
          background: "yellow",
          border: "1px solid black",
        }}
      >
        Mouse-{mousePosition}
      </div>
  );
}

