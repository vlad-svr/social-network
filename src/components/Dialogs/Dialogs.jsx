import React from 'react';
import s from './Dialogs.module.css'


const Dialogs = () => {
    return (
        <div className={'card ' + s.dialogs}>
            <div className={s.title}><h1>Диалоги</h1></div>
            <div className={s.messages}>
                <div className={s.message}>
                    <img className={'mini_avatar ' + s.avatar} src="https://sun9-7.userapi.com/impf/c847216/v847216869/1c0f40/4XgGJ3Viq68.jpg?size=50x0&quality=88&crop=10,17,1070,1070&sign=48ecd9e30a47c4140facc4a66223e850&ava=1" alt="avatar"/>
                    <div>
                        <span>Владислав</span>
                        <p>Привет, как дела?</p>
                    </div>
                </div>
                <div className={s.message}>
                    <img className={'mini_avatar ' + s.avatar} src="https://sun9-7.userapi.com/impf/c847216/v847216869/1c0f40/4XgGJ3Viq68.jpg?size=50x0&quality=88&crop=10,17,1070,1070&sign=48ecd9e30a47c4140facc4a66223e850&ava=1" alt="avatar"/>
                    <div>
                        <span>Владислав</span>
                        <p>Привет, хорошо</p>
                    </div>
                </div>
                <div className={s.message}>
                    <img className={'mini_avatar ' + s.avatar} src="https://sun9-7.userapi.com/impf/c847216/v847216869/1c0f40/4XgGJ3Viq68.jpg?size=50x0&quality=88&crop=10,17,1070,1070&sign=48ecd9e30a47c4140facc4a66223e850&ava=1" alt="avatar"/>
                    <div>
                        <span>Владислав</span>
                        <p>Чем занимаешься?</p>
                    </div>
                </div>
            </div>
            <div className={s.dialogs_items}>
                <a className='link_normalize' href="/#">
                    <div className={s.dialog}>
                        <img className={'mini_avatar ' + s.avatar} src="https://sun9-7.userapi.com/impf/c847216/v847216869/1c0f40/4XgGJ3Viq68.jpg?size=50x0&quality=88&crop=10,17,1070,1070&sign=48ecd9e30a47c4140facc4a66223e850&ava=1" alt=""/>
                        <span className={s.username}>Nastya</span>
                    </div>
                </a>
                <a className='link_normalize' href="/#">
                    <div className={s.dialog}>
                        <img className={'mini_avatar ' + s.avatar} src="https://sun9-7.userapi.com/impf/c847216/v847216869/1c0f40/4XgGJ3Viq68.jpg?size=50x0&quality=88&crop=10,17,1070,1070&sign=48ecd9e30a47c4140facc4a66223e850&ava=1" alt=""/>
                        <span className={s.username}>Vladislav</span>
                    </div>
                </a>
                <a className='link_normalize' href="/#">
                    <div className={s.dialog}>
                        <img className={'mini_avatar ' + s.avatar} src="https://sun9-7.userapi.com/impf/c847216/v847216869/1c0f40/4XgGJ3Viq68.jpg?size=50x0&quality=88&crop=10,17,1070,1070&sign=48ecd9e30a47c4140facc4a66223e850&ava=1" alt=""/>
                        <span className={s.username}>Alex</span>
                    </div>
                </a>
                <a className='link_normalize' href="/#">
                    <div className={s.dialog + ' ' + s.active}>
                        <img className={'mini_avatar ' + s.avatar} src="https://sun9-7.userapi.com/impf/c847216/v847216869/1c0f40/4XgGJ3Viq68.jpg?size=50x0&quality=88&crop=10,17,1070,1070&sign=48ecd9e30a47c4140facc4a66223e850&ava=1" alt=""/>
                        <span className={s.username}>Artem</span>
                    </div>
                </a>
                <a className='link_normalize' href="/#">
                    <div className={s.dialog}>
                        <img className={'mini_avatar ' + s.avatar} src="https://sun9-7.userapi.com/impf/c847216/v847216869/1c0f40/4XgGJ3Viq68.jpg?size=50x0&quality=88&crop=10,17,1070,1070&sign=48ecd9e30a47c4140facc4a66223e850&ava=1" alt=""/>
                        <span className={s.username}>Irina</span>
                    </div>
                </a>
                <a className='link_normalize' href="/#">
                    <div className={s.dialog}>
                        <img className={'mini_avatar ' + s.avatar} src="https://sun9-7.userapi.com/impf/c847216/v847216869/1c0f40/4XgGJ3Viq68.jpg?size=50x0&quality=88&crop=10,17,1070,1070&sign=48ecd9e30a47c4140facc4a66223e850&ava=1" alt=""/>
                        <span className={s.username}>Irina</span>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Dialogs
