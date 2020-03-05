import React, { useState, useEffect } from 'react';

export default function Index(): React.ReactElement {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = 'useEffect';
    return (): void => {
      document.title = 'index';
    };
  });

  const handleClick = (): void => {
    setCount(count + 1);
  };

  return (
    <div className="wrapper">
      <button onClick={handleClick} type="button">
        计数
      </button>
      <div>count: {count}</div>
    </div>
  );
}
