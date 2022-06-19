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
        ALL: {
            URL: '/posts',
            PARAMS: {
                CATEGORYID: 'categoryId',
                LIMIT: 'limit',
                OFFSET: 'offset'
            }
        },
        BY_USERID: {
            URL: '/posts/user',
            PARAMS: {
                CATEGORYID: 'categoryId',
                LIMIT: 'limit',
                OFFSET: 'offset'
            }
        },
        ADD: {
            URL: '/posts/add'
        }
    },
    POST: {
        URL: '/post'
    }
}