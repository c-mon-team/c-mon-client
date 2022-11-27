import React from 'react';

function Header() {
  return (
    <header className="flex justify-between items-center pl-26 pr-20 pt-53 pb-12">
      <button className="flex justify-center items-center text-body3 text-gray10 px-7 py-4 bg-gray3 rounded-5">
        <img className="mr-7" src="/assets/icons/ic_arrow_left.svg" alt="arrow_left" />
        다시하기
      </button>
      <button className="flex justify-center items-center gap-6 text-body2 text-gray10">
        <img src="/assets/icons/ic_user_two_mono.svg" alt="user" />
        참가 멤버
        <span className="text-blue">3</span>
        <img src="/assets/icons/ic_toggle_down.svg" alt="toggle_down" />
      </button>
    </header>
  );
}

export default Header;
