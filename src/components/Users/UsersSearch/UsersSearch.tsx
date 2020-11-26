import { Field, FormikHelpers, Formik, Form } from 'formik';
import React from "react";
import s from './UsersSearch.module.css'
import cn from 'classnames'
import magnifierImage from '../../../assets/images/magnifier.png'
import {FilterUsersType} from "../../../redux/users-reducer";


type PropsType = {
    onFilterChanged: (filter: FilterUsersType) => void
}
type FormType = {
    term: string,
    friend: 'true' | 'false' | 'null'
}
const UsersSearch: React.FC<PropsType> = React.memo((props) => {
    return (
        <div className={s.search}>
            <UsersSearchForm {...props} />
        </div>
    )
})


const UsersSearchForm: React.FC<PropsType> = React.memo(({onFilterChanged}) => {
    const onHandlerSubmit = async (values: FormType,
                             { setSubmitting }: FormikHelpers<FormType>) => {
        const filter: FilterUsersType = {
            term: values.term,
            friend: values.friend === 'null' ? null : Boolean(values.friend)
        }
        await onFilterChanged(filter)
        setSubmitting(false);
    }

    return (
            <Formik
                initialValues={{term: '', friend: 'null'}}
                onSubmit={onHandlerSubmit}
            >
                {({ isSubmitting }) => (
                    <Form className={s.form}>
                        <img src={magnifierImage} alt="magnifier" className={s.icon}/>
                        <Field type="text" name="term"  placeholder="Поиск людей" className={s.input}/>
                        <Field name="friend" component="select" className={s.select}>
                            <option value="null">Все пользователи</option>
                            <option value="true">Только подписчики</option>
                            <option value="false">Только не подписчики</option>
                        </Field>
                        <button type="submit" disabled={isSubmitting} className={cn(s.button, 'button_blue')}>
                            Поиск
                        </button>
                    </Form>
                )}
            </Formik>
    )
})

export default UsersSearch
