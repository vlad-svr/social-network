import axios, {AxiosResponse} from 'axios'

const API_URL = 'https://social-network.samuraijs.com/api/1.0'
const API_KEY = '7a7d1094-bcd3-422b-83b0-47a00337a368'


export const instance = axios.create({
  withCredentials: true,
  baseURL: API_URL,
  headers: {
    'API-KEY': API_KEY,
  },
})

export function getDataResponse<T>(response: AxiosResponse<T>) {
  return response.data
}

export type APIResponseType<D = {}, RC = ResultCodesEnum> = {
  data: D
  messages: Array<string>
  resultCode: RC
}


export enum ResultCodesEnum {
  Success = 0,
  Error = 1,
}
export enum ResultCodeForCaptchaEnum{
  CaptchaIsRequired = 10
}




