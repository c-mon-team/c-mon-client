function ApplyHeader() {
  const HEADER_STRING = '내 관심사 체크하고,\n우리 모임 공통 관심사도 알아 봐요!';

  return (
    <header className="flex flex-col justify-center items-center pt-70">
      <img src="/assets/images/c-mon_logo_no_letter.svg" alt="c'mon logo" />
      <h4 className="text-body1 text-center text-gray10 whitespace-pre mt-20">{HEADER_STRING}</h4>
    </header>
  );
}

export default ApplyHeader;
