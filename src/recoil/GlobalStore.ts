import { atom } from 'recoil';
import type { User } from 'types/index';

export const user = atom<User>({
  key: 'user',
  default: {
    id: 1,
    name: '',
  },
});
