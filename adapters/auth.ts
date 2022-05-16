import { endpoints } from "./endpoints";

export const authenticateUser = async (callFromClient: boolean, params: { username: string, password: string }) => {
    try {
        const url = `${callFromClient ? '/api/v1' : process.env.API_URL}${endpoints.AUTH.URL}`
        const res = await fetch(url, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(params)
        });
        const data = await res.json();

        if (res.status === 200) {
            return {
                token: data.token
            }
        }

        throw data;
    } catch (error) {
        return {
            errorMessage: (error as { errorMessage: string }).errorMessage
        }
    }
}