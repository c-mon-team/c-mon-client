import Filter from 'components/result/Filter';
import Header from 'components/result/Header';
import Invite from 'components/result/Invite';
import NoResultDetail from 'components/result/NoResultDetail';
import OtherLinks from 'components/result/OtherLinks';
import Reload from 'components/result/Reload';
import ResultDetail from 'components/result/ResultDetail';
import ResultGraph from 'components/result/ResultGraph';
import ResultRank from 'components/result/ResultRank';
import memberListDummy from 'data/memberListDummy';
import resultDesc from 'data/resultDesc';
import resultDummy from 'data/resultDummy';
import { getGroup, getResult } from 'libs/result';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import { groupMemberList as groupMemberListStore } from '../../recoil/GlobalStore';

function Result() {
  const [search] = useSearchParams();
  const code = search.get('code') || '';

  const setGroupMemberList = useSetRecoilState(groupMemberListStore);

  const [group, setGroup] = useState({
    id: 1,
    name: 'TEST',
    memberCount: 3,
    memberList: memberListDummy,
  });
  const [resultList, setResultList] = useState(
    resultDummy.sort((a, b) => b.memberList.length - a.memberList.length).slice(0, 3),
  );
  const [resultDescText, setResultDescText] = useState(
    '떠나요, 다함께~ 제주도 푸른 밤!\n다음 약속은 여행이야',
  );
  const [filteredMemberList, setFilteredMemberList] = useState(group.memberList);
  const [filterToggle, setFilterToggle] = useState(false);
  const [isNoResult, setIsNoResult] = useState(false);

  const getData = async () => {
    const group = await getGroup(code);
    const result = await getResult(code, [0]);

    const filteredResult = result
      ? result.map((item) => {
          const memberListSet = new Set(item.memberList);
          return { ...item, memberList: [...memberListSet] };
        })
      : [];
    const sortedResult = filteredResult
      .sort((a, b) => b.memberList.length - a.memberList.length)
      .slice(0, 3);

    group &&
      setGroup({
        id: group.groupId,
        name: group.groupName,
        memberList: group.members,
        memberCount: group.members.length,
      });
    group && setGroupMemberList(group.members);
    group && setFilteredMemberList(group.members);
    sortedResult &&
      setResultList(
        sortedResult.sort((a, b) => b.memberList.length - a.memberList.length).slice(0, 3),
      );
  };

  useEffect(() => {
    code && getData();
  }, [code]);

  useEffect(() => {
    const isNoResult = resultList[0].memberList.length === 1 && group.memberCount > 1;
    setIsNoResult(isNoResult);
    setResultDescText(isNoResult ? resultDesc[12].desc : resultDesc[resultList[0].id - 1].desc);
  }, [resultList, group.memberCount]);

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
  };

  const resultIndex = resultList.map((result) => result.id);
  const questionIndex = Array.from({ length: 12 }, (_, i) => i + 1).filter(
    (index) => !resultIndex.includes(index),
  );

  return (
    <section>
      <Header
        filteredMemberCount={filteredMemberList.length}
        memberCount={group.memberCount}
        handleFilterToggle={handleFilterToggle}
      />
      <ResultRank
        groupName={group.name}
        resultDesc={resultDescText}
        resultList={resultList}
        questionIndex={questionIndex}
        isNoResult={isNoResult}
      />
      {isNoResult ? (
        <NoResultDetail />
      ) : (
        <>
          <ResultGraph
            resultList={resultList}
            memberCount={group.memberCount}
            questionIndex={questionIndex}
          />
          <ResultDetail handleFilterToggle={handleFilterToggle} />
        </>
      )}
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
    </section>
  );
}

export default Result;
