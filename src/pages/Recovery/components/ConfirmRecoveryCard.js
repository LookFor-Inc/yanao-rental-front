import React, {useRef} from 'react'
import PropTypes from 'prop-types'
import {useForm} from 'react-hook-form'
import {useHistory} from 'react-router-dom'
import Button from '@/components/Button'
import Card from '@/components/Card/Card'
import FormGroup from '@/components/FormGroup'
import Input from '@/components/Input'
import {passwordRepeatValidator, passwordValidator} from '@/data/forms/validators'
import {resetUserPassword} from '@/services/authService'
import HttpStatus from '@/utils/httpStatus'

/**
 * Карточка сброса пароля
 * @param {string} token Токен сброса пароля
 * @returns {JSX.Element} Элемент карточки
 */
function ConfirmRecoveryCard({token}) {
  const {register, handleSubmit, watch, formState: {errors}} = useForm()
  const password = useRef({})
  const history = useHistory()
  password.current = watch('password', '')

  /**
   * Обработчик формы
   * @param {object} data Данные
   * @returns {void}
   */
  const onSubmit = async data => {
    try {
      const res = await resetUserPassword(token, data.password)

      if (res.status === HttpStatus.OK) {
        history.push({
          pathname: '/auth/recovery/confirm/complete',
          state: {complete: true}
        })
      }
    } catch (e) {}
  }

  return (
    <Card>
      <Card.Body size='lg'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            label='Новый пароль'
            type='password'
            placeholder='•••••'
            error={errors.password}
            {...register('password', passwordValidator)}
          />
          <Input
            label='Повторите пароль'
            type='password'
            placeholder='•••••'
            error={errors.password_repeat}
            {...register('password_repeat', passwordRepeatValidator(password.current))}
          />
          <FormGroup>
            <Button
              type='submit'
              color='primary'
              className='w-full'
            >Сбросить пароль</Button>
          </FormGroup>
        </form>
      </Card.Body>
    </Card>
  )
}

ConfirmRecoveryCard.propTypes = {
  token: PropTypes.string
}

export default ConfirmRecoveryCard
