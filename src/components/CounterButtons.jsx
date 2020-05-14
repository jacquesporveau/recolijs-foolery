import React from 'react';
import { useRecoilState } from 'recoil';

import { countState } from './Counter';

export const CounterButtons = () => {
  const [count, setCount] = useRecoilState(countState);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  );
};