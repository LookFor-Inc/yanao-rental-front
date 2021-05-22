import React from 'react'
import NavTab from '@/components/Navbar/components/NavTab'
import NAV_TABS from '@/data/navTabs'

/**
 * Компонент списка навигационных ссылок в навигационном меню
 * @returns {JSX.Element} Ссылки в навигационном меню
 */
function NavTabList() {
  return (
    <ul className='hidden md:flex space-x-10 h-full'>
      {NAV_TABS.MAIN.map(({path, text}) =>
        <NavTab
          key={path}
          path={path}
          text={text}
        />
      )}
    </ul>
  )
}

export default NavTabList
