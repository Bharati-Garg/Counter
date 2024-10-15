import React, { useState, useEffect } from "react";

function CounterApp() {
  const [count, setCount] = useState(0); // To track the counter value
  const [isRunning, setIsRunning] = useState(false); // To track whether the counter is running
  const [intervalId, setIntervalId] = useState(null); // To store the interval ID

  // Start the counter
  const startCounter = () => {
    if (!isRunning) {
      const id = setInterval(() => {
        setCount((prevCount) => prevCount + 1); // Increment the count every 1000ms (1 second)
      }, 1000);
      setIntervalId(id);
      setIsRunning(true); // Set running to true
    }
  };

  // Pause the counter
  const pauseCounter = () => {
    if (isRunning) {
      clearInterval(intervalId); // Clear the interval
      setIsRunning(false); // Set running to false
    }
  };

  // Reset the counter
  const resetCounter = () => {
    clearInterval(intervalId); // Clear the interval
    setCount(0); // Reset count to 0
    setIsRunning(false); // Stop the counter
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (intervalId) {
        clearInterval(intervalId); // Clear the interval when the component unmounts
      }
    };
  }, [intervalId]);

  return (
    <div>
      <div className="counter">
        <h1 className="heading">Counter: {count}</h1>
        <div className="s">
          <button className="start" onClick={startCounter}>
            Start
          </button>
          <button className="pause" onClick={pauseCounter}>
            Pause
          </button>
          <button className="reset" onClick={resetCounter}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default CounterApp;
