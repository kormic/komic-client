import React from "react";

import { registerUser, sendResetEmail } from "adapters/user";
import { usePortal } from "context/PortalContext";
import { SBackButton, SUserInput, SWrapper } from "../UserForm/styled";
import { UserForm } from "components/UserForm/UserForm";
import { isValidEmail } from "shared/utils";
import { ColorSpan } from "components/ColorSpan";
import { Spacer } from "components/Spacer";
import { ResetEmailDTO } from "dto/ResetEmailDTO";

const initialFormData: ResetEmailDTO = {
  email: "",
};

const validateFormData = (data: typeof initialFormData): string | null => {
  if (data.email.length === 0 || !isValidEmail(data.email)) {
    return "Provide a valid email";
  }

  return null;
};

// TODO: This and Registration are similar
// probably there can be a reusable component (hoc)
const Forgot = () => {
  const { setIsForgotVisible, setIsLoginVisible } = usePortal();

  const onSubmit = async (
    data: ResetEmailDTO,
    setError: React.Dispatch<React.SetStateAction<string | null>>
  ) => {
    const res = await sendResetEmail(data);

    if (res.success) {
      setIsForgotVisible?.(false);
    } else if (res?.errorMessage) {
      setError(res?.errorMessage);
    }
  };

  return (
    <SWrapper>
      <SBackButton
        onClick={() => {
          setIsLoginVisible?.(true);
          setIsForgotVisible?.(false);
        }}
      >
        Back to Login
      </SBackButton>
      <UserForm
        submitButtonTitle='Send Email'
        initialFormData={initialFormData}
        validateFormData={validateFormData}
        onSubmit={onSubmit}
      >
        <SUserInput name='email' placeholder='email' type='email' />
        <Spacer space={0.4} />
      </UserForm>
    </SWrapper>
  );
};

export default Forgot;
