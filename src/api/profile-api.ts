import {PhotosType, ProfileType} from "../types/types";
import {getDataResponse, instance, APIResponseType} from "./api";


type SavePhotoDataType = { photos: PhotosType }


export const profileAPI = {
    getProfile(id: number) {
        return instance.get<ProfileType>(`/profile/${id}`).then(getDataResponse)
    },

    getUserStatus(userId: number) {
        return instance.get<string>(`/profile/status/${userId}`).then(getDataResponse)
    },

    updateStatus(status: string) {
        return instance.put<APIResponseType>(`/profile/status`, {status}).then(getDataResponse)
    },

    savePhoto(imageFile: Blob) {
        const formData = new FormData();
        formData.append('image', imageFile)
        return instance.put<APIResponseType<SavePhotoDataType>>('/profile/photo', formData, {
            headers: {'Content-Type': 'multipart/form-data'}
        }).then(getDataResponse)
    },

    saveProfile(profile: ProfileType) {
        return instance.put<APIResponseType>('/profile', profile).then(getDataResponse)
    }
}
