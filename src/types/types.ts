export type PostsType = {
    id: number,
    message: string,
    likesCount: number
}
export type ContactsType = {
    github: string | null
    vk: string | null
    facebook: string | null
    instagram: string | null
    twitter: string | null
    website: string | null
    youtube: string | null
    mainLink: string | null
}
export type PhotosType = {
    small: string | null
    large: string | null
}
export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string | null
    aboutMe: string | null
    fullName: string
    contacts: ContactsType
    photos: PhotosType
}
export type UserType = {
    id: number
    name: string
    status: string | null
    photos: PhotosType
    followed: boolean
}

export type DialogType = {
    id: number
    name: string
}
export type MessagesType = {
    id: number
    message: string
    myMessage: boolean
}

export type ErrorType = {
    [key: string]: string
}

export type ErrorProfileType = {
    [key: string]: Array<JSX.Element> | { [key: string]: boolean }
}

export type LoginFormValuesType = {
    email: string;
    password: string;
    captcha?: string | null;
    rememberMe?: boolean;
}
