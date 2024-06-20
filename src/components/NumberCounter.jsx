import React, { useEffect, useState } from 'react';

const NumberCounter = ({ start, end, duration, className, symbol }) => {
  const [count, setCount] = useState(start);
  const increment = (end - start) / (duration / 10); // Increment calculation

  useEffect(() => {
    let timer = setInterval(() => {
      setCount((prevCount) => {
        const newCount = prevCount + increment;
        return newCount >= end ? end : newCount;
      });
    }, 10); // Update interval, can be adjusted for smoother animation

    // Clean up interval on component unmount
    return () => clearInterval(timer);
  }, [increment, end]);

  return (
    <div className={className}>
      {Math.ceil(count).toLocaleString()}{symbol} {/* Display count with thousands separator */}
    </div>
  );
};

export default NumberCounter;
