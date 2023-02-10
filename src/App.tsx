import React, { ReactElement } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import * as Components from "components";

import { WindowProvider } from "context/windowContext";

import { createGlobalStyle } from "styled-components";
import * as Fonts from "common/fonts";
import { UserProvider } from "context/userContext";

import * as Styled from "./App.style";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: Ubuntu;
    font-display: fallback;
    src:url(${Fonts.Ubuntu.Regular}) format('truetype');
  }

  @font-face {
    font-family: IndieFlower;
    font-display: fallback;
    src:url(${Fonts.IndieFlower.Regular}) format('truetype');
  }

  @font-face {
    font-family: Plaster;
    font-display: fallback;
    src:url(${Fonts.Plaster.Regular}) format('truetype');
  }

  @font-face {
    font-family: Vibes;
    font-display: fallback;
    src:url(${Fonts.Vibes.Regular}) format('truetype');
  }
  
  body {
    font-family: Ubuntu, IndieFlower;
  }
`;

export default function App(): ReactElement {
  return (
    <Styled.Container>
      <GlobalStyle />
      <ToastContainer />
      <WindowProvider>
        <UserProvider>
          <BrowserRouter>
            <Routes>
              <Route element={<Components.Main />} path="/" />
              <Route element={<Components.Profile />} path="/profile" />
              <Route element={<Components.Customize />} path="/customize" />
              <Route element={<Components.House />} path="/house" />
              <Route element={<Components.Callback />} path="/callback" />
            </Routes>
          </BrowserRouter>
        </UserProvider>
      </WindowProvider>
    </Styled.Container>
  );
}
