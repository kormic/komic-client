import React, { PropsWithChildren } from "react";
import { isStyledComponent } from "styled-components";

import { useForm } from "hooks/useForm";
import {
  SUserFormWrapper,
  SUserForm,
  SUserInput,
} from "components/UserForm/styled";
import { ColorSpan } from "components/ColorSpan";
import { SSpecialButton } from "components/Header/styled";

export const UserForm = <T extends Record<string, unknown>>({
  submitButtonTitle = "",
  ...props
}: PropsWithChildren<{
  initialFormData: T;
  submitButtonTitle?: string;
  footer?: () => React.ReactNode;
  validateFormData: (data: T) => string | null;
  onSubmit: (
    formData: T,
    setError: React.Dispatch<React.SetStateAction<string | null>>
  ) => void;
}>) => {
  const { formData, setFormData, error, handleSubmit } = useForm<T>(
    props.initialFormData,
    props.validateFormData,
    props.onSubmit
  );

  return (
    <SUserFormWrapper>
      <SUserForm>
        {React.Children.map(props.children, (child) => {
          if (React.isValidElement(child)) {
            const isInput =
              child.type === "input" ||
              (isStyledComponent(child.type) && child.type === SUserInput);
            const inputProps = isInput && {
              value: formData[child.props.name],
              onChange: (e: any) =>
                setFormData((prev: any) => ({
                  ...prev,
                  [child.props.name]: e.target.value,
                })),
            };
            return React.cloneElement(child, {
              ...inputProps,
              ...child.props,
            });
          }

          return null;
        })}
        {error && (
          <ColorSpan
            color="red"
            style={{ fontSize: "14px", marginBottom: "0.6rem" }}
          >
            {error}
          </ColorSpan>
        )}
        {props.footer?.()}
        {submitButtonTitle.length > 0 && (
          <SSpecialButton type="submit" onClick={handleSubmit}>
            {submitButtonTitle}
          </SSpecialButton>
        )}
      </SUserForm>
    </SUserFormWrapper>
  );
};
