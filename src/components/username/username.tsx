import * as Common from "common/commonStyle";
import * as Typo from "common/typography";
import React, { ReactElement, useContext, useState } from "react";
import * as Styled from "./username.style";

import { Colors } from "common";
import { useNavigate } from "react-router-dom";
import { WindowContext } from "context/windowContext";
import { Icons, SocialIcons } from "common/images";
import { magic } from "services/magic";
import validator from "validator";
import { UserContext } from "context/userContext";
import { OAuthProvider } from "@magic-ext/oauth";
import { get, ref, set, update } from "firebase/database";
import { db } from "services/firebase";

function Username(): ReactElement {
  const { isMobile, scrollPosition, width, windowSize } =
    useContext(WindowContext);
  let navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [disabled, setDisabled] = useState(false);
  const { user, setUser, loading, userData, setUserData } =
    useContext(UserContext);

  async function handleSetUsername() {
    if (!user) return;

    setDisabled(true);
    const dbRef = ref(db, `users/${user.publicAddress}`);
    await update(dbRef, {
      username: username,
    });
    const snapshot = await get(dbRef);
    setUserData!(snapshot.val());
    setDisabled(false);
  }

  return (
    <Styled.Container>
      <Styled.Modal>
        <Styled.ModalViewport>
          <Common.SizedImage src={Icons.Logo} width={59} height={56} />

          <Common.SizedBoxH height={24} />

          <Typo.IndieFlowerRegular fontSize={42} color={Colors.neutralBlack}>
            Almost ready to rock!
            <br />
            Let’s give you
            <br />a cool nickname.
          </Typo.IndieFlowerRegular>

          <Common.SizedBoxH height={24} />

          <Styled.EmailContainer>
            <Common.SizedBoxW width={35} />
            <Common.NoOpacityInput
              width={190}
              fontFamily="Ubuntu"
              fontSize={14}
              placeholder="Enter nickname"
              color={Colors.neutralGray300}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Common.Span />
            <Styled.SendBtn
              disabled={disabled || validator.isEmpty(username)}
              onClick={handleSetUsername}
            >
              <Common.SizedImage src={Icons.Send} width={20} height={20} />
            </Styled.SendBtn>
            <Common.SizedBoxW width={7} />
          </Styled.EmailContainer>
        </Styled.ModalViewport>
      </Styled.Modal>
    </Styled.Container>
  );
}

export default Username;
