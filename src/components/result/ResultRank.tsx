import React from 'react';
import { Result } from 'types/index';

import ResultRankItem from './ResultRankItem';

interface ResultRankProps {
  groupName: string;
  resultDesc: string;
  resultList: Result[];
}

function ResultRank(props: ResultRankProps) {
  const { groupName, resultDesc, resultList } = props;

  return (
    <div className="relative w-full h-0 pb-[144%]">
      <div className="absolute top-0 left-0 w-full h-full bg-result bg-no-repeat bg-cover">
        <h1 className="pt-40 pl-23 text-title1">
          <span className="text-blue">{groupName}</span>의<br />
          공통 관심사는?
        </h1>
        <h4 className="text-title4 text-center text-gray10 whitespace-pre pt-45">{resultDesc}</h4>
      </div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="flex justify-center items-end w-full h-full gap-[12.8%] pb-[19.6%]">
          <ResultRankItem rank={2} index={resultList[1].id} />
          <ResultRankItem rank={1} index={resultList[0].id} />
          <ResultRankItem rank={3} index={resultList[2].id} />
        </div>
      </div>
    </div>
  );
}

export default ResultRank;
