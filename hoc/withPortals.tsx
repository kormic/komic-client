import { Login } from "components/Login";
import { Portal } from "components/Portal";
import { Profile } from "components/Profile";
import { Registration } from "components/Registration";
import { usePortal } from "context/PortalContext";

export const withPortals =
  <T,>(WrappedComponent: React.FC<T>) =>
  (props: T) => {
    const { isLoginVisible, isRegistrationVisible, isProfileVisible } =
      usePortal();

    const ComponentWithPortals = (
      <>
        <WrappedComponent {...props} />
        {isLoginVisible && (
          <Portal>
            <Login />
          </Portal>
        )}
        {isRegistrationVisible && (
          <Portal>
            <Registration />
          </Portal>
        )}
        {isProfileVisible && (
          <Portal>
            <Profile />
          </Portal>
        )}
      </>
    );

    return ComponentWithPortals;
  };
