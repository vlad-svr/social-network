import React, {useEffect, useState} from 'react'
import s from './ProfileStatus.module.css'

const ProfileStatus = (props) => {
    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const onActivateEditMode = () => {
        setEditMode(true)
    }

    const onDeactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onClickEnter = e => e.key !== 'Enter' || onDeactivateEditMode()

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
            onClick={onActivateEditMode}
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
                onKeyPress={onClickEnter}
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

export default ProfileStatus
