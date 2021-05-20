import React, {useRef} from 'react'
import {useForm} from 'react-hook-form'
import {useHistory} from 'react-router-dom'
import Button from '@/components/Button'
import Card from '@/components/Card/Card'
import Divider from '@/components/Divider'
import FormGroup from '@/components/FormGroup'
import Input from '@/components/Input'
import SocialAuthButtons from '@/components/SocialAuthButtons'
import {
  passwordRepeatValidator,
  passwordValidator,
  registrationEmailValidator
} from '@/data/forms/validators'
import {registerUser} from '@/services/authService'
import HttpStatus from '@/utils/httpStatus'

/**
 * Карточка регистрации
 * @returns {JSX.Element} Элемент карточки
 */
function RegistrationCard() {
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
      const res = await registerUser('renter', data.email, data.password)
      if (res.status === HttpStatus.OK) {
        history.push({
          pathname: '/auth/registration/check-email',
          state: {email: data.email}
        })
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
            error={errors.email}
            {...register('email', registrationEmailValidator)}
          />
          <Input
            label='Пароль'
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
            >Создать аккаунт</Button>
          </FormGroup>
        </form>
        <Divider text='Или с помощью' />
        <SocialAuthButtons />
      </Card.Body>
    </Card>
  )
}

export default RegistrationCard
