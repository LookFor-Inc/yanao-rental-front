import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import Button from '@/components/Button'
import CartPopover from '@/components/Navbar/components/CartPopover'
import Logo from '@/components/Navbar/components/Logo'
import Mobile from '@/components/Navbar/components/Mobile/Mobile'
import NavTabList from '@/components/Navbar/components/NavTabList'
import ProfileMenu from '@/components/Navbar/components/ProfileMenu'
import {logout} from '@/store/Auth/actions'

/**
 * Компонент навигационного меню страницы
 * @param {boolean} transparent Прозрачность
 * @param {boolean} isLoggedIn Авторизован ли пользователь
 * @param {function} logout Функция для разлогинивания пользователя
 * @returns {JSX.Element} Навигационное меню сайта
 */
function Navbar({transparent, isLoggedIn, logout}) {
  const classes = classNames('z-40 sticky top-0 w-full relative transition duration-800 bg-white',
    'border-b border-gray-150')

  return (
    <nav className={classes}>
      <div className='flex justify-between items-center md:justify-start h-16 px-4 sm:px-6 lg:px-8'>
        <Logo />
        <NavTabList />
        <div className='hidden md:flex items-center justify-end md:flex-1 lg:w-0'>
          <CartPopover />
          {isLoggedIn
            ? <ProfileMenu />
            : <Link to='/auth/login'>
              <Button size='sm' color='primary'>Войти</Button>
            </Link>
          }
        </div>
        <Mobile />
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  transparent: PropTypes.bool,
  isLoggedIn: PropTypes.bool,
  logout: PropTypes.func
}

/**
 * Получение состояния авторизации пользователя
 * @param {object} state Состояние
 * @returns {object} Значения состояний
 */
const authState = state => {
  return {
    isLoggedIn: state.auth.isLoggedIn
  }
}

/**
 * Установка этажа в redux
 * @param {function} dispatch Запрос на установку
 * @returns {object} Функция установки
 */
const authDispatch = dispatch => {
  return {
    logout: () => dispatch(logout())
  }
}

export default connect(authState, authDispatch)(Navbar)
