import React from 'react';

function Invite() {
  return (
    <div className="py-40 px-20">
      <h2 className="text-title2 mb-18">이 모임에 친구 초대하기</h2>
      <div className="flex gap-15">
        <button className="flex-1 flex justify-center items-center text-body2 text-gray10 h-80 bg-gray3 rounded-20">
          <img className="mr-10" src="/assets/icons/ic_kakao.svg" alt="kakao" />
          카카오톡
          <br />
          공유하기
        </button>
        <button className="flex-1 flex justify-center items-center text-body2 text-gray10 h-80 bg-gray3 rounded-20">
          <img className="mr-10" src="/assets/icons/ic_link.svg" alt="link" />
          공유링크
          <br />
          복사하기
        </button>
      </div>
    </div>
  );
}

export default Invite;
