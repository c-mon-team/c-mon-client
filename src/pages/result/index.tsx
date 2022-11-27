import Header from 'components/result/Header';
import Invite from 'components/result/Invite';
import OtherLinks from 'components/result/OtherLinks';
import Reload from 'components/result/Reload';
import ResultDetail from 'components/result/ResultDetail';
import ResultGraph from 'components/result/ResultGraph';
import ResultRank from 'components/result/ResultRank';
import React from 'react';
import styled from 'styled-components';

function Result() {
  const groupName = '아우쓱 6기';
  const resultDesc = '떠나요, 다함께~ 제주도 푸른 밤!\n다음 약속은 여행이야';
  const resultList = [
    {
      id: 1,
      name: '여행',
      memberList: ['배지안', '석상언', '김수민', '조정한', '권소희권소희'],
    },
    {
      id: 2,
      name: '영화드라마',
      memberList: ['배지안', '석상언', '김수민'],
    },
    {
      id: 3,
      name: '반려동물',
      memberList: ['배지안', '석상언'],
    },
    {
      id: 4,
      name: '스포츠',
      memberList: ['조정한'],
    },
  ]
    .sort((a, b) => b.memberList.length - a.memberList.length)
    .slice(0, 3);
  const memberCount = 4;

  return (
    <StyledRoot>
      <Header />
      <ResultRank groupName={groupName} resultDesc={resultDesc} resultList={resultList} />
      <ResultGraph resultList={resultList} memberCount={memberCount} />
      <ResultDetail />
      <Invite />
      <Reload />
      <OtherLinks />
    </StyledRoot>
  );
}

const StyledRoot = styled.section`
  padding-bottom: 6.3rem;
`;

export default Result;
