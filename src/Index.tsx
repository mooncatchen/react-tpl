import React, { useState, useEffect } from 'react';
import { Button } from '@/components';

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
      <Button onClick={handleClick} type="button">
        计数
      </Button>
      <div>count: {count}</div>
    </div>
  );
}
