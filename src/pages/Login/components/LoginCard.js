import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import {useForm, useWatch} from 'react-hook-form'
import {connect} from 'react-redux'
import {Link, useHistory} from 'react-router-dom'
import Button from '@/components/Button'
import Card from '@/components/Card/Card'
import Checkbox from '@/components/Checkbox'
import Divider from '@/components/Divider'
import FormGroup from '@/components/FormGroup'
import Input from '@/components/Input'
import SocialAuthButtons from '@/components/SocialAuthButtons'
import {loginEmailValidator, passwordValidator} from '@/data/forms/validators'
import {login, resetAuthError} from '@/store/Auth/actions'
import HttpStatus from '@/utils/httpStatus'

/**
 * Карточка авторизации
 * @param {number} authError Ошибка авторизации
 * @param {function} loginRequest Функция авторизации
 * @param {function} resetAuthError Функция удаления ошибки авторизации
 * @returns {JSX.Element} Элемент карточки
 */
function LoginCard({authError, loginRequest, resetAuthError}) {
  const {register, control, handleSubmit, formState: {errors}} = useForm()
  const emailField = useWatch({control, name: 'email'})
  const passwordField = useWatch({control, name: 'password'})
  const [emailError, setEmailError] = useState()
  const [passwordError, setPasswordError] = useState()
  const history = useHistory()

  useEffect(() => {
    switch (authError) {
      case HttpStatus.NOT_FOUND:
        setEmailError('Пользователь не найден')
        break
      case HttpStatus.UNAUTHORIZED:
        setPasswordError('Неверный пароль')
        break
      default:
        setEmailError()
        setPasswordError()
    }
  }, [authError])

  useEffect(() => {
    setEmailError()
    setPasswordError()

    if (authError) {
      resetAuthError()
    }
  }, [emailField])

  useEffect(() => {
    setPasswordError()

    if (authError) {
      resetAuthError()
    }
  }, [passwordField])

  /**
   * Обработчик формы
   * @param {object} data Данные
   * @returns {void}
   */
  const onSubmit = async data => {
    try {
      const res = await loginRequest(data)

      if (res.status === HttpStatus.OK) {
        history.push('/')
      }
    } catch (e) {}
  }

  return (
    <Card>
      <Card.Body size='lg'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            label='Email'
            placeholder='your@email.com'
            error={errors.email || emailError}
            {...register('email', loginEmailValidator)}
          />
          <Input
            label='Пароль'
            placeholder='•••••'
            type='password'
            error={errors.password || passwordError}
            {...register('password', passwordValidator)}
          />
          <FormGroup>
            <Button
              type='submit'
              color='primary'
              className='w-full'
            >Войти</Button>
          </FormGroup>
          <FormGroup className='flex justify-between pt-2'>
            <Checkbox
              label='Запомнить'
              {...register('remember')}
            />
            <Link
              to='/auth/recovery'
              className='text-sm text-primary font-medium hover:text-primaryDark transition-colors'
            >
              Забыл пароль?
            </Link>
          </FormGroup>
        </form>
        <Divider text='Или продолжите через' />
        <SocialAuthButtons />
      </Card.Body>
    </Card>
  )
}

LoginCard.propTypes = {
  authError: PropTypes.number,
  loginRequest: PropTypes.func,
  resetAuthError: PropTypes.func
}

/**
 * Получение состояния авторизации
 * @param {object} state Состояние
 * @returns {object} Значения состояний
 */
const mapState = state => {
  return {
    authError: state.auth.error
  }
}

/**
 * Получение функций авторизации
 * @param {function} dispatch Запрос на установку
 * @returns {object} Функции
 */
const mapDispatch = dispatch => {
  return {
    loginRequest: data => dispatch(login(data.email, data.password, data.remember)),
    resetAuthError: () => dispatch(resetAuthError())
  }
}

export default connect(mapState, mapDispatch)(LoginCard)
