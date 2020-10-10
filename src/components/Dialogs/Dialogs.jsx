import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {sendMessageCreater, updateNewMessageChangeCreater} from '../../redux/state';


const Dialogs = (props) => {
    const dialogsElements = props.state.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id} />)

    const messagesElements = props.state.messages.map(m => <Message key={m.id} message={m.message} myMessage={m.myMessage} />)

    const newMessageText = React.createRef()

    function changeMessageText() {
        props.dispatch(
            updateNewMessageChangeCreater(newMessageText.current.value))
    }

    function sendMessage() {
        props.dispatch(sendMessageCreater())
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
                        value={props.state.newMessageText}
                        ref={newMessageText}
                        className={s.textarea}
                        onChange={changeMessageText}/>
                    <button onClick={sendMessage} className='button_blue'>Отправить</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs
