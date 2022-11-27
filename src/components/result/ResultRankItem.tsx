import React from 'react';
import rankItem from 'utils/rankItem';

interface ResultRankItemProps {
  rank: number;
  index: number;
}

function ResultRankItem(props: ResultRankItemProps) {
  const { rank, index } = props;

  const isFirstRank = rank === 1;

  return (
    <div className={`flex-col ${isFirstRank ? 'mb-[6%]' : ''}`}>
      <img
        className={isFirstRank ? 'w-100 h-100' : 'w-65 h-65'}
        src={rankItem[index - 1].url}
        alt={rankItem[index - 1].title}
      />
      <h5 className={`${isFirstRank ? 'text-title4' : 'text-title5'} text-gray10 text-center`}>
        {rankItem[index - 1].title}
      </h5>
    </div>
  );
}

export default ResultRankItem;
