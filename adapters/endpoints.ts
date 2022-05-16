export const endpoints = {
    AUTH: {
        URL: '/users/authenticate'
    },
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