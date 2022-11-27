import categoryItem from 'data/categoryItem';
import React from 'react';

interface ResultRankItemProps {
  rank: number;
  index: number;
  isCenter: boolean;
  isCommon: boolean;
  questionIndex?: number;
}

function ResultRankItem(props: ResultRankItemProps) {
  const { rank, index, isCenter, isCommon, questionIndex } = props;

  return (
    <div className={`flex flex-col items-center ${isCenter ? 'flex-6' : 'flex-5'}`}>
      {index === 0 ? (
        <img className="w-65 h-65" src="/assets/icons/ic_question.svg" alt="question" />
      ) : (
        <img
          className={isCenter ? 'w-100 h-100' : 'w-65 h-65'}
          src={categoryItem[index - 1].url}
          alt={categoryItem[index - 1].title}
        />
      )}
      <h5 className={`${isCenter ? 'text-title4' : 'text-title5'} text-gray10 text-center mb-20`}>
        {index === 0 && questionIndex
          ? categoryItem[questionIndex - 1].title
          : categoryItem[index - 1].title}
      </h5>
      <div
        className={`w-full text-white text-title1 flex flex-col justify-center items-center ${
          isCenter ? 'h-73 bg-blue7 rounded-t-7' : 'h-56 bg-blue5'
        }`}
      >
        <p>{rank}</p>
        <p className="text-body3 mt-[-6px]">{isCommon ? '공동' : 'ㅤ'}</p>
      </div>
    </div>
  );
}

export default ResultRankItem;
