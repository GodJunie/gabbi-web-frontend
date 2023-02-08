import React, {
  ReactElement,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import * as Styled from "./header.style";

import { useNavigate } from "react-router-dom";
import { WindowContext } from "context/windowContext";
import { Colors } from "common";
import { Icons, MainImages } from "common/images";
import * as Common from "common/commonStyle";
import LogIn from "components/login";
import { UserContext } from "context/userContext";
import { magic } from "services/magic";
import Username from "components/username";

function Header(): ReactElement {
  const { isMobile, scrollPosition, width, windowSize } =
    useContext(WindowContext);
  const isTop = useMemo<boolean>(() => scrollPosition < 20, [scrollPosition]);

  const [popup, setPopup] = useState<"login" | "email" | "username" | null>(
    null
  );

  let navigate = useNavigate();
  const { user, setUser, loading, userData } = useContext(UserContext);

  useEffect(() => {
    if (!loading) {
      if (popup === "login" && user) {
        setPopup(null);
      }
      if (user && (!userData || !userData.username)) {
        setPopup("username");
      }
      if (popup === "username" && user && userData && userData.username) {
        setPopup(null);
      }
    }
  }, [user, userData, popup, loading]);

  return (
    <>
      <Styled.Header
        height={isMobile ? 60 : 95}
        backgroundColor={isTop ? "transparent" : Colors.neutralWhite}
      >
        <Styled.HeaderViewport width={width} isMobile={isMobile}>
          <Common.NoOpacityButton
            width={117}
            height={45}
            onClick={() => navigate("/")}
          >
            <Styled.HeaderLogo width={117} height={45} src={Icons.LogoTypo} />
          </Common.NoOpacityButton>
          <Common.Span />
          <Styled.HeaderProfileButton
            onClick={() => {
              if (loading) return;

              if (user && user.issuer) {
                navigate("/profile");
                return;
              }
              setPopup("login");
            }}
          >
            <Common.Center>
              <Common.SizedImage src={Icons.Profile} />
            </Common.Center>
          </Styled.HeaderProfileButton>
        </Styled.HeaderViewport>
      </Styled.Header>
      {popup === "login" && <LogIn onClose={() => setPopup(null)} />}
      {popup === "username" && <Username />}
    </>
  );
}

export default Header;
