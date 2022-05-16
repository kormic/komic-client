import React, { useState } from "react";
import { start as startLoader, done as stopLoader } from "nprogress";

import { SSpecialButton } from "components/Header/styled";
import { ColorSpan } from "components/ColorSpan";
import { authenticateUser } from "adapters/auth";
import { useAuthContext } from "context/AuthContext";
import { usePortal } from "context/PortalContext";
import { SLogin, SLoginForm, SInput, SSpan, SA } from "./styled";

const validateFormData = (data: { username: string; password: string }) => {
  if (data.username.length === 0) {
    return "Username is required";
  }

  if (data.password.length === 0) {
    return "Password is required";
  } else return null;
};

const Login = () => {
  const { setIsVisible } = usePortal();
  const { loginUser } = useAuthContext();
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const errorMessage = validateFormData(formData);

    if (errorMessage) {
      setError(errorMessage);
    } else {
      startLoader();
      const res = await authenticateUser(true, formData);
      const receivedToken = Boolean(res?.token);

      if (receivedToken) {
        loginUser?.(res?.token);
        setIsVisible?.(false);
      } else if (res?.errorMessage) {
        setError(res?.errorMessage);
      }

      stopLoader();
    }
  };

  return (
    <SLogin>
      <SLoginForm>
        <SInput
          name='username'
          placeholder='username'
          value={formData.username}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, username: e.target.value }))
          }
        />
        <SInput
          name='password'
          type='password'
          placeholder='password'
          value={formData.password}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, password: e.target.value }))
          }
        />
        {error && (
          <ColorSpan color='red' style={{ fontSize: "small" }}>
            {error}
          </ColorSpan>
        )}
        <SSpan>
          Don&apos;t have an account? Click <SA>here</SA>
        </SSpan>
        <SSpecialButton type='submit' onClick={(e) => handleSubmit(e)}>
          Login
        </SSpecialButton>
      </SLoginForm>
    </SLogin>
  );
};
export default Login;
