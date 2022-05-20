import { Login } from "components/Login";
import { Portal } from "components/Portal";
import { Profile } from "components/Profile";
import { Registration } from "components/Registration";
import { usePortal } from "context/PortalContext";

export const withPortals =
  <T,>(WrappedComponent: React.FC<T>) =>
  (props: T) => {
    const {
      isLoginVisible,
      setIsLoginVisible,
      isRegistrationVisible,
      setIsRegistrationVisible,
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
        {isRegistrationVisible && (
          <Portal onOutsideClick={() => setIsRegistrationVisible?.(false)}>
            <Registration />
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
