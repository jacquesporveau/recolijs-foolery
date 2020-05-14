import React from 'react';
import { RecoilRoot } from 'recoil';

import { Counter } from './Counter';

export const Entry = () => {
  return (
    <RecoilRoot>
      <Counter />
    </RecoilRoot>
  );
};