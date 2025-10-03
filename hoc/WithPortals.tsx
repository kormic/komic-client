import { Forgot } from 'components/Forgot';
import { Login } from 'components/Login';
import { Portal } from 'components/Portal';
import { Profile } from 'components/Profile';
import { Registration } from 'components/Registration';
import { usePortal } from 'context/PortalContext';

export const WithPortals =
  <T,>(WrappedComponent: React.FC<T>) =>
  function WithPortals(props: T & {}) {
    const {
      isLoginVisible,
      isForgotVisible,
      isRegistrationVisible,
      isProfileVisible,
    } = usePortal();

    const ComponentWithPortals = (
      <>
        <WrappedComponent {...props} />
        {isLoginVisible && (
          <Portal>
            <Login />
          </Portal>
        )}
        {isForgotVisible && (
          <Portal>
            <Forgot />
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
