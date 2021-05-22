import React from 'react'
import {Link} from 'react-router-dom'
import LoginCard from '@/pages/Login/components/LoginCard'

/**
 * Страница авторизации
 * @returns {JSX.Element} Элемент страницы
 */
function LoginPage() {
  return (
    <div className='max-w-md w-full space-y-8'>
      <div>
        <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
          Войдите в свой аккаунт
        </h2>
        <p className='mt-2 text-center text-sm text-gray-600'>
          Нет аккаунта?
          {' '}
          <Link
            to='/auth/registration'
            className='font-medium text-primary hover:text-primaryDark transition-colors'
          >
            Зарегистрируйтесь
          </Link>
        </p>
      </div>
      <LoginCard />
    </div>
  )
}

LoginPage.propType = {}

export default LoginPage
