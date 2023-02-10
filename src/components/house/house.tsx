import * as Common from "common/commonStyle";
import * as Typo from "common/typography";
import React, { ReactElement, useContext, useEffect, useState } from "react";
import * as Styled from "./house.style";

import { Colors } from "common";
import { useNavigate } from "react-router-dom";
import { WindowContext } from "context/windowContext";
import { CustomizeTabIcons, Icons } from "common/images";
import Header from "components/header";
import Character from "components/character";
import { UserContext } from "context/userContext";
import { db, storage } from "services/firebase";
import { getBlob, ref as storageRef } from "firebase/storage";
import { set, ref as databaseRef, update, get } from "firebase/database";
import Loading from "components/loading";

import HouseImag from "img/house/house.png";
import HouseExterior from "img/house/house_exterior.png";
import HouseInterior from "img/house/house_interior.png";

function House(): ReactElement {
  return (
    <>
      <Header />
      <Styled.Container>
        <Styled.Viewport>
          <Common.SizedBoxH height={50} />

          <Styled.HouseContainer>
            <Styled.HouseImage src={HouseImag} />
            <Styled.HouseExterior src={HouseExterior} />
            <Styled.HouseInterior src={HouseInterior} />
          </Styled.HouseContainer>
        </Styled.Viewport>
      </Styled.Container>
    </>
  );
}

export default House;
