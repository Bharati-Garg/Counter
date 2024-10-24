import React, { useEffect, useRef, useState } from "react";
import "./App.css";

const Counter = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    return () => clearInterval(id.current);
  }, []);

  let id = useRef();

  function handleTime() {
    id.current = setInterval(() => {
      setTime((prev) => prev + 1);
      console.log(time);
    }, 1000);
  }

  return (
    <div className="parent">
      <div className="counter">
        <h1 className="heading">Counter : {time}</h1>
        <div className="s">
          <button className="start" onClick={() => handleTime()}>
            Start
          </button>
          <button className="pause" onClick={() => clearInterval(id.current)}>
            Pause
          </button>
          <button
            className="reset"
            onClick={() => {
              clearInterval(id.current);
              setTime(0);
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
