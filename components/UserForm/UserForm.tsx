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

type UserFormChildProps = React.InputHTMLAttributes<HTMLInputElement> & {
  name?: string;
};

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
          if (React.isValidElement<UserFormChildProps>(child)) {
            const isInput =
              child.type === "input" ||
              (isStyledComponent(child.type) && child.type === SUserInput);

            if (!isInput) {
              React.cloneElement(child, {
                ...child.props,
              });
            }

            const inputName = child.props.name;
            const inputProps = inputName
              ? {
                value: String(formData[inputName] ?? ""),
                onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
                  setFormData((prev) => ({
                    ...prev,
                    [inputName]: e.target.value,
                  })),
              }
              : {};

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
