import usersReducer, {actions, InitialStateType} from "./users-reducer";

describe('Users-reducer:', () => {
    let state: InitialStateType

    beforeEach(() => {
        state = {
            users: [
                {
                    id: 0, name: 'Vlad', followed: true,
                    photos: {small: null, large: null}, status: 'status 0'
                },
                {
                    id: 1, name: 'Anton', followed: true,
                    photos: {small: null, large: null}, status: 'status 1'
                },
                {
                    id: 2, name: 'Oleg', followed: false,
                    photos: {small: null, large: null}, status: 'status 2'
                },
                {
                    id: 3, name: 'Anton', followed: false,
                    photos: {small: null, large: null}, status: 'status 3'
                }
            ],
            pageSize: 20,
            totalUsersCount: 0,
            currentPage: 1,
            isFetching: false,
            followingInProgress: [],
        }
    })


    test('follow and unfollow success', () => {
        const newStateId0 = usersReducer(state, actions.toggleFollowUnfollowSuccess(0))
        const newStateId2 = usersReducer(state, actions.toggleFollowUnfollowSuccess(2))

        expect(newStateId0.users[0].followed).toBeFalsy()
        expect(newStateId0.users[1].followed).toBeTruthy()
        expect(newStateId2.users[2].followed).toBeTruthy()
        expect(newStateId2.users[3].followed).toBeFalsy()
    })
})
