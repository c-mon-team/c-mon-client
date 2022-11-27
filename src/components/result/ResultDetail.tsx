import React from 'react';

function ResultDetail() {
  return (
    <div className="flex-col justify-center items-center bg-gray3 py-40 px-42">
      <p className="text-body1 text-gray10 text-center mb-20">
        전체가 아닌 몇 명만의
        <br />
        공통 관심사가 궁금하다면?
      </p>
      <button className="w-[100%] h-56 mb-40 mx-auto bg-blue text-title4 text-white rounded-20 flex justify-center items-center">
        <img className="mr-8" src="/assets/icons/ic_member.svg" alt="member" />
        끼리끼리 공통 관심사 보기
      </button>
      <p className="text-body1 text-gray10 text-center mb-20">친구들의 세부 관심사가 궁금하다면?</p>
      <button className="w-[100%] h-56 bg-blue text-title4 text-white rounded-20 flex justify-center items-center">
        <img className="mr-8" src="/assets/icons/ic_result_detail.svg" alt="result_detail" />
        세부 결과지 보기
      </button>
    </div>
  );
}

export default ResultDetail;
