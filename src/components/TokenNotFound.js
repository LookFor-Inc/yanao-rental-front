import React from 'react'
import {Link} from 'react-router-dom'
import ChevronLeftIcon from '@/assets/icons/Chevron/ChevronLeftIcon'
import TimesCircleIcon from '@/assets/icons/TimesCircleIcon'
import Button from '@/components/Button'

/**
 *
 * @returns {JSX.Element} Элемент
 */
function TokenNotFound() {
  return (
    <div>
      <TimesCircleIcon className='mx-auto h-16 w-auto text-error' />
      <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
      Токен не найден
      </h2>
      <p className='mt-2 text-center text-sm text-gray-600'>
      Как вы сюда попали?
      </p>
      <Link
      to='/auth/login'
      >
        <Button
        color='secondary'
        size='sm'
        icon={ChevronLeftIcon}
        className='mx-auto mt-4'
        >Авторизоваться</Button>
      </Link>
    </div>
  )
}

export default TokenNotFound
