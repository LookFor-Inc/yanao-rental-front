import {checkEmailAvailability} from '@/services/userService'

const emailValidator = {
  required: {
    value: true,
    message: 'Вы должны ввести email'
  },
  pattern: {
    message: 'Это не email',
    value: /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]+)$/
  }
}

const registrationEmailValidator = {
  ...emailValidator,
  validate: async value => await checkEmailAvailability(value) || 'Email занят'
}

const loginEmailValidator = {
  ...emailValidator
}

const passwordValidator = {
  required: {
    value: true,
    message: 'Вы должны ввести пароль'
  },
  minLength: {
    value: 6,
    message: 'Минимальная длина 6 символов'
  },
  maxLength: {
    value: 64,
    message: 'Максимальная длина 64 символа'
  }
}

/**
 * Валидатор подтверждения пароля
 * @param {string} passwordValue Значение исходного пароля
 * @returns {object} Объект валидатора
 */
const passwordRepeatValidator = passwordValue => {
  return {
    required: {
      value: true,
      message: 'Вы должны подтвердить пароль'
    },
    validate: value => value === passwordValue || 'Пароли не совпадают'
  }
}

export {
  emailValidator,
  loginEmailValidator,
  registrationEmailValidator,
  passwordValidator,
  passwordRepeatValidator
}
