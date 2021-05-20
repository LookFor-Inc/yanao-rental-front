import React, {useState, useEffect} from 'react'
import {useForm, useWatch} from 'react-hook-form'
import {useHistory} from 'react-router-dom'
import Button from '@/components/Button'
import Card from '@/components/Card/Card'
import FormGroup from '@/components/FormGroup'
import Input from '@/components/Input'
import {emailValidator} from '@/data/forms/validators'
import {sendResetPasswordLink} from '@/services/authService'
import HttpStatus from '@/utils/httpStatus'

/**
 * Карточка восстановления пароля
 * @returns {JSX.Element} Элемент карточки
 */
function RecoveryCard() {
  const {register, control, handleSubmit, formState: {errors}} = useForm()
  const emailField = useWatch({control, name: 'email'})
  const [emailError, setEmailError] = useState()
  const history = useHistory()

  useEffect(() => {
    setEmailError()
  }, [emailField])

  /**
   * Обработчик формы
   * @param {object} data Данные
   * @returns {void}
   */
  const onSubmit = async data => {
    try {
      const res = await sendResetPasswordLink(data.email)

      if (res.status === HttpStatus.OK) {
        history.push({
          pathname: '/auth/recovery/check-email',
          state: {email: data.email}
        })
      }
    } catch (e) {
      if (e.response.status === HttpStatus.NOT_FOUND) {
        setEmailError('Пользователь не найден')
      }
    }
  }

  return (
    <Card>
      <Card.Body size='lg'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
              label='Email'
              placeholder='your@email.com'
              error={errors.email || emailError}
              {...register('email', emailValidator)}
          />
          <FormGroup>
            <Button
              type='submit'
              color='primary'
              className='w-full'
            >Восстановить</Button>
          </FormGroup>
        </form>
      </Card.Body>
      <Card.Footer>
        <p className='text-xs text-gray-500'>
          <span>На данный email будет отправлено письмо с ссылкой на изменение пароля от аккаунта.</span>
        </p>
      </Card.Footer>
    </Card>
  )
}

export default RecoveryCard
