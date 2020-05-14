import React from 'react';
import { atom, useRecoilState } from 'recoil';

export const countStateKey = 'countState';
export const countState = atom({
  key: countStateKey,
  default: 0
})

export const Counter = () => {
  const [count, setCount] = useRecoilState(countState);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <>
      <span>{count}</span>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  );
};