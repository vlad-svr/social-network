import React from 'react';


const Profile = () => {
    return (
        <div className="main">
            <div className="card main-avatar">
                <a className="main-avatar__link" href="/">
                    <img className="main-avatar__img" src="https://sun9-26.userapi.com/impf/c837737/v837737799/2b977/eRmA60iM_p0.jpg?size=200x0&quality=90&crop=275,166,1308,1864&sign=8cdbcaf2541ab8dc1f2948e324563ba0&ava=1" alt="avatar"/>
                </a>
                <button className="main-avatar__button button_gray">Редактировать</button>
            </div>
            <div className="card main-profile-info">
                <div className="main-profile-info__item">
                    <div className="main-profile-info__top">
                        <h1 className="h1">Владислав Свиридов</h1>
                    </div>
                </div>
                <div className="main-profile-info__item">
                    <div className="main-profile-info__row">
                        <div className="main-profile-info__label">День рождения:</div>
                        <div className="main-profile-info__labeled">25 мая 1995 г.</div>
                    </div>
                    <div className="main-profile-info__row">
                        <div className="main-profile-info__label">Город:</div>
                        <div className="main-profile-info__labeled">Брест</div>
                    </div>
                    <div className="main-profile-info__row">
                        <div className="main-profile-info__label">Место работы:</div>
                        <div className="main-profile-info__labeled">МЧС, Брестский ГОЧС, ПАСЧ №2</div>
                    </div>
                    <div className="main-profile-info__row">
                        <div className="main-profile-info__label">Сайт:</div>
                        <div className="main-profile-info__labeled">http://sviridov_vl</div>
                    </div>
                </div>
            </div>
            <div className="card main-friends">
                <div className="card-title">Друзья <span>127</span></div>
                <div className="main-friends__list">
                    <div className="main-friends__item">
                        <img className="mini-avatar" src="https://sun9-55.userapi.com/impg/AXvNmScVsv5y7RpzWA0Z8E_vXPstCZX6L_6i_Q/vJhhiwhC3yk.jpg?size=50x0&quality=88&crop=5,90,1185,1185&sign=6a999aa006b59ecbf174141a5ade65d3&ava=1" alt="avatar"/>
                        <span>Яна</span>
                    </div>
                    <div className="main-friends__item">
                        <img className="mini-avatar" src="https://sun9-55.userapi.com/impg/AXvNmScVsv5y7RpzWA0Z8E_vXPstCZX6L_6i_Q/vJhhiwhC3yk.jpg?size=50x0&quality=88&crop=5,90,1185,1185&sign=6a999aa006b59ecbf174141a5ade65d3&ava=1" alt="avatar"/>
                        <span>Яна</span>
                    </div>
                    <div className="main-friends__item">
                        <img className="mini-avatar" src="https://sun9-55.userapi.com/impg/AXvNmScVsv5y7RpzWA0Z8E_vXPstCZX6L_6i_Q/vJhhiwhC3yk.jpg?size=50x0&quality=88&crop=5,90,1185,1185&sign=6a999aa006b59ecbf174141a5ade65d3&ava=1" alt="avatar"/>
                        <span>Яна</span>
                    </div>
                    <div className="main-friends__item">
                        <img className="mini-avatar" src="https://sun9-55.userapi.com/impg/AXvNmScVsv5y7RpzWA0Z8E_vXPstCZX6L_6i_Q/vJhhiwhC3yk.jpg?size=50x0&quality=88&crop=5,90,1185,1185&sign=6a999aa006b59ecbf174141a5ade65d3&ava=1" alt="avatar"/>
                        <span>Яна</span>
                    </div>
                    <div className="main-friends__item">
                        <img className="mini-avatar" src="https://sun9-55.userapi.com/impg/AXvNmScVsv5y7RpzWA0Z8E_vXPstCZX6L_6i_Q/vJhhiwhC3yk.jpg?size=50x0&quality=88&crop=5,90,1185,1185&sign=6a999aa006b59ecbf174141a5ade65d3&ava=1" alt="avatar"/>
                        <span>Яна</span>
                    </div>
                    <div className="main-friends__item">
                        <img className="mini-avatar" src="https://sun9-55.userapi.com/impg/AXvNmScVsv5y7RpzWA0Z8E_vXPstCZX6L_6i_Q/vJhhiwhC3yk.jpg?size=50x0&quality=88&crop=5,90,1185,1185&sign=6a999aa006b59ecbf174141a5ade65d3&ava=1" alt="avatar"/>
                        <span>Яна</span>
                    </div>
                    <div className="main-friends__item">
                        <img className="mini-avatar" src="https://sun9-55.userapi.com/impg/AXvNmScVsv5y7RpzWA0Z8E_vXPstCZX6L_6i_Q/vJhhiwhC3yk.jpg?size=50x0&quality=88&crop=5,90,1185,1185&sign=6a999aa006b59ecbf174141a5ade65d3&ava=1" alt="avatar"/>
                        <span>Яна</span>
                    </div>
                    <div className="main-friends__item">
                        <img className="mini-avatar" src="https://sun9-55.userapi.com/impg/AXvNmScVsv5y7RpzWA0Z8E_vXPstCZX6L_6i_Q/vJhhiwhC3yk.jpg?size=50x0&quality=88&crop=5,90,1185,1185&sign=6a999aa006b59ecbf174141a5ade65d3&ava=1" alt="avatar"/>
                        <span>Яна</span>
                    </div>
                    <div className="main-friends__item">
                        <img className="mini-avatar" src="https://sun9-55.userapi.com/impg/AXvNmScVsv5y7RpzWA0Z8E_vXPstCZX6L_6i_Q/vJhhiwhC3yk.jpg?size=50x0&quality=88&crop=5,90,1185,1185&sign=6a999aa006b59ecbf174141a5ade65d3&ava=1" alt="avatar"/>
                        <span>Яна</span>
                    </div>
                </div>
            </div>
            <div className="card main-photos">
                <div className="card-title">Мои фотографии<span>127</span></div>
                <div className="main-photos__list">
                    <div className="main-photos__item">
                        <img className="main-photos__img" src="https://sun9-76.userapi.com/c845120/v845120281/ad74f/_pvwATob4lw.jpg" alt="photo3"/>
                    </div>
                    <div className="main-photos__item">
                        <img className="main-photos__img" src="https://sun9-76.userapi.com/c845120/v845120281/ad74f/_pvwATob4lw.jpg" alt="photo2"/>
                    </div>
                    <div className="main-photos__item">
                        <img className="main-photos__img" src="https://sun9-76.userapi.com/c845120/v845120281/ad74f/_pvwATob4lw.jpg" alt="photo12"/>
                    </div>
                    <div className="main-photos__item">
                        <img className="main-photos__img" src="https://sun9-76.userapi.com/c845120/v845120281/ad74f/_pvwATob4lw.jpg" alt="photo1"/>
                    </div>
                </div>

            </div>
            <div className="card main-posts">
                <div className="main-posts__new-message">
                    <img className="mini-avatar" src="https://sun9-26.userapi.com/impf/c837737/v837737799/2b977/eRmA60iM_p0.jpg?size=50x0&quality=88&crop=412,564,1001,1001&sign=7057b5ff7fe1ecd59942f3b439037efc&ava=1" alt="avatar"/>
                    <textarea className="main-posts__message"
                              name="" id="" cols="30" rows="10" defaultValue="Что у Вас нового..."/>
                    <button className="button_blue">Опубликовать</button>
                </div>
                <div className="main-posts__old-message">
                    <img className="mini-avatar" src="https://sun9-26.userapi.com/impf/c837737/v837737799/2b977/eRmA60iM_p0.jpg?size=50x0&quality=88&crop=412,564,1001,1001&sign=7057b5ff7fe1ecd59942f3b439037efc&ava=1" alt="avatar"/>
                    <p className="main-posts__text-post">Что у Вас нового...</p>
                </div>
                <div className="main-posts__old-message">
                    <img className="mini-avatar" src="https://sun9-26.userapi.com/impf/c837737/v837737799/2b977/eRmA60iM_p0.jpg?size=50x0&quality=88&crop=412,564,1001,1001&sign=7057b5ff7fe1ecd59942f3b439037efc&ava=1" alt="avatar"/>
                    <p className="main-posts__text-post">Что у Вас нового...</p>
                </div>
                <div className="main-posts__old-message">
                    <img className="mini-avatar" src="https://sun9-26.userapi.com/impf/c837737/v837737799/2b977/eRmA60iM_p0.jpg?size=50x0&quality=88&crop=412,564,1001,1001&sign=7057b5ff7fe1ecd59942f3b439037efc&ava=1" alt="avatar"/>
                    <p className="main-posts__text-post">Что у Вас нового...</p>
                </div>

            </div>
            <div className="card main-video">
                <div className="card-title">Видеозаписи<span>127</span></div>

            </div>
            <div className="card main-audio">
                <div className="card-title">Аудиозаписи<span>127</span></div>

            </div>
        </div>
    )
}

export default Profile
