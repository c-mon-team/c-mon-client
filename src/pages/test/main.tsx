import BackAlert from 'components/test/main/BackAlert';
import CategorySelectBox from 'components/test/main/CategorySelectBox';
import { useState } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

function TestMain() {
  const { state } = useLocation() as { state: string[] };
  const [selectList, setSelectList] = useState<string[]>(state);
  const [isClose, setIsClose] = useState(false);
  const navigate = useNavigate();
  const toggle = () => setIsClose(!isClose);
  const [search] = useSearchParams();
  const code = search.get('code') || '';

  const handleSelect = (value: string) => {
    if (selectList.length >= 5) {
      return false;
    }
    if (selectList.includes(value)) {
      setSelectList(selectList.filter((category) => value !== category));
      return true;
    }
    setSelectList([...selectList, value]);
    return true;
  };

  const handleClick = () => {
    navigate(`/test/sub?code=${code}`, { state: selectList });
  };

  return (
    <>
      {isClose && <BackAlert toggle={toggle} />}
      <Styled.Root>
        <div className="mb-50">
          <button onClick={toggle}>
            <img src="assets/icons/ic_close.svg" alt="close" className="absolute mt-20" />
          </button>
          <h4 className="text-center text-subtitle2 whitespace-pre mt-50">
            {'관심있는\n카테고리를 선택해주세요'}
          </h4>
          <p className="text-body2 text-gray10 text-center mt-23">최대 5개 선택할 수 있어요</p>
        </div>
        <CategorySelectBox handleSelect={handleSelect} selectList={selectList} />
        <button
          onClick={handleClick}
          className={`w-full h-56 text-center text-title4 text-white bg-blue rounded-18 mb-40 ${
            selectList.length === 0 && 'opacity-[.22]'
          }`}
        >
          다음
        </button>
      </Styled.Root>
    </>
  );
}

export default TestMain;

const Styled = {
  Root: styled.main`
    display: flex;
    height: 100vh;
    flex-direction: column;
    padding: 0 25px;
  `,
};
