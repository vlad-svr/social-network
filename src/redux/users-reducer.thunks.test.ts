import {actions, toggleFollowUnfollow} from './users-reducer';
import {usersAPI} from '../api/users-api';
import {APIResponseType, ResultCodesEnum} from "../api/api";

jest.mock('../api/users-api')
const userAPIMock = usersAPI as jest.Mocked<typeof usersAPI>

const dispatchMock = jest.fn()
const getStateMock = jest.fn()

const result: APIResponseType = {
    resultCode: ResultCodesEnum.Success,
    messages: [],
    data: {}
}


describe('Users-thunks:', () => {
    beforeEach(() => {
        dispatchMock.mockClear()
        getStateMock.mockClear()
    })

    test('success follow thunk', async () => {
        userAPIMock.checkFollower.mockReturnValue(Promise.resolve(false))
        userAPIMock.follow.mockReturnValue(Promise.resolve(result))

        const thunk = toggleFollowUnfollow(1)

        await thunk(dispatchMock, getStateMock, {})

        expect(dispatchMock).toBeCalledTimes(3)
        expect(dispatchMock).toHaveBeenNthCalledWith(1, actions.toggleFollowingInProgress(true, 1))
        expect(dispatchMock).toHaveBeenNthCalledWith(2, actions.toggleFollowUnfollowSuccess(1))
        expect(dispatchMock).toHaveBeenNthCalledWith(3, actions.toggleFollowingInProgress(false, 1))
    })

    test('success unfollow thunk', async () => {
        userAPIMock.checkFollower.mockReturnValue(Promise.resolve(true))
        userAPIMock.unfollow.mockReturnValue(Promise.resolve(result))

        const thunk = toggleFollowUnfollow(1)

        await thunk(dispatchMock, getStateMock, {})

        expect(dispatchMock).toBeCalledTimes(3)
        expect(dispatchMock).toHaveBeenNthCalledWith(1, actions.toggleFollowingInProgress(true, 1))
        expect(dispatchMock).toHaveBeenNthCalledWith(2, actions.toggleFollowUnfollowSuccess(1))
        expect(dispatchMock).toHaveBeenNthCalledWith(3, actions.toggleFollowingInProgress(false, 1))
    })
})
