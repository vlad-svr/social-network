import React, {useRef} from 'react';
import s from './ModalAvatar.module.css'
import Preloader from '../../../common/Preloader/Preloader';


type PropsType = {
    isFetching: boolean
    setActiveModal: (activeModal: boolean) => void
    onSavePhoto: (photo: File) => void
    onClick?: (e: MouseEvent) => void
}


const ModalAvatar: React.FC<PropsType> = ({isFetching, setActiveModal, onSavePhoto}) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const onSendPhoto = async () => {
        if (inputRef.current?.files?.length) {
            await onSavePhoto(inputRef.current!.files![0])
            setActiveModal(false)
        }
    }

    return (
        <div className={s.container}>
            <div className={s.header}>
                Загрузка фотографии
                <span onClick={() => setActiveModal(false)} className={s.close}>X</span>
            </div>
            <div className={s.content}>
                { isFetching
                    ? <Preloader />
                    : <><p className={s.description}>Друзьям будет проще узнать Вас, если Вы загрузите свою настоящую фотографию.
                        Вы можете загрузить изображение в формате JPG, GIF или PNG.</p>
                    <input ref={inputRef} className={s.button} type="file"/>
                    <button disabled={isFetching} onClick={onSendPhoto} className='button_blue'>Загрузить</button></>
                }
            </div>
            <div className={s.footer}>
                <p>Если у Вас возникают проблемы с загрузкой, попробуйте выбрать фотографию меньшего размера.</p>
            </div>
        </div>
    )
}

export default ModalAvatar
