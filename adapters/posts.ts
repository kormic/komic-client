import { PostDTO } from "dto/PostDTO";
import { endpoints } from "./endpoints";

export const getPosts = async ({
    categoryId,
    offset,
    limit
}: {
    categoryId: number;
    offset: number;
    limit: number;
}) => {
    const { CATEGORYID, OFFSET, LIMIT } = endpoints.POSTS.PARAMS
    const res = await fetch(`${process.env.API_URL}${endpoints.POSTS.URL}?${CATEGORYID}=${categoryId}&${OFFSET}=${offset}&${LIMIT}=${limit}`);
    const data = await res.json();

    if (!res.ok) {
        throw Error(data.errorMessage)
    }

    return {
        posts: data.posts as PostDTO[], // TODO-BE: remove the redundant first level key (post)
    };
};

export const getPostById = async (id: string) => {
    try {
        const res = await fetch(`${process.env.API_URL}${endpoints.POSTS.URL}/${id}`);
        const data = await res.json();

        if (!res.ok) {
            throw Error(data.errorMessage)
        }

        return {
            props: {
                post: data.post as PostDTO, // TODO-BE: remove the redundant first level key (post)
            },
        };
    } catch (error) {
        return {
            props: {
                post: undefined
            }
        };
    }
};