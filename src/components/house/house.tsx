import * as Common from "common/commonStyle";
import * as Typo from "common/typography";
import React, { ReactElement, useContext, useEffect, useState } from "react";
import * as Styled from "./house.style";
import * as database from "firebase/database";

import { Colors } from "common";
import { Commons, Icons, MainImages } from "common/images";
import Character from "components/character";
import Header from "components/header";
import { FirebaseAuthContext } from "context/firebaeAuthContext";
import { WindowContext } from "context/windowContext";
import { useParams } from "react-router-dom";
import { db } from "services/firebase";

function House(): ReactElement {
  const { isMobile, scrollPosition, width, windowSize } =
    useContext(WindowContext);
  const { user, userData } = useContext(FirebaseAuthContext);

  const { id } = useParams();
  const [houseData, setHouseData] = useState<HouseDto>();

  useEffect(() => {
    if (!id) return;

    (async () => {
      const dbRef = database.ref(db, `houses/${id}`);
      const snapshot = await database.get(dbRef);

      setHouseData(snapshot.val());

      console.log(snapshot.val());
    })();
  }, []);

  return (
    <>
      <Header />
      <Styled.Container>
        <Styled.Viewport width={width}>
          <Common.SizedBoxH height={28} />

          <Common.FlexRow alignItems="center">
            <Typo.UbuntuBold fontSize={32} color={Colors.neutralBlack}>
              {houseData?.name}
            </Typo.UbuntuBold>

            <Common.Span />

            <Styled.CircleButton>
              <Common.SizedImage src={Icons.Share} width={18} height={18} />
            </Styled.CircleButton>

            <Common.SizedBoxW width={14} />

            <Styled.CircleButton>
              <Common.SizedImage src={Icons.Favorite} width={18} height={18} />
            </Styled.CircleButton>
          </Common.FlexRow>

          <Common.SizedBoxH height={29} />

          <Common.FlexRow
            justifyContent="space-between"
            alignItems="stretch"
            height={539}
          >
            {houseData && houseData.photos && houseData.photos.length > 0 && (
              <Common.SizedImage
                src={houseData.photos[0]}
                width={960}
                height={539}
                objectFit="cover"
                overflow="hidden"
              />
            )}

            <Common.FlexColumn
              justifyContent="space-between"
              alignItems="stretch"
            >
              {houseData &&
                houseData.photos &&
                houseData.photos.length > 1 &&
                houseData.photos
                  .slice(1, 5)
                  .map((e, i) => (
                    <Common.SizedImage
                      src={e}
                      width={218}
                      height={122}
                      objectFit="cover"
                      overflow="hidden"
                      key={e}
                    />
                  ))}
            </Common.FlexColumn>
          </Common.FlexRow>

          <Common.SizedBoxH height={28} />

          <Common.FlexRow alignItems="stretch" justifyContent="space-between">
            <Styled.MembersContainer>
              <Common.FlexRow
                alignItems="center"
                justifyContent="space-between"
              >
                <Typo.UbuntuBold fontSize={14} color={Colors.neutralBlack}>
                  # of Gabbis Joined
                </Typo.UbuntuBold>
                <Common.FlexRow alignItems="flex-end">
                  <Typo.UbuntuBold fontSize={32} color={Colors.neutralBlack}>
                    50
                  </Typo.UbuntuBold>
                  <Typo.UbuntuBold fontSize={22} color={Colors.neutralGray300}>
                    /100
                  </Typo.UbuntuBold>
                </Common.FlexRow>
              </Common.FlexRow>

              <div
                style={{
                  height: "76px",
                  padding: "0 84px 0 8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    width: "0px",
                    overflow: "visible",
                    zIndex: 0,
                  }}
                >
                  <Styled.AbartarContainer>
                    <Styled.AbartarInnerContainer>
                      <Character size={50} data={userData?.character} />
                    </Styled.AbartarInnerContainer>
                  </Styled.AbartarContainer>
                </div>
                <div
                  style={{
                    width: "0px",
                    overflow: "visible",
                    zIndex: 1,
                  }}
                >
                  <Styled.AbartarContainer>
                    <Styled.AbartarInnerContainer>
                      <Character size={50} data={userData?.character} />
                    </Styled.AbartarInnerContainer>
                  </Styled.AbartarContainer>
                </div>
                <div
                  style={{
                    width: "0px",
                    overflow: "visible",
                    zIndex: 2,
                  }}
                >
                  <Styled.AbartarContainer>
                    <Styled.AbartarInnerContainer>
                      <Character size={50} data={userData?.character} />
                    </Styled.AbartarInnerContainer>
                  </Styled.AbartarContainer>
                </div>
                <div
                  style={{
                    width: "0px",
                    overflow: "visible",
                    zIndex: 3,
                  }}
                >
                  <Styled.AbartarContainer>
                    <Styled.AbartarInnerContainer>
                      <Character size={50} data={userData?.character} />
                    </Styled.AbartarInnerContainer>
                  </Styled.AbartarContainer>
                </div>
                <div
                  style={{
                    width: "0px",
                    overflow: "visible",
                    zIndex: 4,
                  }}
                >
                  <Styled.AbartarContainer>
                    <Styled.AbartarInnerContainer>
                      <Character size={50} data={userData?.character} />
                    </Styled.AbartarInnerContainer>
                  </Styled.AbartarContainer>
                </div>
              </div>

              <Styled.GaugeContainer>
                <Styled.GaugeViewport>
                  <Styled.GaugeFill value={0.4} />
                </Styled.GaugeViewport>

                <Styled.GaugeHandle value={0.4}>
                  <Common.SizedImage
                    src={Commons.Logo}
                    width={34}
                    height={32}
                  />
                </Styled.GaugeHandle>
              </Styled.GaugeContainer>

              <Typo.UbuntuBold
                fontSize={14}
                color={Colors.neutralBlack}
                textAlign="left"
              >
                Members who join this house will get:
              </Typo.UbuntuBold>

              <Typo.UbuntuBold
                fontSize={14}
                color={Colors.neutralBlack}
                textAlign="left"
              >
                <div style={{ color: Colors.brand }}>
                  1. Official residency of this house 🏠
                </div>
                <ul
                  style={{ paddingInlineStart: "1.5em", fontWeight: "normal" }}
                >
                  <li>House name on your profile</li>
                  <li>Vote to the house programs and interiors</li>
                  <li>Invitation for your friends</li>
                  <li>
                    Access to exclusive house contents such as games, merch in
                    Buidling process
                  </li>
                </ul>
                <div style={{ color: Colors.brand }}>
                  2. Exclusive perks as VIP 💎
                </div>
                <ul
                  style={{ paddingInlineStart: "1.5em", fontWeight: "normal" }}
                >
                  <li>
                    Permanent VIP access to this house : private concierge, boat
                    arrangement, priority reservation
                  </li>
                  <li>Yearly free nights, invites, free perks</li>
                  <li>
                    Invitation to Pre-launch party: will get to see the house
                    before anyone else
                  </li>
                  <li>On-site visits before the launch supported</li>
                </ul>
              </Typo.UbuntuBold>

              <Styled.JoinButton>
                <Typo.UbuntuBold fontSize={14} color={Colors.neutralWhite}>
                  Join the House
                </Typo.UbuntuBold>
              </Styled.JoinButton>
            </Styled.MembersContainer>

            <Common.FlexColumn width={825} alignItems="stretch">
              <Common.SizedBoxH height={8.5} />
              <Common.FlexRow alignItems="center">
                <Styled.HouseMenuButton>
                  <Common.SizedImage src={Icons.House} />
                  <Typo.UbuntuBold fontSize={14} color={Colors.neutralBlack}>
                    Overview
                  </Typo.UbuntuBold>
                </Styled.HouseMenuButton>

                <Common.SizedBoxW width={14} />

                <Styled.HouseMenuButton>
                  <Common.SizedImage src={Icons.Layers} />
                  <Typo.UbuntuBold fontSize={14} color={Colors.neutralBlack}>
                    Floor Plan
                  </Typo.UbuntuBold>
                </Styled.HouseMenuButton>

                <Common.SizedBoxW width={14} />

                <Styled.HouseMenuButton>
                  <Common.SizedImage src={Icons.Pin} />
                  <Typo.UbuntuBold fontSize={14} color={Colors.neutralBlack}>
                    Map
                  </Typo.UbuntuBold>
                </Styled.HouseMenuButton>
              </Common.FlexRow>
              <Common.SizedBoxH height={8.5} />

              <Common.SizedBoxH height={19} />

              <Typo.IndieFlowerRegular
                fontSize={22}
                color={Colors.neutralBlack}
                textAlign="left"
              >
                “A balance of simplicity and comfort. Stunning, intelligent and
                welcoming.”
              </Typo.IndieFlowerRegular>

              <Common.SizedBoxH height={36} />

              <Styled.HouseInfoGrid>
                {/* columns */}
                <Typo.UbuntuBold fontSize={14} color={Colors.neutralBlack}>
                  Location
                </Typo.UbuntuBold>
                <Typo.UbuntuBold fontSize={14} color={Colors.neutralBlack}>
                  Land Size
                </Typo.UbuntuBold>
                <Typo.UbuntuBold fontSize={14} color={Colors.neutralBlack}>
                  Living Size
                </Typo.UbuntuBold>
                <Typo.UbuntuBold fontSize={14} color={Colors.neutralBlack}>
                  Ownership
                </Typo.UbuntuBold>
                <Typo.UbuntuBold fontSize={14} color={Colors.neutralBlack}>
                  Period
                </Typo.UbuntuBold>
                {/* infos */}
                <Typo.UbuntuRegular fontSize={14} color={Colors.neutralBlack}>
                  Lombok, Indonesia
                </Typo.UbuntuRegular>
                <Typo.UbuntuRegular fontSize={14} color={Colors.neutralBlack}>
                  200 sqm
                </Typo.UbuntuRegular>
                <Typo.UbuntuRegular fontSize={14} color={Colors.neutralBlack}>
                  TBA
                </Typo.UbuntuRegular>
                <Typo.UbuntuRegular fontSize={14} color={Colors.neutralBlack}>
                  Leasehold
                </Typo.UbuntuRegular>
                <Typo.UbuntuRegular fontSize={14} color={Colors.neutralBlack}>
                  20 years
                </Typo.UbuntuRegular>
                {/* columns */}
                <Typo.UbuntuBold fontSize={14} color={Colors.neutralBlack}>
                  Beds / Baths
                </Typo.UbuntuBold>
                <Typo.UbuntuBold fontSize={14} color={Colors.neutralBlack}>
                  Level
                </Typo.UbuntuBold>
                <Typo.UbuntuBold
                  fontSize={14}
                  color={Colors.neutralBlack}
                ></Typo.UbuntuBold>
                <Typo.UbuntuBold
                  fontSize={14}
                  color={Colors.neutralBlack}
                ></Typo.UbuntuBold>
                <Typo.UbuntuBold
                  fontSize={14}
                  color={Colors.neutralBlack}
                ></Typo.UbuntuBold>
                {/* infos */}
                <Typo.UbuntuRegular fontSize={14} color={Colors.neutralBlack}>
                  TBA
                </Typo.UbuntuRegular>
                <Typo.UbuntuRegular fontSize={14} color={Colors.neutralBlack}>
                  TBA
                </Typo.UbuntuRegular>
                <Typo.UbuntuRegular
                  fontSize={14}
                  color={Colors.neutralBlack}
                ></Typo.UbuntuRegular>
                <Typo.UbuntuRegular
                  fontSize={14}
                  color={Colors.neutralBlack}
                ></Typo.UbuntuRegular>
                <Typo.UbuntuRegular
                  fontSize={14}
                  color={Colors.neutralBlack}
                ></Typo.UbuntuRegular>
              </Styled.HouseInfoGrid>

              <Common.SizedBoxH height={36} />

              <Typo.UbuntuRegular
                fontSize={14}
                color={Colors.neutralBlack}
                textAlign="left"
              >
                {houseData?.description?.split("\\n").map((e) => (
                  <>
                    {e}
                    <br />
                  </>
                ))}
              </Typo.UbuntuRegular>

              <Common.SizedBoxH height={36} />

              <Typo.IndieFlowerRegular
                fontSize={22}
                color={Colors.neutralBlack}
                textAlign="center"
              >
                {houseData &&
                  houseData.keywords &&
                  houseData.keywords.length > 0 && <>{houseData.keywords[0]}</>}
                {houseData &&
                  houseData.keywords &&
                  houseData.keywords
                    .slice(1)
                    .map((e) => <>&nbsp;&nbsp;|&nbsp;&nbsp;{e}</>)}
              </Typo.IndieFlowerRegular>

              <Common.SizedBoxH height={36} />

              <Common.SizedImage
                src={MainImages.Background}
                width={801}
                height={450}
                objectFit="cover"
                overflow="hidden"
              />

              <Common.SizedBoxH height={36} />

              <Typo.UbuntuBold
                fontSize={22}
                color={Colors.neutralBlack}
                textAlign="left"
              >
                Where You'll Be
              </Typo.UbuntuBold>

              <Common.SizedBoxH height={28} />

              <Common.SizedImage
                src={MainImages.Background}
                width={801}
                height={450}
                objectFit="cover"
                overflow="hidden"
              />
            </Common.FlexColumn>
          </Common.FlexRow>
        </Styled.Viewport>
      </Styled.Container>
    </>
  );
}

export default House;
