import React from "react";
import styled from "styled-components";

import { authenticateUser } from "adapters/auth";
import { useAuthContext } from "context/AuthContext";
import { usePortal } from "context/PortalContext";
import { SBackButton, SWrapper, SUserInput } from "../UserForm/styled";
import { UserForm } from "components/UserForm/UserForm";
import { AuthDTO } from "dto/AuthDTO";

const validateFormData = (data: { username: string; password: string }) => {
  if (data.username.length === 0) {
    return "Username is required";
  }

  if (data.password.length === 0) {
    return "Password is required";
  } else return null;
};

const SFooter = styled.span`
  display: flex;
  flex-direction: column;
  font-size: 0.8rem;
  margin: 0.5rem 0;
  gap: 0.2rem;
`;

const SUserLink = styled.a`
  color: ${({ theme }) => theme.accent};
  cursor: pointer;
`;

const Footer = ({
  onForgotClick,
  onSignupClick,
}: {
  onForgotClick: () => void;
  onSignupClick: () => void;
}) => (
  <SFooter>
    <div>
      Forgot your password? Click{" "}
      <SUserLink type='button' onClick={onForgotClick}>
        here
      </SUserLink>
    </div>
    <div>
      Don&apos;t have an account?{" "}
      <SUserLink type='button' onClick={onSignupClick}>
        Sign up
      </SUserLink>
    </div>
  </SFooter>
);

const Login = () => {
  const { setIsLoginVisible, setIsRegistrationVisible, setIsForgotVisible } =
    usePortal();
  const { loginUser } = useAuthContext();

  const onSubmit = async (
    data: AuthDTO,
    setError: React.Dispatch<React.SetStateAction<string | null>>
  ) => {
    const res = await authenticateUser(true, data);
    const receivedToken = Boolean(res?.token);

    if (receivedToken) {
      loginUser?.(res.token);
      setIsLoginVisible?.(false);
    } else if (res?.errorMessage) {
      setError(res?.errorMessage);
    }
  };

  const onFooterClick = (callback?: () => void) => {
    setIsLoginVisible?.(false);
    callback?.();
  };

  return (
    <SWrapper>
      <SBackButton
        onClick={() => {
          setIsLoginVisible?.(false);
        }}
      >
        Close
      </SBackButton>
      <UserForm
        submitButtonTitle='Login'
        initialFormData={{ username: "", password: "" }}
        footer={() => (
          <Footer
            onForgotClick={() =>
              onFooterClick(() => setIsForgotVisible?.(true))
            }
            onSignupClick={() =>
              onFooterClick(() => setIsRegistrationVisible?.(true))
            }
          />
        )}
        validateFormData={validateFormData}
        onSubmit={onSubmit}
      >
        <SUserInput name='username' placeholder='username' />
        <SUserInput name='password' type='password' placeholder='password' />
      </UserForm>
    </SWrapper>
  );
};

export default Login;
