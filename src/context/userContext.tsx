import { Unsubscribe } from "@firebase/util";
import { get, onValue, ref } from "firebase/database";
import { MagicUserMetadata } from "magic-sdk";
import * as React from "react";
import { db } from "services/firebase";
import { magic } from "services/magic";

type UserState = {
  loading: boolean;
  user?: MagicUserMetadata;
  userData?: UserDto;
  setUser?: React.Dispatch<MagicUserMetadata | undefined>;
  setUserData?: React.Dispatch<UserDto | undefined>;
};

export const UserContext = React.createContext<UserState>({
  loading: false,
});

export const UserProvider: React.FC<any> = ({ children }) => {
  const [user, setUser] = React.useState<MagicUserMetadata>();
  const [userData, setUserData] = React.useState<UserDto>();
  const [loading, setLoading] = React.useState(false);
  const [callback, setCallback] = React.useState<any>();

  React.useEffect(() => {
    (async () => {
      setLoading(true);
      const isLoggedIn = await magic.user.isLoggedIn();
      if (isLoggedIn) {
        let user = await magic.user.getMetadata();
        setUser(user);
        const dbRef = ref(db, `users/${user.publicAddress}`);
        const snapshot = await get(dbRef);
        setUserData(snapshot.val());
      } else {
        setUser(undefined);
      }
      setLoading(false);
    })();
  }, []);

  return (
    <UserContext.Provider
      value={{ loading, user, userData, setUser, setUserData }}
    >
      {children}
    </UserContext.Provider>
  );
};
