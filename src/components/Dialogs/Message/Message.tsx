import React from 'react';
import cn from 'classnames'
import s from './Message.module.css'
import {ChatMessageType} from "../../../pages/Chat/ChatPage";
import {RouterManager} from "../../../RouterManager";
import { Link } from 'react-router-dom';


type PropsType = {
    isMyMessage: boolean
    item: ChatMessageType
}
const Message: React.FC<PropsType> = ({isMyMessage, item}) => {
    const isMyMessageClass = isMyMessage ? s.message + ' ' + s.my_message : s.message
    return (
        <div className={isMyMessageClass}>
            <Link to={RouterManager.profile.getUserProfile(item.userId)}>
                <img className={cn('mini_avatar', s.avatar)} src={item.photo} alt="avatar"/>
            </Link>
            <div className={s.item}>
                <Link className='link_normalize' to={RouterManager.profile.getUserProfile(item.userId)}>
                <span>{item.userName}</span>
                </Link>
                <p>{item.message}</p>
            </div>
        </div>
    )
}

export default Message
