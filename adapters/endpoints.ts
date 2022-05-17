export const endpoints = {
    USERS: {
        AUTH: {
            URL: '/users/authenticate'
        },
        PROFILE: {
            URL: '/users/profile'
        }
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