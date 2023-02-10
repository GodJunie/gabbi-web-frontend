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
              <Common.SizedBoxH height={50} />

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
                  {/* <Styled.CharacterContainer>
                    <Styled.CharacterEditButton
                      onClick={() => {
                        navigate("/customize");
                      }}
                    >
                      <Common.SizedImage
                        src={Icons.Edit}
                        width={32}
                        height={32}
                      />
                    </Styled.CharacterEditButton>
                    <Styled.CharacterViewport>
                      <Character data={userData?.character} size={290} />
                    </Styled.CharacterViewport>
                  </Styled.CharacterContainer> */}
                  {/* <Styled.LocationButton
                    onClick={() => {
                      window.open(houseData?.location, "_blank");
                    }}
                  >
                    <Typo.UbuntuRegular
                      fontSize={14}
                      color={Colors.neutralWhite}
                    >
                      Location
                    </Typo.UbuntuRegular>
                    <Common.SizedBoxW width={5} />
                    <Common.SizedImage
                      src={Icons.Send}
                      width={20}
                      height={20}
                    />
                  </Styled.LocationButton> */}

                  {houseData &&
                  houseData.members &&
                  user &&
                  user.publicAddress &&
                  houseData.members.includes(user.publicAddress) ? (
                    <></>
                  ) : (
                    <>
                      <Typo.UbuntuRegular
                        fontSize={20}
                        color={Colors.neutralBlack}
                      >
                        ARE YOU ONE OF US?
                      </Typo.UbuntuRegular>

                      <Common.SizedBoxH height={20} />

                      <Styled.BuyMembershipButton>
                        <Typo.UbuntuRegular
                          fontSize={14}
                          color={Colors.neutralWhite}
                        >
                          Buy Membership
                        </Typo.UbuntuRegular>
                        <Common.SizedBoxW width={5} />
                        <Common.SizedImage
                          src={Icons.Send}
                          width={20}
                          height={20}
                        />
                      </Styled.BuyMembershipButton>
                    </>
                  )}

                  {/* <Typo.VibesRegular fontSize={32} color={Colors.neutralBlack}>
                    10 / 100
                  </Typo.VibesRegular> */}
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
