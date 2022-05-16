import { createContext, ReactNode, useContext, useMemo, useState } from "react";

const PortalContext = createContext<{
  isVisible?: boolean;
  setIsVisible?: React.Dispatch<React.SetStateAction<boolean>>;
}>({});

const PortalContextProvider = ({ children }: { children: ReactNode }) => {
  const [isVisible, setIsVisible] = useState(false);
  const value = useMemo(() => ({ isVisible, setIsVisible }), [isVisible]);

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
