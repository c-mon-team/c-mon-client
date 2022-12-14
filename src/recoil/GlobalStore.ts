import memberListDummy from 'data/memberListDummy';
import { atom } from 'recoil';
import type { ApplyGroup, GroupMember, User } from 'types/index';

// 내 테스트 결과 삭제할 때 필요함
export const user = atom<User>({
  key: 'user',
  default: {
    id: 1,
    name: '',
  },
});

export const groupMemberList = atom<GroupMember[]>({
  key: 'groupMemberList',
  default: memberListDummy,
});

export const group = atom<Pick<ApplyGroup, 'id' | 'code' | 'name'>>({
  key: 'group',
  default: {
    id: 1,
    code: '',
    name: '',
  },
});
