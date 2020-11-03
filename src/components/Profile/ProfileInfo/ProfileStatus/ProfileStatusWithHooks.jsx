import React, {useState} from 'react'
import s from './ProfileStatus.module.css'

const ProfileStatusWithHooks = (props) => {

    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)
    // const onClickOutside = (e) => {
    //     // this.onDeactivateEditMode()
    // }
    //
    const onActivateEditMode = () => {
        setEditMode(true)
    }
    //
    const onDeactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value.trim())
    }

    const myStatus = (
        <span onClick={onActivateEditMode} className={s.status + ' ' + s.my}>
            {props.status}
        </span>
    )

    const noMyStatus = (
        <span
            className={s.status + ' ' + s.my + ' ' + s.no_status}
        >
    изменить статус
  </span>
    )

    // const status = (
    //   <span className={s.status}>{props.status}</span>
    // )

    const statusInput = (
        <div className={s.editor_container}>
            <input
                onChange={onStatusChange}
                defaultValue={status}
                autoFocus={true}
                className={'input ' + s.input_status}
            />
            <button onClick={onDeactivateEditMode} className="button_blue">
                Сохранить
            </button>
        </div>
    )

    return (
        <div>
            {props.status ? myStatus : noMyStatus}
            {editMode ? statusInput : ''}
        </div>
    )
}

export default ProfileStatusWithHooks