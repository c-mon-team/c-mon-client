import ApplyHeader from 'components/common/ApplyHeader';
import Input from 'components/common/Input';
import useInput from 'hooks/useInput';
import { postGroup } from 'libs/test';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function Apply() {
  const navigate = useNavigate();
  const input = useInput();
  const {value} = input;

  const applyGroup = async () => {
    const data = await postGroup(value);

    navigate(`/test/name?code=${data?.code}`, {state: {groupId: data?.id}});
  }

  return (
    <Styled.Root>
      <ApplyHeader />
      <section className="flex flex-col flex-1 justify-center items-center">
        <h3 className="text-title3 mb-10">
          <span className="text-blue">모임명</span>을 입력해주세요
        </h3>
        <p className="mb-20 text-body2 text-gray7">* 최대 8자</p>
        <Input {...input} maxlength={8} />
      </section>
      <button onClick={applyGroup} className={`w-full h-56 text-center text-title4 text-white bg-blue rounded-18 mb-40 ${value.length === 0 && 'opacity-[.22]'}`}>
        다음
      </button>
    </Styled.Root>
  );
}

export default Apply;

const Styled = {
  Root: styled.main`
    display: flex;
    flex-direction: column;
    height: 100vh;
    padding: 0 25px;
  `,
};
