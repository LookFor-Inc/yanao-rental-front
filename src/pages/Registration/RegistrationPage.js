import React from 'react'
import {Link} from 'react-router-dom'
import RegistrationCard from '@/pages/Registration/components/RegistrationCard'

/**
 * Страница регистрации
 * @returns {JSX.Element} Элемент страницы
 */
function RegistrationPage() {
  return (
    <div className='max-w-md w-full space-y-8'>
      <div>
        <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
            Создание нового аккаунта
        </h2>
        <p className='mt-2 text-center text-sm text-gray-600'>
            Уже есть аккаунт?
          {' '}
          <Link
              to='/auth/login'
              className='font-medium text-primary hover:text-primaryDark transition-colors'
          >
              Авторизуйтесь
          </Link>
        </p>
      </div>
      <RegistrationCard />
    </div>
  )
}

RegistrationPage.propTypes = {}

export default RegistrationPage
