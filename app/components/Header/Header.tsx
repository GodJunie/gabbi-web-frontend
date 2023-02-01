import React, { ReactElement, useContext, useMemo, useState } from 'react';
import * as Styled from './Header.style';

import { useNavigate } from 'react-router-dom';
import { WindowContext } from 'context/WindowContext';
import { Colors } from 'common';

function Header(): ReactElement {
  const { isMobile, scrollPosition, width, windowSize } = useContext(WindowContext);
  const isTop = useMemo<boolean>(() => scrollPosition < 20, [scrollPosition]);

  const [sideMenuOn, setSideMenuOn] = useState(false);

  const [popup, setPopup] = useState<'signin' | 'signup' | 'email-verify' | 'username' | null>(null);

  const [userData, setUserData] = useState<UserDto | null>(null);
  let navigate = useNavigate();

  return (
    <>
      <Styled.Header height={isMobile ? 60 : 95} backgroundColor={isTop ? 'transparent' : Colors.neutralWhite}>
        <Styled.HeaderViewport width={width} isMobile={isMobile}></Styled.HeaderViewport>
      </Styled.Header>

      {sideMenuOn && isMobile && (
        <Styled.MainSideMenuContainer>
          <Styled.MainSideMenu></Styled.MainSideMenu>
        </Styled.MainSideMenuContainer>
      )}
    </>
  );
}

export default Header;
