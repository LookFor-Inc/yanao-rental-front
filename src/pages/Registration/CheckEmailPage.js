import React, {useEffect, useState} from 'react'
import {Link, useHistory, useLocation} from 'react-router-dom'
import ChevronLeftIcon from '@/assets/icons/Chevron/ChevronLeftIcon'
import EmailIcon from '@/assets/icons/EmailIcon'
import Button from '@/components/Button'
import Card from '@/components/Card/Card'

/**
 * Страница с информацией о подтверждения email
 * @returns {JSX.Element} Элемент страницы
 */
function CheckEmailPage() {
  const location = useLocation()
  const history = useHistory()
  const [email, setEmail] = useState()

  useEffect(() => {
    if (!location.state || !location.state.email) {
      history.push('/auth/login')
    } else {
      setEmail(location.state.email)
      history.replace({...history.location, state: undefined})
    }
  }, [])

  return (
    <div className='max-w-md w-full space-y-6'>
      <div className='text-center'>
        <EmailIcon className='mx-auto h-16 w-auto text-primary' />
        <h2 className='mt-6 text-3xl font-extrabold text-gray-900'>
          Подтвердите Email
        </h2>
        <p className='mt-2 text-gray-600'>
          Мы отправили электронное письмо на <span className='font-medium'>{email}</span>
        </p>
      </div>
      <Card>
        <Card.Body size='lg'>
          <h2 className='text-2xl font-medium text-gray-900'>
            Информация
          </h2>
          <div className='mt-2 text-gray-600'>
            <p>
              Вам необходимо подтвердить свой адрес электронной почты, чтобы продолжить.
            </p>
          </div>
          <div className='mt-6'>
            <Link
              to='/auth/login'
            >
              <Button
                color='secondary'
                size='sm'
                icon={ChevronLeftIcon}
              >Назад</Button>
            </Link>
          </div>
        </Card.Body>
        <Card.Footer>
          <p className='text-xs text-gray-500'>
            Если вы не получили письмо с подтверждением, проверьте папку «Спам».
          </p>
        </Card.Footer>
      </Card>
    </div>
  )
}

export default CheckEmailPage
