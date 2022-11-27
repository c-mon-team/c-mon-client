import React from 'react';
import styled from 'styled-components';

interface ResultGraphItemProps {
  title: string;
  id: number;
  percent: number;
  isChecked: boolean;
  onClickGraph: (id: number) => void;
}
interface StyledProps {
  height: number;
}

function ResultGraphItem(props: ResultGraphItemProps) {
  const { title, id, percent, isChecked, onClickGraph } = props;

  const height = Math.round(140 * (percent / 100));

  return (
    <StyledRoot height={height || 2} onClick={() => percent > 0 && onClickGraph(id)}>
      {percent > 0 && (
        <p
          className={`${
            isChecked ? 'text-title5 text-blue' : 'text-body2 text-gray10'
          } text-center`}
        >
          {percent}%
        </p>
      )}
      <div
        className={`${
          isChecked ? 'bg-blue' : 'bg-gray5'
        } graph w-44 rounded-6 flex justify-center items-center`}
      >
        {isChecked && <img src="/assets/icons/ic_check.svg" alt="check" />}
      </div>
      <p className={`${isChecked ? 'text-title5' : 'text-body2'} mt-15 text-gray10`}>{title}</p>
    </StyledRoot>
  );
}

const StyledRoot = styled.div<StyledProps>`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  .graph {
    height: ${({ height }) => height + 'px'};
  }
  &:hover {
    cursor: pointer;
  }
`;

export default ResultGraphItem;
