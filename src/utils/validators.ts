export type FieldValidatorType = (value: string) => string | undefined


export const composeValidators = (...validators: Array<FieldValidatorType>) => (value: string) =>
  validators.reduce((error: string | undefined, validator) => error || validator(value), undefined)


export const required: FieldValidatorType = (value) =>
  value ? undefined : 'Поле обязательно для заполнения'


export const maxLength = (max: number): FieldValidatorType => {
  return (value) => {
    return value.length > max
      ? `Максимальное количество символов: ${max}`
      : undefined
  }
}


export const minLength = (min: number): FieldValidatorType => {
  return (value) =>
    value.length < min ? `Минимальное количество символов: ${min}` : undefined
}
