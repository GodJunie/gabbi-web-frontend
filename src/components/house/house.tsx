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

import Books from "img/house/books.png";
import Desk from "img/house/desk.png";
import Flowerpot from "img/house/flowerpot.png";
import Flowerpot2 from "img/house/flowerpot_2.png";
import Frame from "img/house/frame.png";
import Lamp from "img/house/lamp.png";
import Shelf from "img/house/shelf.png";
import Sofa from "img/house/sofa.png";
import Table from "img/house/table.png";

const furnitures: Array<{ image: "*.png"; count: number }> = [
  {
    image: Books,
    count: 10,
  },
  {
    image: Desk,
    count: 10,
  },
  {
    image: Flowerpot,
    count: 10,
  },
  {
    image: Flowerpot2,
    count: 10,
  },
  {
    image: Frame,
    count: 10,
  },
  {
    image: Lamp,
    count: 10,
  },
  {
    image: Shelf,
    count: 10,
  },
  {
    image: Sofa,
    count: 10,
  },
  {
    image: Table,
    count: 10,
  },
];

function House(): ReactElement {
  const { isMobile, scrollPosition, width, windowSize } =
    useContext(WindowContext);

  let navigate = useNavigate();

  const { user, userData, loading, setUser } = useContext(UserContext);

  const [loadingData, setLoadingData] = useState(true);
  const [houseData, setHouseData] = useState<HouseDto>();

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const id = urlParams.get("id");
    console.log(id);

    (async () => {
      const dbRef = databaseRef(db, `houses/${id}`);
      const snapshot = await get(dbRef);
      setHouseData(snapshot.val());
      setLoadingData(false);
    })();
  }, []);

  return (
    <>
      {loadingData ? (
        <Loading />
      ) : (
        <>
          <Header />
          <Styled.Container>
            <Styled.Viewport>
              <Common.SizedBoxH height={20} />

              <Typo.PlasterRegular fontSize={42} color={Colors.neutralBlack}>
                {houseData?.name}
              </Typo.PlasterRegular>

              <Common.SizedBoxH height={30} />

              <Common.FlexRow alignItems="flex-start" justifyContent="center">
                <Styled.HouseContainer>
                  <Styled.HouseImage src={HouseImag} />
                  <Styled.HouseExterior src={HouseExterior} />
                  <Styled.HouseInterior src={HouseInterior} />
                </Styled.HouseContainer>

                <Common.SizedBoxW width={50} />

                <Styled.InfoContainer>
                  <Styled.InfoViewport>
                    <Styled.FurnitureContainer>
                      {furnitures.map((e) => (
                        <Styled.FurnitureSlot key={e.image}>
                          <Styled.FurnitureIcon src={e.image} height={60} />
                          <Common.Span />
                          <Typo.UbuntuRegular
                            fontSize={14}
                            color={Colors.neutralBlack}
                          >
                            0/{e.count}
                          </Typo.UbuntuRegular>
                        </Styled.FurnitureSlot>
                      ))}
                    </Styled.FurnitureContainer>
                  </Styled.InfoViewport>
                </Styled.InfoContainer>
              </Common.FlexRow>

              <Common.SizedBoxH height={50} />

              <Typo.PlasterRegular fontSize={42} color={Colors.neutralBlack}>
                Members
              </Typo.PlasterRegular>

              <Common.SizedBoxH height={30} />

              <Styled.MembersContainer>
                {houseData?.members?.map((e) => (
                  <MemberCard walletAddress={e} key={e} />
                ))}
              </Styled.MembersContainer>
            </Styled.Viewport>
          </Styled.Container>
        </>
      )}
    </>
  );
}

function MemberCard(props: { walletAddress: string }) {
  const { walletAddress } = props;
  const [userData, setUserData] = useState<UserDto>();

  useEffect(() => {
    (async () => {
      const dbRef = databaseRef(db, `users/${walletAddress}`);
      const snapshot = await get(dbRef);
      setUserData(snapshot.val());
    })();
  });

  return (
    <Styled.CharacterContainer>
      <Styled.CharacterViewport>
        {userData && <Character data={userData.character} size={200} />}
      </Styled.CharacterViewport>
    </Styled.CharacterContainer>
  );
}

export default House;
