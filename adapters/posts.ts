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

    // TODO-BE: Set correctly the status when fetching a post fails
    return {
        posts: data.errorMessage ? null : data.posts as PostDTO[], // TODO-BE: remove the redundant first level key (post)
    };
};

export const getPostById = async (id: string) => {
    const res = await fetch(`${process.env.API_URL}${endpoints.POSTS.URL}/${id}`);
    const data = await res.json();

    // TODO-BE: Set correctly the status when fetching a post fails
    return {
        props: {
            post: data.errorMessage ? null : data.post as PostDTO, // TODO-BE: remove the redundant first level key (post)
        },
    };
};