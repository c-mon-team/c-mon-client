import { user } from '@recoil/GlobalStore';
import ApplyHeader from 'components/common/ApplyHeader';
import Input from 'components/common/Input';
import useInput from 'hooks/useInput';
import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

function ApplyName() {
  const [currentUser, setCurrentUser] = useRecoilState(user);
  const navigate = useNavigate();
  const input = useInput();
  const { value } = input;
  const [isApply, setIsApply] = useState(false);
  const [search] = useSearchParams();
  const code = search.get('code') || '';

  const handleClick = () => {
    setCurrentUser({ ...currentUser, name: value });
    setIsApply(true);
    setTimeout(() => {
      navigate(`/test/link?code=${code}`);
    }, 2000);
  };

  return (
    <Styled.Root>
      {isApply ? (
        <div className="flex flex-col justify-center items-center flex-1">
          <img src="assets/icons/ic_check_circle.svg" alt="check" />
          <span className="text-title3 text-gray10 mt-10">모임이 만들어졌어요!</span>
        </div>
      ) : (
        <>
          <ApplyHeader />
          <section className="flex flex-col flex-1 justify-center items-center px-22">
            <h3 className="text-title3 mb-10">
              <span className="text-blue">이름</span>을 입력해주세요
            </h3>
            <p className="mb-20 text-body2 text-gray7">* 최대 6자</p>
            <Input {...input} maxlength={6} />
          </section>
          <div className="flex">
            <button
              onClick={() => navigate(-1)}
              className="flex-1 h-56 text-center text-title4 text-gray9 bg-gray4 rounded-18 mb-40 mr-15"
            >
              이전
            </button>
            <button
              onClick={handleClick}
              className={`flex-1 h-56 text-center text-title4 text-white bg-blue rounded-18 mb-40 ${
                value.length === 0 && 'opacity-[.22]'
              }`}
              disabled={value.length === 0}
            >
              다음
            </button>
          </div>
        </>
      )}
    </Styled.Root>
  );
}

export default ApplyName;

const Styled = {
  Root: styled.main`
    display: flex;
    flex-direction: column;
    height: 100vh;
    padding: 0 25px;
  `,
};
