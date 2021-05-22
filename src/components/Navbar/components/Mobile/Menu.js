import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import MenuContent from '@/components/Navbar/components/Mobile/MenuContent'
import MenuHeader from '@/components/Navbar/components/Mobile/MenuHeader'

/**
 * Компонент меню для мобильных устройств
 * @param {func} onClose Функция сворачивания меню
 * @returns {JSX.Element} Меню для мобильных устройст
 */
function Menu({onClose}) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  return (
    <div className='absolute z-50 top-0 inset-x-0 transform h-screen overflow-y-scroll bg-white'>
      <MenuHeader onClick={onClose} />
      <div className='flex flex-col space-y-8 pt-2 px-4 sm:px-6'>
        <MenuContent />
      </div>
    </div>
  )
}

Menu.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func
}

export default Menu
