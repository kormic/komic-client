import { decode, JwtPayload } from "jsonwebtoken";

export const isValidEmail = (value: string) => {
    const emailRegex = new RegExp(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "g"
    );

    return emailRegex.test(value);
};

export const LOCALSTORAGE_TOKEN_KEY = "token";

export const getToken = () => localStorage.getItem(LOCALSTORAGE_TOKEN_KEY);
export const getUserIdFromToken = () => {
    const token = getToken();

    if (token) {
        const decodedToken = decode(token, { complete: true })
            ?.payload as JwtPayload;

        return +decodedToken.Id;
    }

    return null;
}
export const truncate = (value: string, length: number) => {
    return (value.length > length) ? `${value.substring(0, length - 1)}...` : value;
};

export const MAX_DESCRIPTION_LENGTH = 100;
export const TEXTAREA_HEIGHT = 45;
export const monthNames = ["Jan", "Febr", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"
];