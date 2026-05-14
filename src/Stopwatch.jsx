import React, { useState, useEffect } from "react";

export default function Stopwatch() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (running) {
      interval = setInterval(() => {
        setTime((t) => t + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [running]);

  return (
    <div>
      <h2>Stopwatch</h2>

      <h3>{time} seconds</h3>

      <button onClick={() => setRunning(true)}>
        Start
      </button>

      <button onClick={() => setRunning(false)}>
        Stop
      </button>

      <button
        onClick={() => {
          setRunning(false);
          setTime(0);
        }}
      >
        Reset
      </button>
    </div>
  );
}