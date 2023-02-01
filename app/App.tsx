import React, { ReactElement } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import * as Components from 'components';
import { createGlobalStyle } from 'styled-components';
import './App.css';

import { WindowProvider } from 'context/WindowContext';
import IBMRegular from 'fonts/IBM_Plex_Sans_KR/IBMPlexSansKR-Regular.ttf';
import IBMSemiBold from 'fonts/IBM_Plex_Sans_KR/IBMPlexSansKR-SemiBold.ttf';
import Swagger from 'fonts/SDSwagger/SDSwagger.otf';
import { UserContext, UserProvider } from 'context/UserContext';

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: Swagger;
  font-display: fallback;
  src:url(${Swagger}) format('opentype'); 
}

@font-face {
  font-family: IBMPlexSansKR;
  src:url(${IBMRegular}) format('truetype'); 
  font-weight: normal;
}

@font-face {
  font-family: IBMPlexSansKR;
  src:url(${IBMSemiBold}) format('truetype'); 
  font-weight: 600;
}

body {
    font-family: Swagger, IBMPlexSansKR;
  }
`;

export default function App(): ReactElement {
  return (
    <>
      <GlobalStyle />
      <WindowProvider>
        <UserProvider>
          <BrowserRouter>
            <Routes>
              <Route element={<Components.Main />} path="/" />
            </Routes>
          </BrowserRouter>
        </UserProvider>
      </WindowProvider>
    </>
  );
}
