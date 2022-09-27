import './styles/style.css';

import Layout from 'components/common/Layout';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';
import colors from 'styles/colors';
import GlobalStyle from 'styles/globalStyle';

import App from './App';

const rootEl = document.getElementById('root');
if (!rootEl) throw new Error('Failed to find the root element');

const root = createRoot(rootEl);
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <ThemeProvider theme={colors}>
        <GlobalStyle />
        <Layout>
          <App />
        </Layout>
      </ThemeProvider>
    </RecoilRoot>
  </React.StrictMode>,
);
