import React, { useEffect } from 'react';
import styled from 'styled-components';

interface RetryToggleProps {
  onClose: () => void;
  onConfirm: () => void;
}

function RetryToggle(props: RetryToggleProps) {
  const { onClose, onConfirm } = props;

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

  return (
    <StyledRoot>
      <div className="bg-white w-290 h-186 flex flex-col justify-center items-center rounded-20">
        <p className="text-body1 text-gray10 mb-23 text-center">
          정말 다시하시겠어요?
          <br />내 테스트 결과가 사라져요!
        </p>
        <div className="flex gap-10 w-full px-20">
          <button
            onClick={onClose}
            className="flex-1 py-14 px-26 h-50 bg-gray4 rounded-13 text-body1 text-gray9"
          >
            아니요
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 py-14 px-26 h-50 bg-blue rounded-13 text-body1 text-white"
          >
            다시하기
          </button>
        </div>
      </div>
    </StyledRoot>
  );
}

const StyledRoot = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.nd(0.5)};
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 10;
  & > div {
    animation: popup 1s;
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

export default RetryToggle;
