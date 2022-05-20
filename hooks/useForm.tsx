import React, { useState } from "react";
import { start as startLoader, done as stopLoader } from "nprogress";

export const useForm = <T,>(
  initialFormData: T,
  validateFormData: (formData: T) => string | null,
  onSubmit: (
    formData: T,
    setError: React.Dispatch<React.SetStateAction<string | null>>
  ) => void
) => {
  const [formData, setFormData] = useState<T>(initialFormData);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setError(null);
    const validationError = validateFormData(formData);

    if (validationError) {
      setError(validationError);
    } else {
      startLoader();
      onSubmit(formData, setError);
      stopLoader();
    }
  };

  return { error, setError, formData, setFormData, handleSubmit };
};
