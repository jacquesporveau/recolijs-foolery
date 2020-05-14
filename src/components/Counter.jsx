import React from 'react';
import { atom, useRecoilState } from 'recoil';

import { CounterButtons } from './CounterButtons';

export const countStateKey = 'countState';
export const countState = atom({
  key: countStateKey,
  default: 0
})

export const Counter = () => {
  const [count] = useRecoilState(countState);

  return (
    <>
      <span>{count}</span>
      <CounterButtons />
    </>
  );
};