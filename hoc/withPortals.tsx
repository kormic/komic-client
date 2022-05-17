import { Login } from "components/Login";
import { Portal } from "components/Portal";
import { Profile } from "components/Profile";
import { usePortal } from "context/PortalContext";

export const withPortals = (WrappedComponent: React.FC) => (props: any) => {
  const {
    isLoginVisible,
    setIsLoginVisible,
    isProfileVisible,
    setIsProfileVisible,
  } = usePortal();

  const ComponentWithPortals = (
    <>
      <WrappedComponent {...props} />
      {isLoginVisible && (
        <Portal onOutsideClick={() => setIsLoginVisible?.(false)}>
          <Login />
        </Portal>
      )}
      {isProfileVisible && (
        <Portal onOutsideClick={() => setIsProfileVisible?.(false)}>
          <Profile />
        </Portal>
      )}
    </>
  );

  return ComponentWithPortals;
};
