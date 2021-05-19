import React, {useState} from 'react'
import BarsIcon from '@/assets/icons/BarsIcon'
import IconButton from '@/components/IconButton'
import Menu from '@/components/Navbar/components/Mobile/Menu'

/**
 * Компонент навигационного меню для мобильных устройств
 * @returns {JSX.Element} Навигационное меню для мобильных устройств
 */
function Mobile() {
  const [menuOpened, setMenuOpened] = useState(false)

  /**
   * Открытие/закрытие меню
   * @param {boolean} open Состояние открытости меню
   * @returns {void}
   */
  const toggleMenu = open => event => {
    event.preventDefault()
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }
    setMenuOpened(open)
  }
  return (
    <>
      <div className="-mr-2 -my-2 md:hidden">
        <IconButton
          className='text-gray-700 hover:bg-white'
          icon={<BarsIcon className='w-5 h-5' />}
          onClick={toggleMenu(true)}
        />
      </div>
      {menuOpened && <Menu onClose={toggleMenu(false)} />}
    </>
  )
}

export default Mobile
