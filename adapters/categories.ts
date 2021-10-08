import { endpoints } from "./endpoints";

export const getCategories = async (callFromClient: boolean) => {
    const res = await fetch(`${callFromClient ? '/api' : process.env.API_URL}${endpoints.CATEGORIES.URL}`);
    const data = await res.json();

    return {
        categories: data.categories
    }
}