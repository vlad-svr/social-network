import {UserType} from '../types/types'
import {getDataResponse, instance} from './api'
import {APIResponseType} from './api'


type getUsersType = {
    items: Array<UserType>
    totalCount: number
    error: string | null
}


export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10, term = '', friend: null | boolean = null) {
        return instance
            .get<getUsersType>(`/users?page=${currentPage}&count=${pageSize}&term=${term}` + (friend === null ? '' : `&friend=${friend}`))
            .then(getDataResponse)
    },

    checkFollower(id: number) {
        return instance.get<boolean>(`/follow/${id}`).then(getDataResponse)
    },

    follow(id: number) {
        return instance.post<APIResponseType>(`/follow/${id}`).then(getDataResponse)
    },

    unfollow(id: number) {
        return instance.delete<APIResponseType>(`/follow/${id}`).then(getDataResponse)
    },
}