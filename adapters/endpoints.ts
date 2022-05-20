export const endpoints = {
    USERS: {
        AUTH: {
            URL: '/users/authenticate'
        },
        REGISTER: {
            URL: '/users/register'
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