import { createContext, ReactNode, useContext, useMemo, useState } from "react";

const PortalContext = createContext<{
  isLoginVisible?: boolean;
  setIsLoginVisible?: React.Dispatch<React.SetStateAction<boolean>>;
  isRegistrationVisible?: boolean;
  setIsRegistrationVisible?: React.Dispatch<React.SetStateAction<boolean>>;
  isProfileVisible?: boolean;
  setIsProfileVisible?: React.Dispatch<React.SetStateAction<boolean>>;
}>({});

const PortalContextProvider = ({ children }: { children: ReactNode }) => {
  const [isLoginVisible, setIsLoginVisible] = useState(false);
  const [isRegistrationVisible, setIsRegistrationVisible] = useState(false);
  const [isProfileVisible, setIsProfileVisible] = useState(false);
  const value = useMemo(
    () => ({
      isLoginVisible,
      setIsLoginVisible,
      isRegistrationVisible,
      setIsRegistrationVisible,
      isProfileVisible,
      setIsProfileVisible,
    }),
    [isLoginVisible, isRegistrationVisible, isProfileVisible]
  );

  return (
    <PortalContext.Provider value={value}>{children}</PortalContext.Provider>
  );
};

const usePortal = () => {
  const context = useContext(PortalContext);

  if (context === undefined) {
    throw new Error("usePortal must be within a PortalContextProvider");
  }

  return context;
};

export { PortalContextProvider, usePortal };
