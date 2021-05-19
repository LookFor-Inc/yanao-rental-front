import React, {useEffect, useState} from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import Button from '@/components/Button'
import Logo from '@/components/Navbar/components/Logo'
import Mobile from '@/components/Navbar/components/Mobile/Mobile'
import NavTabList from '@/components/Navbar/components/NavTabList'
import useScroll from '@/hooks/useScroll'

/**
 * Компонент навигационного меню страницы
 * @param {boolean} transparent Прозрачность
 * @returns {JSX.Element} Навигационное меню сайта
 */
function Navbar({transparent}) {
  const [scrollY] = useScroll()
  const [classes, setClasses] = useState()
  useEffect(() => {
    setClasses(classNames('z-40 sticky top-0 w-full relative transition duration-800', {
      'border-b border-gray-150 bg-white': !transparent || scrollY > 10
    }))
  }, [scrollY])

  return (
    <nav className={classes}>
      <div className='flex justify-between items-center md:justify-start h-16 px-4 sm:px-6 lg:px-8'>
        <Logo />
        <NavTabList />
        <div className='hidden md:flex items-center justify-end md:flex-1 lg:w-0'>
          <Link to='/auth/login'>
            <Button size='sm' color='primary'>Войти</Button>
          </Link>
        </div>
        <Mobile />
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  transparent: PropTypes.bool
}

export default Navbar
