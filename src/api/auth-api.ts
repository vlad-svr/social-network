import {getDataResponse, instance, ResultCodeForCaptchaEnum, ResultCodesEnum} from "./api";
import {APIResponseType} from "./api";


type IsAuthDataType = {
    id: number
    email: string
    login: string
}
type LoginDataType = { userId: number }


export const authAPI = {
    isAuth() {
        return instance.get<APIResponseType<IsAuthDataType>>(`/auth/me`).then(getDataResponse)
    },

    login(email: string, password: string, rememberMe = false, captcha: null | string = null) {
        return instance
            .post<APIResponseType<LoginDataType, ResultCodesEnum | ResultCodeForCaptchaEnum>>(`/auth/login`, {email, password, rememberMe, captcha})
            .then(getDataResponse)
    },

    logout() {
        return instance.delete<APIResponseType>(`/auth/login`).then(getDataResponse)
    },
}
