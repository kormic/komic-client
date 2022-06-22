import { AddPostDTO } from "dto/AddPostDTO";
import { PostDTO } from "dto/PostDTO";
import { getToken } from "shared/utils";
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
    const { CATEGORYID, OFFSET, LIMIT } = endpoints.POSTS.ALL.PARAMS
    const res = await fetch(`${process.env.API_URL}${endpoints.POSTS.ALL.URL}?${CATEGORYID}=${categoryId}&${OFFSET}=${offset}&${LIMIT}=${limit}`);
    const data = await res.json();

    if (!res.ok) {
        throw Error(data.errorMessage)
    }

    return {
        posts: data.posts as PostDTO[],
    };
};

export const getPostById = async (id: string) => {
    try {
        const res = await fetch(`${process.env.API_URL}${endpoints.POSTS.ALL.URL}/${id}`);
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

export const getPostsByUserId = async (callFromClient: boolean, id: string, params = {
    categoryId: 1,
    offset: 6,
    limit: 6
}) => {
    try {
        const { CATEGORYID, OFFSET, LIMIT } = endpoints.POSTS.BY_USERID.PARAMS
        const res = await fetch(`${callFromClient ? '/api/v1' : process.env.API_URL}${endpoints.POSTS.BY_USERID.URL}/${id}?${CATEGORYID}=${params.categoryId}&${OFFSET}=${params.offset}&${LIMIT}=${params.limit}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${getToken()}`
            },
        });
        const data = await res.json();

        if (!res.ok) {
            throw Error(data.errorMessage)
        }

        return {
            posts: data.posts as PostDTO[],
        };
    } catch (error) {
        return {
            props: {
                posts: undefined
            }
        };
    }
};

export const addPost = async (callFromClient: boolean, params: AddPostDTO) => {
    try {
        const res = await fetch(`${callFromClient ? '/api/v1' : process.env.API_URL}${endpoints.POSTS.ADD.URL}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${getToken()}`
            },
            body: JSON.stringify(params),
            method: 'POST',
        })
        const data = await res.json();

        if (res.status === 201) {
            return {
                success: data.success as boolean,
                message: data.msg as string,
                id: data.userId as number
            }
        }

        throw data;
    } catch (error) {
        return {
            props: {
                errorMessage: (error as { errorMessage: string }).errorMessage
            }
        };
    }
}