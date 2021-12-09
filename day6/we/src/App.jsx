import "./App.css";
import { CounterRef } from "./components/CounterRef";
import { Example1 } from "./components/Example1";
import {Example2} from "./components/Example2";
import { Form } from "./components/Form"

function App() {

  return (
    <div className="App">
      <Form></Form>
      <br /><br /><br /><br />
      <hr />
      <CounterRef></CounterRef>
      <br /><br /><br /><br />
      <hr />
      <Example1></Example1>
      <br /><br /><br /><br />
      <hr />
      <Example2></Example2>
      
     

    </div>
  );
}

export default App;

// code 1

// import "./App.css";
// // import { Todo } from "./components/Todo";
// import { useState } from "react";

// function App() {
//   const [mousePosition, setMousePosition] = useState("");
//   return (
//     <div className="App">
//       {/* <Todo></Todo> */}
//       <div
//         onMouseMove={(e) => setMousePosition(`${e.clientX}---${e.clientY}`)}
//         onContextMenu={(e) => {
//           e.preventDefault()
//           alert("Hello")
//         }}

//         style={{
//           width: "500px",
//           height: "300px",
//           background: "yellow",
//           border: "1px solid black",
//         }}
//       >
//         Mouse-{mousePosition}
//       </div>
//     </div>
//   );
// }

// export default App;

//code 2

// import "./App.css";
// // import { Todo } from "./components/Todo";
// //1.dont change the value between two renders.
// //2. changing in value shouldn't cause render.
// import { useState, useEffect,useRef } from "react";

// function App() {
//   const eleRef = useRef(null);

//   return (
//     <div className="App">
//       {/* <Todo></Todo> */}
//       <div ref={eleRef}   style={{
//           width: "300px",
//           height: "300px ",
//           background: "yellow",
//           border: "1px solid black",
//       }}  >div one</div>

//       <div style={{
//           width: "300px",
//           height: "300px ",
//           background: "blue",
//           border: "1px solid black",
//       }}  >div two</div>

//       <div style={{
//           width: "300px",
//           height: "300px ",
//           background: "red",
//           border: "1px solid black",
//       }}  >div three</div>

//       <button onClick={() => {
//         eleRef.current.scrollIntoView({
//           behavior: 'smooth',
//         });

//       }} >click me</button>

//     </div>
//   );
// }

// export default App;



//code 3 counter with the help of useRef


// import "./App.css";
// //1.dont change the value between two renders.
// //2. changing in value shouldn't cause render.
// import { useState, useEffect, useRef } from "react";

// function App() {
//   const countRef = useRef(null);
//   const [counter, setCounter] = useState(0);
//   const [restart, setRestart] = useState(0);

//   useEffect(() => {
//     handleResume();
//   }, []);

//   function handleResume() {
//     countRef.current = setInterval(() => {
//       setCounter((pre) => pre + 1);
//     }, 1000);
//   }

//   return (
//     <div className="App">
//       <h1>Timer</h1>
//       <div>{counter}</div>
//       <button onClick={() => {
//         clearInterval(countRef.current)
//         countRef.current = null;
//       }}>Pause</button>
//       <button onClick={() => {
//         if (countRef.current) {   //must watch it form 1:12 hr . it prevent multiple setInterval call
//           return;
//         }
//         handleResume()
//       }}>Resume</button>

//       <button onClick={() => {
//         setCounter(0)
        
//       }}>Reset</button>
//     </div>
//   );
// }

// export default App;
