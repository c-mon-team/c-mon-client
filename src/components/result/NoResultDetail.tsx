import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

function NoResultDetail() {
  const navigate = useNavigate();
  const [search] = useSearchParams();
  const code = search.get('code') || '';

  return (
    <>
      <div className="py-40 px-42">
        <h2 className="text-title2 text-center mb-20">도대체 뭘 선택한거야?</h2>
        <button
          onClick={() => navigate(`/result/detail${code ? `?code=${code}` : ''}`)}
          className="w-[100%] h-56 bg-blue text-title4 text-white rounded-20 flex justify-center items-center"
        >
          <img className="mr-8" src="/assets/icons/ic_result_detail.svg" alt="result_detail" />
          세부 결과지 보기
        </button>
      </div>
      <div className="w-full h-10 bg-gray1" />
    </>
  );
}

export default NoResultDetail;
