import { atom } from 'recoil';

export const countStateKey = 'countState';
export const countState = atom({
  key: countStateKey,
  default: 0
})