//1.dont change the value between two renders.
//2. changing in value shouldn't cause render.
import { useState, useEffect, useRef } from "react";

export function CounterRef() {
  const countRef = useRef(null);
  const [counter, setCounter] = useState(0);
  const [restart, setRestart] = useState(0);

  useEffect(() => {
    handleResume();
  }, []);

  function handleResume() {
    countRef.current = setInterval(() => {
      setCounter((pre) => pre + 1);
    }, 1000);
  }

  return (
    <div className="App">
      <h1>Timer</h1>
      <div>{counter}</div>
      <button
        onClick={() => {
          clearInterval(countRef.current);
          countRef.current = null;
        }}
      >
        Pause
      </button>
      <button
        onClick={() => {
          if (countRef.current) {
            //must watch it form 1:12 hr . it prevent multiple setInterval call
            return;
          }
          handleResume();
        }}
      >
        Resume
      </button>

      <button
        onClick={() => {
          setCounter(0);
        }}
      >
        Reset
      </button>
    </div>
  );
}
