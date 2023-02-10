import React, { ReactElement, useContext, useEffect, useState } from "react";
import * as Styled from "./main.style";
import * as Common from "common/commonStyle";

import Header from "components/header";
import { WindowContext } from "context/windowContext";
import { MainImages } from "common/images";
import { useNavigate } from "react-router-dom";
import { web3auth } from "services/web3auth";
import { VerifyUser } from "api/general-api";
import Web3 from "web3";
import * as Web3Core from "web3-core";
import { magic } from "services/magic";
import { UserContext } from "context/userContext";
import Loading from "components/loading";

function Main(): ReactElement {
  const { isMobile, scrollPosition, width, windowSize } =
    useContext(WindowContext);

  const { user, setUser, loading, userData } = useContext(UserContext);

  let navigate = useNavigate();

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <Styled.Container>
            <Styled.Viewport
              width={windowSize.width}
              height={
                isMobile ? (windowSize.width * 9) / 16 + 60 : windowSize.height
              }
            >
              <Styled.MainBackground src={MainImages.Background} />
              <Styled.MainCompass src={MainImages.Compass} />
              <Styled.MainIsland
                onClick={() => {
                  navigate("/house");
                }}
              >
                <Common.SizedImage src={MainImages.Island} width={300} />
              </Styled.MainIsland>
              <Styled.MainIsland2>
                <Common.SizedImage src={MainImages.Island2} width={170} />
              </Styled.MainIsland2>
            </Styled.Viewport>
          </Styled.Container>
        </>
      )}
    </>
  );
}

export default Main;
