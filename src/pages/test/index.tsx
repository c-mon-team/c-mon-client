import ApplyName from 'components/test/ApplyName';
import MemberSection from 'components/test/MemberSection';
import TestHeader from 'components/test/TestHeader';
import { getGroup } from 'libs/result';
import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { Group } from 'types/index';

const TEST_MEMBER = ['전희선', '써니', '아놔', '크킄', '재밌다', '사실', '안재밌음옹뇽'];
function Test() {
  const navigate = useNavigate();
  const [search] = useSearchParams();
  const code = search.get('code') || '';
  const [groupInfo, setGroupInfo] = useState<Group>();
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const getData = async () => {
    const group = await getGroup(code);
    group && setGroupInfo(group);
  };

  const duplicateMember = (name: string) => {
    //*여기 바꿔야됨
    // const members = groupInfo && Array.from(groupInfo?.members, (member) => member.name);

    if (TEST_MEMBER.includes(name)) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    code && getData();
    console.log(groupInfo);
  }, [code]);

  return (
    <>
      {isOpen && <ApplyName duplicateMember={duplicateMember} toggle={toggle} />}
      <Styled.Root>
        <TestHeader />
        <h1 className="text-title2 text-blue text-center mb-43">{groupInfo?.groupName}</h1>
        <MemberSection groupInfo={groupInfo} />
        <button
          onClick={toggle}
          className="w-full h-56 text-white text-center text-title4 bg-gray10 rounded-18"
        >
          테스트 시작하기
        </button>
        <button
          onClick={() => navigate(`/result?code=${code}`)}
          className="text-body1 text-gray6 text-center mt-23 mb-18"
        >
          결과 엿보기
        </button>
      </Styled.Root>
    </>
  );
}

export default Test;

const Styled = {
  Root: styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    padding: 0 25px;
  `,
};
