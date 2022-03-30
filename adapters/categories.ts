import { endpoints } from "./endpoints";
import { CategoryDTO } from '../dto/CategoryDTO';

export const getCategories = async (callFromClient: boolean) => {
    const res = await fetch(`${callFromClient ? '/api/v1' : process.env.API_URL}${endpoints.CATEGORIES.URL}`);
    const data = await res.json();

    if (res.ok) {
        return {
            categories: data.categories as CategoryDTO[]
        }
    }

    throw new Error(data.errorMessage);
}