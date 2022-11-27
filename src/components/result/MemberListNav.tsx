import React from 'react';
import { GroupMember } from 'types/index';

interface MemberListNavProps {
  groupMemberList: GroupMember[];
  selected: string;
  handleSelected: (name: string) => void;
}

function MemberListNav(props: MemberListNavProps) {
  const { groupMemberList, selected, handleSelected } = props;

  return (
    <div className="scrollbar-hide mt-30 flex px-20 gap-25 border-b border-gray3 border-solid overflow-scroll">
      {groupMemberList.map((member) => (
        <button
          onClick={() => handleSelected(member.name)}
          className={`pb-8 ${
            selected === member.name
              ? 'text-title4 border-b border-b-black'
              : 'text-body1 text-gray6 border-b border-b-white'
          }`}
          key={member.id}
        >
          {member.name}
        </button>
      ))}
    </div>
  );
}

export default MemberListNav;
