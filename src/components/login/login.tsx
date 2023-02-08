import * as Common from "common/commonStyle";
import * as Typo from "common/typography";
import React, { ReactElement, useContext, useState } from "react";
import * as Styled from "./login.style";

import { Colors } from "common";
import { useNavigate } from "react-router-dom";
import { WindowContext } from "context/windowContext";
import { Icons, SocialIcons } from "common/images";
import { magic } from "services/magic";
import validator from "validator";
import { UserContext } from "context/userContext";
import { OAuthProvider } from "@magic-ext/oauth";

function LogIn(props: { onClose: () => void }): ReactElement {
  const { isMobile, scrollPosition, width, windowSize } =
    useContext(WindowContext);
  let navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [disabled, setDisabled] = useState(false);

  const { onClose } = props;

  const { user, setUser, loading, userData } = useContext(UserContext);

  async function handleLoginWithEmail() {
    try {
      setDisabled(true); // disable login button to prevent multiple emails from being triggered

      // Trigger Magic link to be sent to user
      let didToken = await magic.auth.loginWithMagicLink({
        email,
        redirectURI: new URL("/callback", window.location.origin).href, // optional redirect back to your app after magic link is clicked
      });

      let userMetadata = await magic.user.getMetadata();
      await setUser!(userMetadata);
    } catch (error) {
      setDisabled(false); // re-enable login button - user may have requested to edit their email
      console.log(error);
    }
  }

  async function handleLoginWithSocial(provider: OAuthProvider) {
    await magic.oauth.loginWithRedirect({
      provider,
      redirectURI: new URL("/callback", window.location.origin).href, // required redirect to finish social login
    });
  }

  return (
    <Styled.Container>
      <Styled.Modal>
        <Styled.ModalCloseBtn width={24} height={24} onClick={onClose}>
          <Common.SizedImage src={Icons.Close} width={24} height={24} />
        </Styled.ModalCloseBtn>

        <Styled.ModalViewport>
          <Common.SizedImage src={Icons.Logo} width={59} height={56} />

          <Common.SizedBoxH height={24} />

          <Typo.IndieFlowerRegular fontSize={42} color={Colors.neutralBlack}>
            Hello, stranger.
          </Typo.IndieFlowerRegular>

          <Common.SizedBoxH height={24} />

          <Styled.GoogleBtn onClick={() => handleLoginWithSocial("google")}>
            <Common.SizedImage
              src={SocialIcons.Google}
              width={18}
              height={18}
            />
            <Common.SizedBoxW width={10} />
            <Typo.UbuntuRegular fontSize={14} color={Colors.neutralWhite}>
              Continue with Google
            </Typo.UbuntuRegular>
          </Styled.GoogleBtn>
          <Common.SizedBoxH height={16} />
          <Styled.AppleBtn>
            <Common.SizedImage src={SocialIcons.Apple} width={18} height={17} />
            <Common.SizedBoxW width={10} />
            <Typo.UbuntuRegular fontSize={14} color={Colors.neutralWhite}>
              Continue with Apple
            </Typo.UbuntuRegular>
          </Styled.AppleBtn>
          <Common.SizedBoxH height={16} />
          <Styled.WalletConnectBtn>
            <Common.SizedImage
              src={SocialIcons.WalletConnect}
              width={18}
              height={10.12}
            />
            <Common.SizedBoxW width={10} />
            <Typo.UbuntuRegular fontSize={14} color={Colors.neutralWhite}>
              Continue with WalletConnect
            </Typo.UbuntuRegular>
          </Styled.WalletConnectBtn>
          <Common.SizedBoxH height={16} />
          <Styled.MetamaskConnectBtn>
            <Common.SizedImage
              src={SocialIcons.Metamask}
              width={18}
              height={18}
            />
            <Common.SizedBoxW width={10} />
            <Typo.UbuntuRegular fontSize={14} color={Colors.neutralWhite}>
              Continue with Metamask
            </Typo.UbuntuRegular>
          </Styled.MetamaskConnectBtn>

          <Common.SizedBoxH height={24} />

          <Common.FlexRow
            width={300}
            height={16}
            justifyContent="space-between"
            alignItems="center"
          >
            <Styled.Dash />
            <Typo.UbuntuRegular fontSize={14} color={Colors.neutralBlack}>
              or
            </Typo.UbuntuRegular>
            <Styled.Dash />
          </Common.FlexRow>

          <Common.SizedBoxH height={24} />

          <Styled.EmailContainer>
            <Common.SizedBoxW width={35} />
            <Common.SizedImage src={Icons.Mail} width={18} height={15.43} />
            <Common.SizedBoxW width={10} />
            <Common.NoOpacityInput
              width={178}
              fontFamily="Ubuntu"
              fontSize={14}
              placeholder="Enter email"
              color={Colors.neutralGray300}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Common.Span />
            <Styled.SendBtn
              disabled={disabled || !validator.isEmail(email)}
              onClick={handleLoginWithEmail}
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

export default LogIn;
