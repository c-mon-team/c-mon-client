import ToastMessage from 'components/common/ToastMessage';
import LINK_INFO from 'data/linkItem';
import TOAST_MESSAGE from 'data/toastMessage';
import useCopyClipBoard from 'hooks/useCopyLink';
import { useNavigate, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

function TestLink() {
  const { isCopy, setIsCopy, onCopy } = useCopyClipBoard();
  const navigate = useNavigate();
  const [search] = useSearchParams();
  const code = search.get('code') || '';

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
