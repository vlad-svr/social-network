import React from 'react';
import cn from 'classnames'
import s from './Modal.module.css'


type PropsType = {
    children: React.ReactNode
    onClosed: () => void
}
const Modal: React.FC<PropsType> = ({children, onClosed}) => {
    return  (
        <div onClick={onClosed} className={s.background}>
            <div onClick={(e) => e.stopPropagation()} className={cn('card', s.window)}>{children}</div>
        </div>
    )
}

export default Modal
