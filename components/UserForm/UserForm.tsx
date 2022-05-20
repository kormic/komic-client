import React, { PropsWithChildren } from "react";
import { isStyledComponent } from "styled-components";

import { useForm } from "hooks/useForm";
import { SFormWrapper, SForm } from "components/UserForm/styled";
import { ColorSpan } from "components/ColorSpan";
import { SSpecialButton } from "components/Header/styled";

export const UserForm = <T extends Record<string, unknown>>(
  props: PropsWithChildren<{
    submitButtonTitle: string;
    initialFormData: T;
    footer?: () => React.ReactNode;
    validateFormData: (data: T) => string | null;
    onSubmit: (
      formData: T,
      setError: React.Dispatch<React.SetStateAction<string | null>>
    ) => void;
  }>
) => {
  const { formData, setFormData, error, handleSubmit } = useForm<T>(
    props.initialFormData,
    props.validateFormData,
    props.onSubmit
  );

  return (
    <SFormWrapper>
      <SForm>
        {React.Children.map(props.children, (child) => {
          if (React.isValidElement(child)) {
            const isInput =
              child.type === "input" ||
              (isStyledComponent(child.type) && child.type.target === "input");
            const inputProps = isInput && {
              value: formData[child.props.name],
              onChange: (e: any) =>
                setFormData((prev: any) => ({
                  ...prev,
                  [child.props.name]: e.target.value,
                })),
            };
            return React.cloneElement<HTMLInputElement>(child, {
              ...inputProps,
              ...child.props,
            });
          }

          return null;
        })}
        {error && (
          <ColorSpan color='red' style={{ fontSize: "small" }}>
            {error}
          </ColorSpan>
        )}
        {props.footer?.()}
        <SSpecialButton type='submit' onClick={(e) => handleSubmit(e)}>
          {props.submitButtonTitle}
        </SSpecialButton>
      </SForm>
    </SFormWrapper>
  );
};
