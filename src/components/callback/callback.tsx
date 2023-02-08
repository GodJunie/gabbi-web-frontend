import React, { ReactElement, useContext, useEffect } from "react";

import Loading from "components/loading";
import { UserContext } from "context/userContext";
import { useNavigate } from "react-router-dom";
import { magic } from "services/magic";

function Callback(): ReactElement {
  let navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);

  // The redirect contains a `provider` query param if the user is logging in with a social provider
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const provider = urlParams.get("provider");

    provider ? finishSocialLogin() : finishEmailRedirectLogin();
  }, [location.search]);

  // `getRedirectResult()` returns an object with user data from Magic and the social provider
  const finishSocialLogin = async () => {
    authenticate();
  };

  // `loginWithCredential()` returns a didToken for the user logging in
  const finishEmailRedirectLogin = async () => {
    let magicCredential = new URLSearchParams(location.search).get(
      "magic_credential"
    );
    if (magicCredential) {
      await authenticate();
    }
  };

  // Send token to server to validate
  const authenticate = async () => {
    // Set the UserContext to the now logged in user
    let userMetadata = await magic.user.getMetadata();
    await setUser!(userMetadata);
    console.log(userMetadata.publicAddress);
    navigate("/");
  };

  return <Loading />;
}

export default Callback;
