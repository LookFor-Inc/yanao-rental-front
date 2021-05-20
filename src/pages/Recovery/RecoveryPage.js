import React from 'react'
import {Link} from 'react-router-dom'
import RecoveryCard from '@/pages/Recovery/components/RecoveryCard'

/**
 * Страница восстановления пароля
 * @returns {JSX.Element} Элемент страницы
 */
function RecoveryPage() {
  return (
    <div className='max-w-md w-full space-y-8'>
      <div>
        <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
          Восстановление пароля
        </h2>
        <p className='mt-2 text-center text-sm text-gray-600'>
          Может всё же вспомнили?
          {' '}
          <Link
            to='/auth/login'
            className='font-medium text-primary hover:text-primaryDark transition-colors'
          >
            Авторизируйтесь!
          </Link>
        </p>
      </div>
      <RecoveryCard />
    </div>
  )
}

export default RecoveryPage
