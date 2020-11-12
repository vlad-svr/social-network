import React, {useEffect, useState} from 'react'
import s from './ProfileStatus.module.css'
import cn from 'classnames'

const ProfileStatus = (props) => {
    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    useEffect(() => setStatus(props.status), [props.status])

    const onActivateEditMode = () => setEditMode(true)

    const onDeactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onClickEnter = e => e.key !== 'Enter' || onDeactivateEditMode()

    const onStatusChange = (e) => setStatus(e.currentTarget.value.trim())

    const myStatus = (
        <span onClick={onActivateEditMode}
            className={cn(s.status, s.my, {[s.no_status]: !props.status})}>
            {props.status || 'изменить статус'}
        </span>
    )

    const notMyStatus = <span className={s.status}>{props.status}</span>

    const statusInput = (
        <div className={s.editor_container}>
            <input
                onChange={onStatusChange}
                onKeyPress={onClickEnter}
                defaultValue={status}
                autoFocus={true}
                className={cn('input', s.input_status)}
            />
            <button onClick={onDeactivateEditMode} className="button_blue">
                Сохранить
            </button>
        </div>
    )

    if (!props.isOwner) return props.status && notMyStatus
    return (
        <div>
            {myStatus}
            {editMode && statusInput}
        </div>
    )
}

export default ProfileStatus
