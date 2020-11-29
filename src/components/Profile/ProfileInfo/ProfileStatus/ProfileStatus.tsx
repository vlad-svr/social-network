import React, {ChangeEvent, useEffect, useRef, useState} from 'react'
import s from './ProfileStatus.module.css'
import cn from 'classnames'


type PropsType = {
    isOwner: boolean
    status: string
    onUpdateStatus: (status: string) => void
}


const ProfileStatus: React.FC<PropsType> = (props) => {
    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)
    const statusMenuRef = useRef<HTMLDivElement>(null)

    useEffect(() => setStatus(props.status), [props.status])

    const onActivateEditMode = () => setEditMode(true)

    const onDeactivateEditMode = () => {
        setEditMode(false)
        props.onUpdateStatus(status)
    }

    const clickOutside = (e: MouseEvent) => {
        if (statusMenuRef.current?.contains(e.target as Node)) return
        setEditMode(false)
    }

    useEffect(() => {
        if (editMode) {
            document.addEventListener('click', clickOutside);
        } else {
            document.removeEventListener('click', clickOutside);
        }
        return () => document.removeEventListener('click', clickOutside);
    }, [editMode])

    const onClickEnter = (e: React.KeyboardEvent<HTMLDivElement>) => e.key !== 'Enter' || onDeactivateEditMode()

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => setStatus(e.currentTarget.value.trim())

    const myStatus = (
        <span onClick={onActivateEditMode}
            className={cn(s.status, s.my, {[s.no_status]: !props.status})}>
            {props.status || 'изменить статус'}
        </span>
    )

    const notMyStatus = <span className={s.status}>{props.status}</span>

    const statusInput = (
        <div ref={statusMenuRef} className={s.editor_container}>
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

    if (!props.isOwner) return props.status ? notMyStatus : <></>
    return (
        <div>
            {myStatus}
            {editMode && statusInput}
        </div>
    )
}

export default ProfileStatus
