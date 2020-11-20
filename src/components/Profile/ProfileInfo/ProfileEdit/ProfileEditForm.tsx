import React from 'react'
import { Form, Field } from 'react-final-form'
import cn from 'classnames'
import s from './ProfileEditForm.module.css'
import {Input, Textarea} from '../../../common/FormsControl/FormsControl';
import styleFormControl from '../../../common/FormsControl/FormsControl.module.css';
import {stringsToUpperCase} from '../../../../utils/core'
import {ErrorType, ProfileType} from "../../../../types/types";


type PropsType = {
    profile: ProfileType
    editModeProfile: (editModeProfile: boolean) => void
    saveProfile: (profile: ProfileType) => Promise<void | ErrorType>
}
const ProfileEditForm: React.FC<PropsType> = ({profile, editModeProfile, saveProfile}) => {
    const onChangeCancel = () => editModeProfile(false)

    return (
      <Form initialValues={profile}
            onSubmit={saveProfile}
            render={({ submitError, handleSubmit, hasValidationErrors, submitting }) => {
      return (
          <form onSubmit={handleSubmit} className={s.edit_profile}>
              <div>
                  <h1 className={s.title}>Редактирование профиля</h1>
              </div>
              <div className={s.item}>
                  <span className={s.title_field}>Ваше имя:</span>
                  <Field<string>
                      name='fullName'
                      className='input'
                      type="text"
                      placeholder="Ваше имя"
                      component={Input}
                  />
              </div>
              <div className={s.item}>
                  <span className={s.title_field}>В поиске работы?</span>
                  <div className={s.checkbox_row}>
                      <label className={s.label} htmlFor="lookingForAJobTrue">Да
                      <Field<string>
                          name="lookingForAJob"
                          id='lookingForAJobTrue'
                          format={value => String(value)}
                          type="radio"
                          value='true'
                          component={Input}
                      />
                      </label>
                      <label className={s.label} htmlFor="lookingForAJobFalse">Нет
                      <Field<string>
                          name="lookingForAJob"
                          id='lookingForAJobFalse'
                          format={value => String(value)}
                          type="radio"
                          value='false'
                          component={Input}
                      />
                      </label>
                  </div>
              </div>
              <div className={cn(s.item, s.column)}>
                  <span className={s.title_column_field}>Ваши профессиональные скиллы:</span>
                  <Field<string>
                      name='lookingForAJobDescription'
                      className={cn('textarea', s.textarea)}
                      component={Textarea}
                      placeholder="Опишите имеющиеся у Вас навыки..."
                  />
              </div>
              <div className={cn(s.item, s.column)}>
                  <span className={s.title_column_field}>Обо мне:</span>
                  <Field<string>
                      name='aboutMe'
                      className={cn('textarea', s.textarea)}
                      component={Textarea}
                      placeholder="Напишите о себе..."
                  />
              </div>
              <div className={cn(s.label, s.contact_title)}><h3>Контакты:</h3></div>
              {Object.keys(profile.contacts).map((key, ind) => {
                  return (
                      <div key={ind} className={s.item}>
                          <span className={s.title_field}>{stringsToUpperCase(key)}:</span>
                          <Field<string>
                              showSpan={false}
                              name={`contacts.${key}`}
                              className='input'
                              type="text"
                              placeholder={stringsToUpperCase(key)}
                              component={Input}
                          />
                      </div>)
              })}
              {submitError && (
                  <div>
                      <span className={cn(styleFormControl.span, s.span)}>{submitError}</span>
                  </div>
              )}
              <div className={s.control}>
                  <button className={cn('button_blue', s.submit)}
                          type='submit'
                          disabled={submitting || hasValidationErrors}
                  >Сохранить</button>
                  <button onClick={onChangeCancel} className='button_gray'>Отменить изменения</button>
              </div>
          </form>
      )
    }}
  />
  )
}

export default ProfileEditForm
