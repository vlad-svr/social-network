import React, {useState} from "react";
import cn from "classnames";
import s from "./ChatPage.module.css";
import AddMessageForm, {NewMessageFormType} from "../../components/Dialogs/AddMessageForm/AddMessageForm";
import {useSelector} from "react-redux";
import Message from "../../components/Dialogs/Message/Message";
import {getUserIdSelector} from "../../redux/auth-selectors";


const wsChannel = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')

export type ChatMessageType = {
    message: string
    photo: string
    userId: number
    userName: string
}


const ChatPage: React.FC = () => {
    return (
        <div className={cn('card', s.container)}>
            <Chat />
        </div>
    )
}

const Chat: React.FC = () => {
    const [messages, setMessages] = useState<ChatMessageType[]>([])
    const myId = useSelector(getUserIdSelector)

    const loadingMessages = (e: MessageEvent) => {
        console.log(JSON.parse(e.data))
        setMessages((prevMessages) => {
            console.log(prevMessages)
            return [...prevMessages, ...JSON.parse(e.data)]
        })
    }

    React.useEffect(() => {
        wsChannel.addEventListener('message', loadingMessages)
        return () => {
            wsChannel.removeEventListener('message', loadingMessages)
        }
    }, [])

    const onSendMessage = (data: NewMessageFormType):Promise<void> => {
        return Promise.resolve(wsChannel.send(data.newMessageBody))
    }

    const messagesElements = messages.map((m: ChatMessageType, index) => (
        <Message key={index + Date.now()} isMyMessage={m.userId === myId} item={m}/>
    ))

    return (
            <div className={s.messages_items}>
                <div className={s.messages}>{messagesElements}</div>
                <div className={s.form_message}>
                    <AddMessageForm onSubmit={onSendMessage} />
                </div>
            </div>
    )
}

export default ChatPage
