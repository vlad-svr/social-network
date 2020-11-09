import React from 'react'
import { Form, Field } from 'react-final-form'
import cn from 'classnames'
import s from './ProfileEditForm.module.css'
import {Input, Textarea} from '../../../common/FormsControl/FormsControl';
import styleFormControl from '../../../common/FormsControl/FormsControl.module.css';


const ProfileEditForm = (props) => {
    const onChangeCancel = () => props.editModeProfile(false)

    return (
      <Form initialValues={props.profile}
            onSubmit={props.saveProfile}
            render={({ submitError, handleSubmit, hasValidationErrors, submitting }) => {
      return (
          <form onSubmit={handleSubmit} className={s.edit_profile}>
              <div>
                  <h1 className={s.title}>Редактирование профиля</h1>
              </div>
              <div className={s.item}>
                  <span className={s.title_field}>Ваше имя:</span>
                  <Field
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
                      <Field
                          name="lookingForAJob"
                          id='lookingForAJobTrue'
                          format={value => String(value)}
                          type="radio"
                          value='true'
                          component={Input}
                      />
                      </label>
                      <label className={s.label} htmlFor="lookingForAJobFalse">Нет
                      <Field
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
                  <Field
                      name='lookingForAJobDescription'
                      className={cn('textarea', s.textarea)}
                      component={Textarea}
                      placeholder="Опишите имеющиеся у Вас навыки..."
                  />
              </div>
              <div className={cn(s.item, s.column)}>
                  <span className={s.title_column_field}>Обо мне:</span>
                  <Field
                      name='aboutMe'
                      className={cn('textarea', s.textarea)}
                      component={Textarea}
                      placeholder="Напишите о себе..."
                  />
              </div>
              <div className={cn(s.label, s.contact_title)}><h3>Контакты:</h3></div>
              <div className={s.item}>
                  <span className={s.title_field}>GitHub:</span>
                  <Field
                      name='contacts.github'
                      className='input'
                      type="text"
                      placeholder="GitHub"
                      component={Input}
                  />
              </div>
              <div className={s.item}>
                  <span className={s.title_field}>VK:</span>
                  <Field
                      name='contacts.vk'
                      className='input'
                      type="text"
                      placeholder="Vk"
                      component={Input}
                  />
              </div>
              <div className={s.item}>
                  <span className={s.title_field}>Facebook:</span>
                  <Field
                      name='contacts.facebook'
                      className='input'
                      type="text"
                      placeholder="Facebook"
                      component={Input}
                  />
              </div>
              <div className={s.item}>
                  <span className={s.title_field}>Instagram:</span>
                  <Field
                      name='contacts.instagram'
                      className='input'
                      type="text"
                      placeholder="Instagram"
                      component={Input}
                  />
              </div>
              <div className={s.item}>
                  <span className={s.title_field}>Twitter:</span>
                  <Field
                      name='contacts.twitter'
                      className='input'
                      type="text"
                      placeholder="Twitter"
                      component={Input}
                  />
              </div>
              <div className={s.item}>
                  <span className={s.title_field}>Website:</span>
                  <Field
                      name='contacts.website'
                      className='input'
                      type="text"
                      placeholder="Website"
                      component={Input}
                  />
              </div>
              <div className={s.item}>
                  <span className={s.title_field}>YouTube:</span>
                  <Field
                      name='contacts.youtube'
                      className='input'
                      type="text"
                      placeholder="YouTube"
                      component={Input}
                  />
              </div>
              <div className={s.item}>
                  <span className={s.title_field}>MainLink:</span>
                  <Field
                      name='contacts.mainLink'
                      className='input'
                      type="text"
                      placeholder="MainLink"
                      component={Input}
                  />
              </div>
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
