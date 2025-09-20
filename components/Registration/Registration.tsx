import React from "react";

import { registerUser } from "adapters/user";
import { usePortal } from "context/PortalContext";
import { SBackButton, SUserInput, SWrapper } from "../UserForm/styled";
import { UserForm } from "components/UserForm/UserForm";
import { isValidEmail } from "shared/utils";
import { RegisterUserDTO } from "dto/RegisterUserDTO";
import { ColorSpan } from "components/ColorSpan";
import { Spacer } from "components/Spacer";

const initialFormData: RegisterUserDTO = {
  first_name: "",
  last_name: "",
  email: "",
  username: "",
  password: "",
  job_desc: "",
  address: "",
  mobile: "",
};

const validateFormData = (data: typeof initialFormData): string | null => {
  if (data.first_name.length === 0) {
    return "First name is required";
  }

  if (data.last_name.length === 0) {
    return "Last name is required";
  }

  if (data.username.length === 0) {
    return "Username is required";
  }

  if (data.password.length === 0 || data.password.length < 8) {
    return "Password is required and should be at least 8 characters long";
  }

  if (data.email.length === 0 || !isValidEmail(data.email)) {
    return "Provide a valid email";
  }

  return null;
};

// TODO: This and Forgot are similar
// probably there can be a reusable component (hoc)
const Registration = () => {
  const { setIsLoginVisible, setIsRegistrationVisible } = usePortal();

  const onSubmit = async (
    data: RegisterUserDTO,
    setError: React.Dispatch<React.SetStateAction<string | null>>
  ) => {
    const res = await registerUser(true, data);

    if (res.success) {
      setIsRegistrationVisible?.(false);
    } else if (res?.errorMessage) {
      setError(res?.errorMessage);
    }
  };

  return (
    <SWrapper>
      <SBackButton
        onClick={() => {
          setIsLoginVisible?.(true);
          setIsRegistrationVisible?.(false);
        }}
      >
        Back to Login
      </SBackButton>
      <UserForm
        submitButtonTitle='Register'
        initialFormData={initialFormData}
        validateFormData={validateFormData}
        onSubmit={onSubmit}
      >
        <ColorSpan
          style={{
            fontSize: "0.8rem",
            padding: "0em 0 0.2em 0",
            opacity: "0.7",
          }}
        >
          Required
        </ColorSpan>
        <SUserInput name='first_name' placeholder='name' />
        <SUserInput name='last_name' placeholder='last name' />
        <SUserInput name='email' placeholder='email' type='email' />
        <SUserInput name='username' placeholder='username' />
        <SUserInput name='password' type='password' placeholder='password' />
        <ColorSpan
          style={{ fontSize: "0.8rem", padding: "0.2em 0", opacity: "0.7" }}
        >
          Optional
        </ColorSpan>
        <SUserInput name='job_desc' placeholder='job description' />
        <SUserInput name='address' placeholder='address' />
        <SUserInput name='mobile' placeholder='mobile no' />
        <Spacer $space={0.4} />
      </UserForm>
    </SWrapper>
  );
};

export default Registration;
