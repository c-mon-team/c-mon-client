import React from 'react';
import { Result } from 'types/index';

import ResultRankItem from './ResultRankItem';

interface ResultRankProps {
  groupName: string;
  resultDesc: string;
  resultList: Result[];
  questionIndex: number[];
  isNoResult: boolean;
}

function ResultRank(props: ResultRankProps) {
  const { groupName, resultDesc, resultList, questionIndex, isNoResult } = props;

  const size = resultList.map((result) => result.memberList.length);

  return (
    <div className={`relative w-full h-0 ${isNoResult ? 'pb-[122%]' : 'pb-[144%]'}`}>
      <div
        className={`absolute top-0 left-0 w-full h-full bg-no-repeat bg-cover ${
          isNoResult ? 'bg-noResult' : 'bg-result'
        }`}
      >
        <h1 className="pt-40 pl-23 text-title1">
          <span className="text-blue">{groupName}</span>의<br />
          공통 관심사는?
        </h1>
        <h4 className="text-title4 text-center text-gray10 whitespace-pre pt-45">{resultDesc}</h4>
      </div>
      <div className={'absolute top-0 left-0 w-full h-full'}>
        {isNoResult ? (
          <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center pt-170">
            <img className="w-170 h-200" src="assets/images/img_no_common.svg" alt="no_common" />
          </div>
        ) : (
          <div className="flex justify-center items-end w-full h-full">
            {size.length > 2 ? (
              <>
                <ResultRankItem
                  rank={size[1] === size[0] ? 1 : 2}
                  isCenter={false}
                  isCommon={size[1] === size[0] || size[1] === size[2]}
                  index={resultList[1].id}
                />
                <ResultRankItem
                  rank={1}
                  isCenter
                  isCommon={size[0] === size[1]}
                  index={resultList[0].id}
                />
                <ResultRankItem
                  rank={size[2] === size[0] ? 1 : size[2] === size[1] ? 2 : 3}
                  isCenter={false}
                  isCommon={size[2] === size[0] || size[2] === size[1]}
                  index={resultList[2].id}
                />
              </>
            ) : size.length === 2 ? (
              <>
                <ResultRankItem
                  rank={size[1] === size[0] ? 1 : 2}
                  isCenter={false}
                  isCommon={size[1] === size[0]}
                  index={resultList[1].id}
                />
                <ResultRankItem
                  rank={1}
                  isCenter
                  isCommon={size[0] === size[1]}
                  index={resultList[0].id}
                />
                <ResultRankItem
                  rank={3}
                  isCenter={false}
                  isCommon={false}
                  index={0}
                  questionIndex={questionIndex[0]}
                />
              </>
            ) : (
              <>
                <ResultRankItem
                  rank={2}
                  isCenter={false}
                  isCommon={false}
                  index={0}
                  questionIndex={questionIndex[0]}
                />
                <ResultRankItem rank={1} isCenter isCommon={false} index={resultList[0].id} />
                <ResultRankItem
                  rank={2}
                  isCenter={false}
                  isCommon={false}
                  index={0}
                  questionIndex={questionIndex[1]}
                />
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default ResultRank;
