import Filter from 'components/result/Filter';
import Header from 'components/result/Header';
import Invite from 'components/result/Invite';
import OtherLinks from 'components/result/OtherLinks';
import Reload from 'components/result/Reload';
import ResultDetail from 'components/result/ResultDetail';
import ResultGraph from 'components/result/ResultGraph';
import ResultRank from 'components/result/ResultRank';
import resultDummy from 'data/resultDummy';
import { getGroup, getResult } from 'libs/result';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

function Result() {
  const [search] = useSearchParams();
  const code = search.get('code') || '';

  const [group, setGroup] = useState({
    id: 1,
    name: 'TEST',
    memberCount: 3,
    memberList: [
      { id: 1, name: 'USER1' },
      { id: 2, name: 'USER2' },
      { id: 3, name: 'USER3' },
    ],
  });
  const [resultList, setResultList] = useState(
    resultDummy.sort((a, b) => b.memberList.length - a.memberList.length).slice(0, 3),
  );
  const [resultDesc, setResultDesc] = useState(
    '떠나요, 다함께~ 제주도 푸른 밤!\n다음 약속은 여행이야',
  );
  const [filteredMemberList, setFilteredMemberList] = useState(group.memberList);
  const [filterToggle, setFilterToggle] = useState(false);

  const getData = async () => {
    const group = await getGroup(code);
    const result = await getResult(code, [0]);
    const sortedResult =
      result && result.sort((a, b) => b.memberList.length - a.memberList.length).slice(0, 3);

    group &&
      setGroup({
        id: group.groupId,
        name: group.groupName,
        memberList: group.members,
        memberCount: group.members.length,
      });
    group && setFilteredMemberList(group.members);
    sortedResult &&
      setResultList(
        sortedResult.sort((a, b) => b.memberList.length - a.memberList.length).slice(0, 3),
      );
    sortedResult && setResultDesc(resultDesc[sortedResult[0].id - 1]);
  };

  useEffect(() => {
    code && getData();
  }, [code]);

  const handleFilterToggle = () => {
    setFilterToggle(!filterToggle);
  };

  const getFilteredData = async (id: number[]) => {
    const result = await getResult(code, id);
    const sortedResult =
      result && result.sort((a, b) => b.memberList.length - a.memberList.length).slice(0, 3);

    setFilteredMemberList(group.memberList.filter((member) => id.includes(member.id)));
    sortedResult &&
      setResultList(
        sortedResult.sort((a, b) => b.memberList.length - a.memberList.length).slice(0, 3),
      );
    sortedResult && setResultDesc(resultDesc[sortedResult[0].id - 1]);
  };

  const resultIndex = resultList.map((result) => result.id);
  const questionIndex = Array.from({ length: 12 }, (_, i) => i + 1).filter(
    (index) => !resultIndex.includes(index),
  );

  return (
    <StyledRoot>
      <Header
        filteredMemberCount={filteredMemberList.length}
        memberCount={group.memberCount}
        handleFilterToggle={handleFilterToggle}
      />
      <ResultRank
        groupName={group.name}
        resultDesc={resultDesc}
        resultList={resultList}
        questionIndex={questionIndex}
      />
      <ResultGraph
        resultList={resultList}
        memberCount={group.memberCount}
        questionIndex={questionIndex}
      />
      <ResultDetail handleFilterToggle={handleFilterToggle} />
      <Invite />
      <Reload getData={() => code && getData()} />
      <OtherLinks />
      {filterToggle && (
        <Filter
          handleFilterToggle={handleFilterToggle}
          getFilteredData={getFilteredData}
          filteredMemberList={filteredMemberList}
        />
      )}
    </StyledRoot>
  );
}

const StyledRoot = styled.section`
  padding-bottom: 6.3rem;
`;

export default Result;
