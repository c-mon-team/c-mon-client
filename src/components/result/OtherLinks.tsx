import React from 'react';

function OtherLinks() {
  return (
    <div className="py-40 px-20 flex gap-15">
      <button className="flex-1 h-170 rounded-20 bg-gray1 p-20">
        <p className="text-title4 mb-24 text-left">
          다른 모임의
          <br />
          공통 관심사도
          <br />
          궁금하다면?
        </p>
        <p className="text-body3 text-gray9 text-left">
          다른 모임
          <br />
          테스트 만들기 &gt;
        </p>
      </button>
      <button className="flex-1 h-170 rounded-20 bg-gray1 p-20">
        <p className="text-title4 mb-24 text-left">
          재밌었다면,
          <br />
          친구에게 &apos;커몬&apos;을
          <br />
          추천해주세요!
        </p>
        <p className="text-body3 text-gray9 text-left">
          커몬링크
          <br />
          공유하기 &gt;
        </p>
      </button>
    </div>
  );
}

export default OtherLinks;
