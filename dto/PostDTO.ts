export type Tag = {
    id: number;
    name: string;
    description: string;
}

export type PostDTO = {
    id: number;
    title: string;
    user_id: number;
    short_body: string;
    body: string;
    likes: number;
    createdAt: string;
    imageUrl: string;
    tags: Tag[];
    categoryId: number;
};