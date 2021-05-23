import React from 'react'
import {Link} from 'react-router-dom'
import NavTab from '@/components/Navbar/components/NavTab'
import {useToast} from '@/hooks/Toasts/useToast'

/**
 * Компонент списка навигационных ссылок в навигационном меню
 * @returns {JSX.Element} Ссылки в навигационном меню
 */
function NavTabList() {
  const toast = useToast()

  return (
    <ul className='hidden md:flex space-x-10 h-full'>
      <NavTab
        path={'/rental/list'}
        text={'Поиск по прокатам'}
      />
      <li
        className='relative flex items-center font-medium text-sm lg:text-base hover:text-primary transition-colors'
      >
        <Link
          to='#'
          onClick={() => toast.push('Будет доступно позднее')}
        >
          <div
          className='flex h-full items-center nav-link hover:nav-link-active'
          >
            <h3>Поиск оборудования</h3>
          </div>
        </Link>
      </li>
    </ul>
  )
}

export default NavTabList
