import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled, { css } from 'styled-components';

interface FilterProps {
  handleFilterToggle: () => void;
  getFilteredData: (id: number[]) => void;
  filteredMemberList: Array<{ id: number; name: string }>;
}
interface StyledButtonProps {
  isSelected: boolean;
}
interface StyledSubmitButtonProps {
  isSubmitAvailable: boolean;
}

function Filter(props: FilterProps) {
  const { handleFilterToggle, getFilteredData, filteredMemberList } = props;

  const [search] = useSearchParams();
  const code = search.get('code') || '';

  const [selected, setSelected] = useState<number[]>([]);

  useEffect(() => {
    const body = document.querySelector('body');

    if (body) {
      body.style.overflow = 'hidden';
    }
    return () => {
      if (body) {
        body.style.overflow = 'scroll';
      }
    };
  }, []);

  const handleSelected = (id: number) => {
    if (selected.includes(id)) {
      setSelected([...selected].filter((item) => item !== id));
    } else {
      setSelected([...selected, id]);
    }
  };

  const handleAllSelected = () => {
    if (selected.length < filteredMemberList.length) {
      setSelected(filteredMemberList.map((member) => member.id));
    } else {
      setSelected([]);
    }
  };

  const handleSubmit = async () => {
    if (selected.length > 0) {
      handleFilterToggle();
      code && (await getFilteredData(selected));
    }
  };

  return (
    <StyledRoot>
      <div className="w-full h-[70vh] bg-white rounded-t-16 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-title2">끼리끼리 공통 관심사</h2>
            <button onClick={handleFilterToggle}>
              <img src="/assets/icons/ic_close.svg" alt="close" />
            </button>
          </div>
          <p className="text-body2 text-gray9">
            선택된 사람들끼리의
            <br />
            공통 관심사를 알 수 있어요
          </p>
          <div />
          <div className="flex flex-wrap gap-10 mt-40">
            {filteredMemberList.map((member) => (
              <StyledButton
                isSelected={selected.includes(member.id)}
                onClick={() => handleSelected(member.id)}
                key={member.name}
              >
                <p className="text-body2">{member.name}</p>
              </StyledButton>
            ))}
          </div>
          <button
            onClick={handleAllSelected}
            className="w-109 h-40 flex justify-center items-center text-body2 text-gray10 float-right mt-20"
          >
            <img
              className="mr-5"
              src={`/assets/icons/ic_check_${
                selected.length === filteredMemberList.length ? 'on' : 'off'
              }.svg`}
              alt="check"
            />
            한번에 선택
          </button>
        </div>
        <StyledSubmitButton isSubmitAvailable={selected.length > 0} onClick={handleSubmit}>
          <p className="text-title4 text-white">결과보기</p>
        </StyledSubmitButton>
      </div>
    </StyledRoot>
  );
}

const StyledRoot = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background: ${({ theme }) => theme.nd(0.5)};
  width: 100%;
  height: 100%;
  top: 0;
  z-index: 10;
  & > div {
    animation: popup 1s;
    padding: 3rem 2rem;
  }

  @keyframes popup {
    from {
      transform: translateY(10%);
      opacity: 0.3;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

const StyledButton = styled.button<StyledButtonProps>`
  width: 7.5rem;
  height: 4.5rem;
  padding: 0 1.9rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  ${({ isSelected }) =>
    isSelected
      ? css`
          background-color: ${({ theme }) => theme.blue5};
          color: ${({ theme }) => theme.black};
          border: ${({ theme }) => `1px solid ${theme.blue}`};
        `
      : css`
          background-color: ${({ theme }) => theme.gray3};
          color: ${({ theme }) => theme.gray10};
        `}
`;

const StyledSubmitButton = styled.button<StyledSubmitButtonProps>`
  width: 100%;
  height: 5.6rem;
  border-radius: 1.8rem;
  background: ${({ isSubmitAvailable, theme }) => (isSubmitAvailable ? theme.blue : theme.blue5)};
`;

export default Filter;
