import React from 'react';
import Error from 'next/error';
import { useRouter } from 'next/router';
import { decode, verify, JwtPayload } from 'jsonwebtoken';
import { Spacer } from 'components/Spacer';
import { SWrapper, SBackButton, SUserInput } from 'components/UserForm/styled';
import { UserForm } from 'components/UserForm/UserForm';
import { resetPassword } from 'adapters/user';
import { ResetPasswordDTO } from 'dto/ResetPasswordDTO';

const initialFormData = {
  newPassword: '',
  confirmPassword: '',
};
const validateFormData = (data: typeof initialFormData): string | null => {
  if (data.newPassword.length === 0 || data.newPassword.length < 8) {
    return 'Password is required and should be at least 8 characters long';
  }

  if (data.confirmPassword !== data.newPassword) {
    return "Passwords don't match";
  }

  return null;
};

const ResetPassword = () => {
  const router = useRouter();
  const { token } = router.query;

  if (!token) {
    return <Error statusCode={404} />;
  }

  const decodedToken = decode(token as unknown as string, { complete: true });

  if (!decodedToken?.payload) {
    return <Error statusCode={404} />;
  }

  const expiration = (decodedToken?.payload as JwtPayload).exp;
  const expirationDate = new Date((expiration ?? 0) * 1000);

  if (expirationDate < new Date()) {
    return <Error statusCode={404} />;
  }

  const handleSubmit = async (
    data: ResetPasswordDTO,
    setError: React.Dispatch<React.SetStateAction<string | null>>
  ) => {
    const res = await resetPassword(token as string, data);

    if (res.success) {
      router.replace('/');
    } else if (res?.errorMessage) {
      setError(res.errorMessage);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        height: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <SWrapper>
        <SBackButton
          onClick={() => {
            router.replace('/');
          }}
        >
          Back to Login
        </SBackButton>
        <UserForm
          submitButtonTitle='Reset password'
          initialFormData={initialFormData}
          validateFormData={validateFormData}
          onSubmit={handleSubmit}
        >
          <SUserInput
            name='newPassword'
            placeholder='new password'
            type='password'
          />
          <SUserInput
            name='confirmPassword'
            placeholder='confirm password'
            type='password'
          />
          <Spacer space={0.4} />
        </UserForm>
      </SWrapper>
    </div>
  );
};

export default ResetPassword;
