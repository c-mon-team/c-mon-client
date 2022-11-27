import memberListDummy from 'data/memberListDummy';
import { atom } from 'recoil';
import type { GroupMember, User } from 'types/index';

// 내 테스트 결과 삭제할 때 필요함
export const user = atom<User>({
  key: 'user',
  default: {
    id: 1,
    name: '',
    groupId: 1,
  },
});

export const groupMemberList = atom<GroupMember[]>({
  key: 'groupMemberList',
  default: memberListDummy,
});
