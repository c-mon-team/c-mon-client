import ToastMessage from 'components/common/ToastMessage';
import LINK_INFO from 'data/linkItem';
import TOAST_MESSAGE from 'data/toastMessage';
import useCopyClipBoard from 'hooks/useCopyLink';
import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

declare global {
  interface Window {
    Kakao: any;
  }
}

function TestLink() {
  const { isCopy, setIsCopy, onCopy } = useCopyClipBoard();
  const navigate = useNavigate();
  const [search] = useSearchParams();
  const code = search.get('code') || '';

  useEffect(() => {
    if (window.Kakao) {
      const kakao = window.Kakao;
      initKakao(kakao);
      createKakaoShareBtn();
    }
  }, []);

  const initKakao = (kakao: any) => {
    if (!kakao.isInitialized()) {
      kakao.init(process.env.KAKAO_API_KEY);
    }
  };

  const createKakaoShareBtn = () => {
    if (window.Kakao) {
      window.Kakao.Link.createDefaultButton({
        objectType: 'feed',
        container: '#kakao-share-btn',
        content: {
          title: '커몬 :: 우리 모임 공통 관심사 테스트',
          description: '겹치는 관심사를 알려줘 서로를 더 잘 알아갈 수 있어요!',
          imageUrl: 'https://ifh.cc/g/XG37ZY.png',
          link: {
            mobileWebUrl: 'https://c-mon.xyz',
            webUrl: 'https://c-mon.xyz',
          },
        },
        social: {
          likeCount: 999,
          commentCount: 999,
          sharedCount: 999,
        },
        buttons: [
          {
            title: '웹으로 보기',
            link: {
              mobileWebUrl: `https://c-mon.xyz/test?code=${code}`,
              webUrl: `https://c-mon.xyz/test?code=${code}`,
            },
          },
        ],
      });
    }
  };

  const copyLink = async () =>
    await onCopy(`${window.location.origin}/test${window.location.search}`);

  const handleShare = (type: string) => {
    if (type === 'LINK_COPY') {
      copyLink();
      setTimeout(() => {
        setIsCopy(false);
      }, 1500);
    }
  };

  return (
    <Styled.Root>
      <section className="flex flex-1 flex-col justify-center items-center">
        <h4 className="flex text-body1 text-gray10 whitespace-pre text-center mb-32">
          {'친구들에게 공유하고\n관심사를 체크해보세요'}
        </h4>
        <div className="flex gap-20">
          {Object.keys(LINK_INFO).map((key) => (
            <button
              id={key === 'KAKAO' ? 'kakao-share-btn' : 'link'}
              key={key}
              className="flex flex-col justify-center w-124 h-140 items-center bg-gray3 rounded-20 gap-10"
              onClick={() => handleShare(key)}
            >
              <img src={LINK_INFO[key].src} alt="link" />
              <span className="text-body2 text-gray10 whitespace-pre">{LINK_INFO[key].desc}</span>
            </button>
          ))}
        </div>
        {isCopy && <ToastMessage message={TOAST_MESSAGE.LINK} />}
      </section>
      <button
        onClick={() => navigate(`/test/main?code=${code}`)}
        className="w-full h-56 text-center text-title4 text-white bg-blue rounded-18 mb-40"
      >
        내 관심사 찾기
      </button>
    </Styled.Root>
  );
}

export default TestLink;

const Styled = {
  Root: styled.main`
    display: flex;
    flex-direction: column;
    height: 100vh;
    padding: 0 25px;
  `,
};
