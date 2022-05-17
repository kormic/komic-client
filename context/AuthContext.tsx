import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export const LOCALSTORAGE_TOKEN_KEY = "token";

type Auth = { isLoggedIn: boolean; token?: string };

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
  useEffect(() => {
    setAuth({
      isLoggedIn: Boolean(localStorage.getItem(LOCALSTORAGE_TOKEN_KEY)),
    });
  }, []);

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
