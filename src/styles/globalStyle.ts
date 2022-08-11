import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  #root,
  html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    font-size: 62.5%;
  }

  * {
    box-sizing: border-box;
  }

  button:hover {
    cursor: pointer;
  }
`;

export default GlobalStyle;
