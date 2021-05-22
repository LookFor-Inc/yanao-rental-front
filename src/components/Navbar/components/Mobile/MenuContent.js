import React from 'react'
import {Link} from 'react-router-dom'
import Button from '@/components/Button'
import NAV_TABS from '@/data/navTabs'

/**
 * Компонент содержимого меню для мобильных устройств
 * @returns {JSX.Element} Содержимое меню
 */
function MenuContent() {
  return (
    <>
      <div className='flex flex-col space-y-4'>
        {NAV_TABS.MAIN.map(
          ({path, text, Icon}) =>
            <Link
              key={path}
              to={path}
              className='-m-3 p-3 flex items-center rounded-md hover:bg-gray-50'
            >
              <Icon className='flex-shrink-0 h-6 w-6 text-primary' />
              <span className='ml-4 font-medium text-gray-900'>{text}</span>
            </Link>
        )}
      </div>
      <div className='flex flex-col space-y-4'>
        <Link to='/auth/register'>
          <Button
            className='w-full'
            color='primary'
          >
            Зарегистрироваться
          </Button>
        </Link>
        <p className='text-center font-medium text-gray-500'>
          <span>Есть аккаунт? </span>
          <Link
            to='/auth/login'
            className='text-primary hover:text-indigo-500'
          >
            Войти
          </Link>
        </p>
      </div>
    </>
  )
}

export default MenuContent
