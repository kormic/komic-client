export const getCategories = async (callFromClient: boolean) => {
    const res = await fetch(`${callFromClient ? '/api' : process.env.API_URL}/categories`);
    const data = await res.json();

    return {
        categories: data.categories
    }
}