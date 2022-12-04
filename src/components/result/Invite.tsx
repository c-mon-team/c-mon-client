import { message } from 'antd';
import React, { useEffect } from 'react';

declare global {
  interface Window {
    Kakao: any;
  }
}

function Invite() {
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
              mobileWebUrl: window.location.href,
              webUrl: window.location.href,
            },
          },
        ],
      });
    }
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(
        window.location.origin + '/join' + window.location.search,
      );
      message.success('링크 복사가 완료되었습니다');
    } catch (error) {
      message.error('링크 복사에 실패했습니다');
    }
  };

  return (
    <div className="py-40 px-20">
      <h2 className="text-title2 mb-18">이 모임에 친구 초대하기</h2>
      <div className="flex gap-15">
        <button
          id="kakao-share-btn"
          className="flex-1 flex justify-center items-center text-body2 text-gray10 h-80 bg-gray3 rounded-20"
        >
          <img className="mr-10" src="/assets/icons/ic_kakao.svg" alt="kakao" />
          카카오톡
          <br />
          공유하기
        </button>
        <button
          onClick={copyLink}
          className="flex-1 flex justify-center items-center text-body2 text-gray10 h-80 bg-gray3 rounded-20"
        >
          <img className="mr-10" src="/assets/icons/ic_link.svg" alt="link" />
          공유링크
          <br />
          복사하기
        </button>
      </div>
    </div>
  );
}

export default Invite;
