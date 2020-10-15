import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


const Dialogs = (props) => {
    const dialogsElements = props.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id} />)

    const messagesElements = props.messages.map(m => <Message key={m.id} message={m.message} myMessage={m.myMessage} />)


    function onChangeMessageText(e) {
        props.changeMessageText(e.target.value)
    }

    function onSendMessage() {
        props.sendMessage()
    }

    return (
        <div className={'card ' + s.dialogs}>
            <div className={s.title}><h1>Диалоги</h1></div>
            <div className={s.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={s.messages_items}>
                <div className={s.messages}>
                    {messagesElements}
                </div>
                <div className={s.form_message}>
                    <textarea
                        placeholder='Напишите сообщение...'
                        value={props.newMessageText}
                        className={s.textarea}
                        onChange={onChangeMessageText}/>
                    <button onClick={onSendMessage} className='button_blue'>Отправить</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs
