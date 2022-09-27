import React, { ReactNode } from 'react';
import styled from 'styled-components';
import colors from 'styles/colors';

interface ILayout {
  children: ReactNode;
}

function Layout(props: ILayout) {
  const { children } = props;

  return (
    <StyledLayout>
      <div>{children}</div>
    </StyledLayout>
  );
}

const StyledLayout = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${colors.gray5};
  & > div {
    width: 100%;
    height: 100%;
    max-width: 48rem;
    margin: 0 auto;
    background-color: white;
  }
`;

export default Layout;
