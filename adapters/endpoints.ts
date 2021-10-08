export const endpoints = {
    CATEGORIES: {
        URL: '/categories'
    },
    POSTS: {
        URL: '/posts',
        PARAMS: {
            CATEGORYID: 'categoryId',
            LIMIT: 'limit',
            OFFSET: 'offset'
        }
    },
    POST: {
        URL: '/post'
    }
}