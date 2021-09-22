import { PostDTO } from "dto/PostDTO";

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