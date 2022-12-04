import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard-dynamic-subset.css');

  #root,
  html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    font-size: 62.5%;
    font-family: 'Pretendard';
  }

  * {
    box-sizing: border-box;
  }

  button:hover {
    cursor: pointer;
  }

  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
  .scrollbar-hide {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
`;

export default GlobalStyle;
