import React, { ReactElement, useContext, useEffect, useState } from 'react';
import * as Styled from './Main.style';

import Header from 'components/Header';
import { WindowContext } from 'context/WindowContext';

import { Magic } from 'magic-sdk';
import { useNavigate } from 'react-router-dom';
import { UserContext } from 'context/UserContext';
import { magic } from 'services/magic';
import { OAuthProvider } from '@magic-ext/oauth';

function Main(): ReactElement {
  const { isMobile, scrollPosition, width, windowSize } = useContext(WindowContext);

  let navigate = useNavigate();
  const [disabled, setDisabled] = useState(false);
  const [user, setUser] = useContext(UserContext);

  // If user is already logged in, redirect to profile page
  useEffect(() => {
    user && user.issuer && navigate('/profile');
  }, [user, history]);

  async function handleLoginWithEmail(email: string) {
    try {
      setDisabled(true); // disable login button to prevent multiple emails from being triggered

      // Trigger Magic link to be sent to user
      let didToken = await magic.auth.loginWithMagicLink({
        email,
        redirectURI: new URL('/callback', window.location.origin).href, // optional redirect back to your app after magic link is clicked
      });

      // Validate didToken with server
      const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/api/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + didToken,
        },
      });

      if (res.status === 200) {
        // Set the UserContext to the now logged in user
        let userMetadata = await magic.user.getMetadata();
        await setUser(userMetadata);
        navigate('/profile');
      }
    } catch (error) {
      setDisabled(false); // re-enable login button - user may have requested to edit their email
      console.log(error);
    }
  }

  async function handleLoginWithSocial(provider: OAuthProvider) {
    await magic.oauth.loginWithRedirect({
      provider,
      redirectURI: new URL('/callback', window.location.origin).href, // required redirect to finish social login
    });
  }

  return (
    <>
      <Header />
      <Styled.Container></Styled.Container>
    </>
  );
}

export default Main;
