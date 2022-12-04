import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function BackAlert({ toggle }: { toggle: () => void }) {
  const navigate = useNavigate();
  return (
    <Styled.Root>
      <div className="flex flex-col justify-center items-center w-290 h-186 bg-white rounded-[25px]">
        <p className="whitespace-pre text-body1 text-center text-gray10">
          {'페이지를 나가면\n내용이 저장되지 않아요.'}
        </p>
        <div className="flex justify-center w-full mt-23">
          <button
            onClick={() => navigate(-1)}
            className="w-120 h-50 text-center text-body1 text-gray9 bg-gray4 rounded-18 mr-10"
          >
            나가기
          </button>
          <button
            onClick={toggle}
            className="w-120 h-50 text-center text-body1 text-white bg-blue rounded-18"
          >
            계속하기
          </button>
        </div>
      </div>
    </Styled.Root>
  );
}

export default BackAlert;

const Styled = {
  Root: styled.main`
    display: flex;
    position: absolute;
    z-index: 1;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: rgba(102, 102, 102, 0.6); ;
  `,
};
