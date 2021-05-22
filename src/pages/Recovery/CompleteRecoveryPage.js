import React, {useEffect} from 'react'
import {Link, useHistory, useLocation} from 'react-router-dom'
import CheckCircleIcon from '@/assets/icons/CheckCircleIcon'
import ChevronLeftIcon from '@/assets/icons/Chevron/ChevronLeftIcon'
import Button from '@/components/Button'

/**
 * Страница с информацией о подтверждения email
 * @returns {JSX.Element} Элемент страницы
 */
function CheckEmailPage() {
  const location = useLocation()
  const history = useHistory()

  useEffect(() => {
    if (!location.state || !location.state.complete) {
      // history.push('/auth/recovery')
    } else {
      history.replace({...history.location, state: undefined})
    }
  }, [])

  return (
    <div className='max-w-md w-full space-y-6'>
      <div className='text-center'>
        <CheckCircleIcon className='mx-auto h-16 w-auto text-success' />
        <h2 className='mt-6 text-3xl font-extrabold text-gray-900'>
          Пароль изменён
        </h2>
        <p className='mt-2 text-gray-600'>
          Теперь вы можете войти в свой аккаунт.
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
                className='mx-auto'
          >Авторизация</Button>
        </Link>
      </div>
    </div>
  )
}

export default CheckEmailPage
