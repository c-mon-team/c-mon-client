import React from 'react';
import { useNavigate } from 'react-router-dom';

function DetailHeader() {
  const navigate = useNavigate();

  return (
    <div className="pt-50">
      <div className="flex justify-between items-center px-8">
        <button onClick={() => navigate(-1)}>
          <img src="/assets/icons/ic_close.svg" alt="close" />
        </button>
        <h4 className="text-title4">세부 관심사 보기</h4>
        <div className="w-40 h-40" />
      </div>
    </div>
  );
}

export default DetailHeader;
