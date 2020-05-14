import React from 'react';
import { useRecoilState } from 'recoil';

import { CounterButtons } from './CounterButtons';
import { countState } from './counterState';

export const Counter = () => {
  const [count] = useRecoilState(countState);

  return (
    <>
      <span>{count}</span>
      <CounterButtons />
    </>
  );
};