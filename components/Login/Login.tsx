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

const SUserSpan = styled.span`
  padding: 0.5rem 0rem;
  font-size: 0.8rem;
`;

const SUserLink = styled.a`
  color: ${({ theme }) => theme.accent};
  cursor: pointer;
`;

const Footer = ({ onClick }: { onClick: () => void }) => (
  <SUserSpan>
    Don&apos;t have an account? Click{" "}
    <SUserLink type='button' onClick={onClick}>
      here
    </SUserLink>
  </SUserSpan>
);

const Login = () => {
  const { setIsLoginVisible, setIsRegistrationVisible } = usePortal();
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

  const onFooterClick = () => {
    setIsLoginVisible?.(false);
    setIsRegistrationVisible?.(true);
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
        footer={() => <Footer onClick={onFooterClick} />}
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
