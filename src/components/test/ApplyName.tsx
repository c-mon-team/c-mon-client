import { user } from '@recoil/GlobalStore';
import Input from 'components/common/Input';
import ToastMessage from 'components/common/ToastMessage';
import TOAST_MESSAGE from 'data/toastMessage';
import useInput from 'hooks/useInput';
import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

interface ApplyNameProps {
  duplicateMember: (name: string) => boolean;
  toggle: () => void;
}

function ApplyName(props: ApplyNameProps) {
  const { duplicateMember, toggle } = props;
  const [currentUser, setCurrentUser] = useRecoilState(user);
  const [isDuplicate, setIsDuplicate] = useState(false);
  const navigate = useNavigate();
  const input = useInput();
  const { value } = input;
  const [search] = useSearchParams();
  const code = search.get('code') || '';

  const handleClick = () => {
    if (duplicateMember(value)) {
      setIsDuplicate(true);
      setTimeout(() => {
        setIsDuplicate(false);
      }, 1500);
      return;
    }
    setCurrentUser({ ...currentUser, name: value });
    navigate(`/test/main?code=${code}`);
  };

  return (
    <Styled.Root>
      <div className="flex flex-col relative items-center w-290 h-269 bg-white rounded-[25px] px-30">
        <button onClick={toggle}>
          <img className="absolute right-10 top-10" src="assets/icons/ic_close.svg" alt="delete" />
        </button>
        <h4 className="text-title3 text-center text-gray10 mt-50">
          <span className="text-blue">이름</span>을 입력해 주세요
        </h4>
        <p className="text-gray7 text-body2 mt-4 mb-19">* 최대 6자</p>
        <Input {...input} maxlength={6} placeholder="ex) 김커몬" isError={isDuplicate} />
        <button
          onClick={handleClick}
          className={`w-82 h-50 mt-20 text-center text-title4 text-white bg-blue rounded-15 ${
            value.length === 0 && 'opacity-[.22]'
          }`}
        >
          완료
        </button>
        {isDuplicate && <ToastMessage message={TOAST_MESSAGE.DUPLICATE_MEMBER} />}
      </div>
    </Styled.Root>
  );
}

export default ApplyName;

const Styled = {
  Root: styled.main`
    display: flex;
    position: absolute;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 1;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    background-color: rgba(102, 102, 102, 0.6); ;
  `,
};
