import { PostDTO } from "dto/PostDTO";

export const getPosts = async ({
    categoryId,
    offset,
    limit
}: {
    categoryId: number;
    offset: number;
    limit: number;
}) => {
    const res = await fetch(`${process.env.API_URL}/posts?categoryId=${categoryId}&offset=${offset}&limit=${limit}`);
    const data = await res.json();

    // TODO-BE: Set correctly the status when fetching a post fails
    return {
        posts: data.errorMessage ? null : data.posts as PostDTO[], // TODO-BE: remove the redundant first level key (post)
    };
};

export const getPostById = async (id: string) => {
    const res = await fetch(`${process.env.API_URL}posts/${id}`);
    const data = await res.json();

    // TODO-BE: Set correctly the status when fetching a post fails
    return {
        props: {
            post: data.errorMessage ? null : data.post as PostDTO, // TODO-BE: remove the redundant first level key (post)
        },
    };
};