export const composeValidators = (...validators) => (value) =>
  validators.reduce((error, validator) => error || validator(value), undefined)

export const required = (value) =>
  value ? undefined : 'Поле обязательно для заполнения'

export const maxLength = (max) => {
  return (value) => {
    return value.length > max
      ? `Максимальное количество символов: ${max}`
      : undefined
  }
}

export const minLength = (min) => {
  return (value) =>
    value.length < min ? `Минимальное количество символов: ${min}` : undefined
}
