import { RegisterUserDTO } from 'dto/RegisterUserDTO';
import { ResetEmailDTO } from 'dto/ResetEmailDTO';
import { ResetPasswordDTO } from 'dto/ResetPasswordDTO';
import { UserProfileDTO } from 'dto/UserProfileDTO';
import { getToken } from 'shared/utils';
import { endpoints } from './endpoints';

export const getUserProfile = async (callFromClient: boolean) => {
  try {
    const url = `${callFromClient ? '/api/v1' : process.env.API_URL}${
      endpoints.USERS.PROFILE.URL
    }`;
    const res = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `JWT ${getToken()}`,
      },
    });
    const data = await res.json();

    if (res.status === 200) {
      return {
        userProfile: data.user as UserProfileDTO,
      };
    }

    throw data;
  } catch (error) {
    return {
      errorMessage: (error as { errorMessage: string }).errorMessage,
    };
  }
};

export const registerUser = async (
  callFromClient: boolean,
  params: RegisterUserDTO
) => {
  try {
    const url = `${callFromClient ? '/api/v1' : process.env.API_URL}${
      endpoints.USERS.REGISTER.URL
    }`;
    const res = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
      method: 'POST',
    });
    const data = await res.json();

    if (res.status === 201) {
      return {
        success: data.success,
        message: data.msg,
        id: data.userId,
      };
    }

    throw data;
  } catch (error) {
    return {
      errorMessage: (error as { errorMessage: string }).errorMessage,
    };
  }
};

export const sendResetEmail = async (params: ResetEmailDTO) => {
  try {
    const url = ` /api/v1${endpoints.USERS.PASSWORD.SEND_EMAIL.URL}`;
    const res = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
      method: 'POST',
    });
    const data = await res.json();

    if (res.status === 200) {
      return data;
    }

    throw data;
  } catch (error) {
    return {
      errorMessage: (error as { errorMessage: string }).errorMessage,
    };
  }
};

export const resetPassword = async (
  token: string,
  params: ResetPasswordDTO
) => {
  try {
    const url = ` /api/v1${endpoints.USERS.PASSWORD.RESET.URL}`;
    const res = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `JWT ${token}`,
      },
      body: JSON.stringify(params),
      method: 'POST',
    });
    const data = await res.json();

    if (res.status === 200) {
      return data;
    }
    throw data;
  } catch (error) {
    return {
      errorMessage: 'An error has occured, please contact the administrator',
    };
  }
};
