import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { decode, JwtPayload } from "jsonwebtoken";

import { getToken, LOCALSTORAGE_TOKEN_KEY } from "shared/utils";

type Auth = { isLoggedIn: boolean; token?: string };

const getTokenExpirationDate = () => {
  const token = getToken();

  if (token !== null) {
    const decodedToken = decode(token, { complete: true });
    const expiration = (decodedToken?.payload as JwtPayload).exp;
    const expirationDate = new Date((expiration ?? 0) * 1000);

    return expirationDate;
  }

  return null;
};

const AuthContext = createContext<{
  auth?: Auth;
  loginUser?: (token: string) => void;
  logoutUser?: () => void;
}>({});

const AuthProvider = ({
  children,
  initialIsLoggedIn = false,
}: {
  children: ReactNode;
  initialIsLoggedIn?: boolean;
}) => {
  const [auth, setAuth] = useState<Auth>({
    isLoggedIn: initialIsLoggedIn,
    token: undefined,
  });

  const authState = useMemo(() => {
    return { auth, setAuth };
  }, [auth]);

  const loginUser = useCallback(
    (token: string) => {
      localStorage.setItem(LOCALSTORAGE_TOKEN_KEY, token);
      setAuth({
        isLoggedIn: true,
        token,
      });
    },
    [setAuth]
  );

  const logoutUser = useCallback(() => {
    localStorage.removeItem(LOCALSTORAGE_TOKEN_KEY);
    setAuth({
      isLoggedIn: false,
      token: undefined,
    });
  }, [setAuth]);

  useEffect(() => {
    const now = new Date();
    const tokenExpirationDate = getTokenExpirationDate();

    if (tokenExpirationDate && tokenExpirationDate > now) {
      setAuth({
        isLoggedIn: Boolean(getToken()),
      });
    } else {
      logoutUser();
    }
  }, [logoutUser]);

  const value = { auth, loginUser, logoutUser };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuthContext must be within a AuthContextProvider");
  }

  return context;
};

export { AuthProvider, useAuthContext };
