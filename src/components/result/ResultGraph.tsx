import categoryItem from 'data/categoryItem';
import React, { useState } from 'react';
import { Result } from 'types/index';

import ResultGraphItem from './ResultGraphItem';

interface ResultGraphProps {
  resultList: Result[];
  memberCount: number;
}

function ResultGraph(props: ResultGraphProps) {
  const { resultList, memberCount } = props;

  const [checked, setChecked] = useState(resultList[0].id);

  const onClickGraph = (id: number) => {
    setChecked(id);
  };

  return (
    <div className="p-20">
      <h1 className="text-title1 mt-20">얼마나 관심 있을까?</h1>
      <p className="text-body2 text-gray9 mt-8">
        그래프를 선택하면 해당 카테고리에
        <br />
        관심있는 사람을 알 수 있어요!
      </p>
      <div className="flex justify-center gap-30 mt-40">
        {resultList.map((result) => (
          <ResultGraphItem
            key={result.id}
            id={result.id}
            title={categoryItem[result.id - 1].title}
            percent={Math.round((result.memberList.length / memberCount) * 100)}
            isChecked={result.id === checked}
            onClickGraph={onClickGraph}
          />
        ))}
      </div>
      <div className="w-20 h-1 bg-gray5 mt-38 mb-5 mx-auto" />
      <h4 className="text-body1 text-gray10 text-center">
        <span className="text-title4 text-blue">{categoryItem[checked - 1].title}</span>에 관심있는
        사람
      </h4>
      <div className="flex flex-wrap mt-30 gap-10">
        {resultList
          .filter((result) => result.id === checked)[0]
          .memberList.map((member) => (
            <p
              className="w-75 h-45 text-body2 text-gray10 px-19 flex justify-center items-center"
              key={member}
            >
              {member}
            </p>
          ))}
      </div>
      <button className="rounded-6 bg-gray4 p-10 px-14 my-40 mx-auto text-body2 text-gray9 flex gap-8 justify-center items-end">
        <img src="assets/icons/ic_download.svg" alt="download" />
        이미지로 저장하기
      </button>
    </div>
  );
}

export default ResultGraph;
