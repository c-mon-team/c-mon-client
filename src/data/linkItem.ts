interface linkInfoType {
  [key: string]: {
    [key: string]: string;
  };
}

const LINK_INFO: linkInfoType = {
  KAKAO: {
    desc: '카카오톡\n공유하기',
    src: 'assets/icons/ic_kakao.svg',
  },
  LINK_COPY: {
    desc: '공유링크\n복사하기',
    src: 'assets/icons/ic_link.svg',
  },
};

export default LINK_INFO;
