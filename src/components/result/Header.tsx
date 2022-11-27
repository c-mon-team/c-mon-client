import { deleteMyTest } from 'libs/result';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { user as userStore } from '../../recoil/GlobalStore';
import RetryToggle from './RetryToggle';

interface HeaderProps {
  filteredMemberCount: number;
  memberCount: number;
}

function Header(props: HeaderProps) {
  const { filteredMemberCount, memberCount } = props;

  const navigate = useNavigate();

  const user = useRecoilValue(userStore);

  const [retryToggle, setRetryToggle] = useState(false);

  return (
    <>
      <header className="flex justify-between items-center pl-26 pr-20 pt-53 pb-12">
        <button
          className="flex justify-center items-center text-body3 text-gray10 px-7 py-4 bg-gray3 rounded-5"
          onClick={() => setRetryToggle(true)}
        >
          <img className="mr-7" src="/assets/icons/ic_arrow_left.svg" alt="arrow_left" />
          다시하기
        </button>
        <button className="flex justify-center items-center gap-6 text-body2 text-gray10">
          <img src="/assets/icons/ic_user_two_mono.svg" alt="user" />
          참가 멤버
          {filteredMemberCount !== memberCount && (
            <span className="text-blue">{filteredMemberCount}</span>
          )}
          <img src="/assets/icons/ic_toggle_down.svg" alt="toggle_down" />
        </button>
      </header>
      {retryToggle && (
        <RetryToggle
          onClose={() => setRetryToggle(false)}
          onConfirm={async () => {
            setRetryToggle(false);
            await deleteMyTest(user.id);
            navigate('/');
          }}
        />
      )}
    </>
  );
}

export default Header;
