import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import colors from 'styles/colors';

function Home() {
  const navigate = useNavigate();
  return (
    <Styled.Root>
      <img className="w-107 h-56 mt-[8vh]" src="assets/images/c-mon_logo_letter.png" alt="logo" />
      <h1 className="whitespace-pre text-title2 text-center text-gray10 mt-20">
        {'우리 모임 사람들은\n어떤 '}
        <span className="text-blue">관심사</span>
        {'를 가지고 있을까?'}
      </h1>
      <Styled.Gradient>
        <img className="h-[50vh]" src="assets/images/img_home.png" alt="home_img" />
        <div className="relative">
          <img
            className="absolute bottom-110 left-1/2 -translate-x-1/2"
            src="assets/icons/ic_balloon.svg"
            alt="balloon"
          />
          <button
            onClick={() => navigate('/apply')}
            className="bg-gray10 rounded-18 text-center text-white text-title4 h-56 w-[325px] mt-55 mb-30"
          >
            시작하기
          </button>
        </div>
      </Styled.Gradient>
    </Styled.Root>
  );
}

export default Home;

const Styled = {
  Root: styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    background-color: ${colors.blue2};
  `,
  Gradient: styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    background: linear-gradient(0deg, rgba(255, 231, 81, 0.11) 17.1%, rgba(249, 249, 249, 0) 100%);
  `,
};
