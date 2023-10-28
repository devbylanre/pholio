import { useState, useEffect } from 'react';

type hookType = {
  min: number;
  max: number;
  speed: number;
};

export const useNumberCounter = (props: hookType, callback?: () => void) => {
  const { min, max, speed } = props;
  const [count, setCount] = useState(min);

  useEffect(() => {
    if (count < max) {
      const interval = setInterval(
        () => setCount((prevCount) => prevCount + 1),
        speed
      );
      return () => clearInterval(interval);
    }

    setCount(max);
    callback && callback();
  }, [min, max, speed, count, callback]);

  return { count };
};
