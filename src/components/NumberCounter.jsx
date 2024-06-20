import React, { useEffect, useState } from 'react';

const NumberCounter = ({ start, end, duration, className, symbol }) => {
  const [count, setCount] = useState(start);
  const increment = end / (duration / 10); // Increment calculation

  useEffect(() => {
    let timer = setTimeout(() => {
      if (count < end) {
        setCount(count + increment);
      } else {
        setCount(end);
      }
    }, 10); // Update interval, can be adjusted for smoother animation

    // Clean up timer on component unmount
    return () => clearTimeout(timer);
  }, [count, end, increment]);

  return (
    <div className={className}>
      {Math.ceil(count).toLocaleString()}{symbol} {/* Display count with thousands separator */}
    </div>
  );
};

export default NumberCounter;
