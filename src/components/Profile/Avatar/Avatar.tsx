import React, {useState} from 'react';
import s from './Avatar.module.css'
import cn from 'classnames'
import defaultPhoto from '../../../assets/images/no-avatar.png'
import Modal from '../../common/Modal/Modal';
import ModalAvatar from './ModalAvatar/ModalAvatar';


type PropsType = {
    avatar: string | null
    savePhoto: (photo: File) => void
    isOwner: boolean
    isFetching: boolean
    userId: number
    editModeProfile: (editModeProfile: boolean) => void
}
const Avatar: React.FC<PropsType> = ({avatar, savePhoto, isOwner, isFetching, userId, editModeProfile}) => {
    const [activeModal, setActiveModal] = useState(false)
    const onEditModeProfile = () => editModeProfile(true)

    return (
        <div className={s.main_avatar}>
            <div className={s.avatar_content}>
                <a href={`/profile/${userId}`}><img className={s.img} src={avatar || defaultPhoto} alt="avatar"/></a>
                {isOwner &&
                    <div className={s.avatar_menu}>
                        <span onClick={() => setActiveModal(true)} className={s.avatar_menu_item}>Обновить фотографию</span>
                    </div>}
            </div>
            { activeModal &&
                <Modal><ModalAvatar isFetching={isFetching} setActiveModal={setActiveModal} savePhoto={savePhoto}/></Modal>}
            {isOwner &&
                <button onClick={onEditModeProfile} className={cn('button_gray', s.button)}>Редактировать</button>}
            {!isOwner &&
                <button className={cn('button_blue', s.button)}>Подписаться</button>}
        </div>
    )
}

export default Avatar
