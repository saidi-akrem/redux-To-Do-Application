
import React, { useState, useEffect } from "react";
import './Clock.css';

function Clock() {
    const [time, setTime] = useState(new Date());
  
    useEffect(() => {
      const interval = setInterval(() => {
        setTime(new Date());
      }, 1000);
  
      return () => {
        clearInterval(interval);
      };
    }, []);
  
    return (
      <div className="clock">
        <h3>{time.toLocaleTimeString()}</h3>
      </div>
    );
  }

export default Clock
