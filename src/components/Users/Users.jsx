import React from 'react';
import Filters from './Filters/Filters';
import s from './Users.module.css'
import * as axios from 'axios';
import userPhoto from '../../assets/images/no-avatar.png'


class Users extends React.Component {
    constructor(props) {
        super(props);
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }
    render() {
        return (
            <div className={s.users}>
                <div className='card '>
                    <div className={s.header}>
                        Люди
                        <span className={s.count_people}>123</span>
                    </div>
                    <div className={s.search}>
                        Search
                    </div>
                    <div className={s.users_list}>
                        {
                            this.props.users.map(user => (
                                <div key={user.id} className={s.users_card}>
                                    <a href="/12323"><img className='mini_avatar_80' src={user.photos.small ? user.photos.small : userPhoto} alt="avatar"/></a>
                                    <div className={s.users_info}>
                                        <div className={s.label}>
                                            <a className={"link_normalize " + s.name} href="/12323">{user.name}</a>
                                        </div>
                                        <span className={s.label}>{`${"user.location.city"}, ${"user.location.country"}`}</span>
                                        <span className={s.label}>{user.status}</span>
                                    </div>
                                    <div className={s.users_control}>
                                        {user.followed
                                            ? <button onClick={() => {this.props.unfollow(user.id)}} className='button_blue'>Отписаться</button>
                                            : <button onClick={() => {this.props.follow(user.id)}} className='button_blue'>Подписаться</button>
                                        }
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className={s.show_btn}>
                        <button className="button_blue">Показать еще</button>
                    </div>
                </div>
                <div className='card '>
                    <Filters />
                </div>
            </div>
        )
    }
}

export default Users
