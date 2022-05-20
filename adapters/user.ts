import { LOCALSTORAGE_TOKEN_KEY } from "context/AuthContext";
import { RegisterUserDTO } from "dto/RegisterUserDTO";
import { endpoints } from "./endpoints";

export const getUserProfile = async (callFromClient: boolean) => {
    try {
        const url = `${callFromClient ? '/api/v1' : process.env.API_URL}${endpoints.USERS.PROFILE.URL}`
        const res = await fetch(url, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${localStorage.getItem(LOCALSTORAGE_TOKEN_KEY)}`
            },
        });
        const data = await res.json();

        if (res.status === 200) {
            return {
                userProfile: data.user
            }
        }

        throw data;
    } catch (error) {
        return {
            errorMessage: (error as { errorMessage: string }).errorMessage
        }
    }
}

export const registerUser = async (callFromClient: boolean, params: RegisterUserDTO) => {
    try {
        const url = `${callFromClient ? '/api/v1' : process.env.API_URL}${endpoints.USERS.REGISTER.URL}`
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
                id: data.userId
            }
        }

        throw data;
    } catch (error) {
        return {
            errorMessage: (error as { errorMessage: string }).errorMessage
        }
    }
}