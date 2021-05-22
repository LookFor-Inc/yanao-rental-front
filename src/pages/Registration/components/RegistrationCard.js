import React, {useRef, useState} from 'react'
import {useForm} from 'react-hook-form'
import {useHistory} from 'react-router-dom'
import UserIcon from '@/assets/icons/UserIcon'
import UserTieIcon from '@/assets/icons/UserTieIcon'
import Button from '@/components/Button'
import Card from '@/components/Card/Card'
import FormGroup from '@/components/FormGroup'
import Input from '@/components/Input'
import SuperButton from '@/components/SuperButton'
import {passwordRepeatValidator, passwordValidator, registrationEmailValidator} from '@/data/forms/validators'
import {LANDLORD, RENTER} from '@/data/userTypes'
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
  const [userType, setUserType] = useState(RENTER)

  /**
   * Обработчик формы
   * @param {object} data Данные
   * @returns {void}
   */
  const onSubmit = async data => {
    try {
      const res = await registerUser(userType, data.email, data.password)
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
          <FormGroup>
            <div className='p-0.5 rounded-lg flex bg-gray-200 hover:bg-gray-300 transition-colors'>
              <SuperButton
                  className='flex-1'
                  icon={UserIcon}
                  active={userType === RENTER}
                  onClick={() => setUserType(RENTER)}
              >Арендатор</SuperButton>
              <SuperButton
                className='flex-1'
                icon={UserTieIcon}
                active={userType === LANDLORD}
                onClick={() => setUserType(LANDLORD)}
              >Арендадатель</SuperButton>
            </div>
          </FormGroup>
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
      </Card.Body>
    </Card>
  )
}

export default RegistrationCard
