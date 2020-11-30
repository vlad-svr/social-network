export const RouterManager = {
    profile: {
        my: {path: '/profile'},
        userId: {path: '/profile/:userId?'},
        getUserProfile(id: number) {
            return `/profile/${id}`
        }
    },
    dialogs: {
        list: {path: '/dialogs'}
    },
    users: {
        list: {path: '/users'}
    },
    friends: {
        list: {path: '/friends'}
    },
    news: {
        list: {path: '/news'}
    },
    audio: {
        list: {path: '/audio'}
    },
    auth: {
        login: {path: '/login'}
    },
    photos: {
        list: {path: '/photos'}
    },
    video: {
        list: {path: '/video'}
    },
    settings: {
        list: {path: '/settings'}
    }
}