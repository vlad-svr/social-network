import React from 'react';
import s from './Photos.module.css'
import {PhotosType} from "../../../types/types";


type PropsType = { photos: PhotosType }
const Photos: React.FC<PropsType> = props => {
    const photos = [props.photos.small, props.photos.large]
    return (
        <div className={s.main_photos}>
            <div className="card__title">Мои фотографии<span>127</span></div>
            <div className={s.list}>
                {photos.map((url, ind) => {
                    if (!url) return false
                    return  <div key={url + ind} className={s.item}>
                                <img className={s.img}
                                src={url} alt={'photo' + ind}/>
                            </div>
                })}
            </div>
        </div>
    )
}

export default Photos
