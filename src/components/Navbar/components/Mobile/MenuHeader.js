import React from 'react'
import PropTypes from 'prop-types'
import CloseIcon from '@/assets/icons/CloseIcon'
import IconButton from '@/components/IconButton'
import Logo from '@/components/Navbar/components/Logo'

/**
 * Компонент верхней части меню для мобильных устройств
 * @param {func} onClick Функция нажатия на кнопку закрытия меню
 * @returns {JSX.Element} Верхняя часть меню для мобильных устройств
 */
function MenuHeader({onClick}) {
  return (
    <div className='flex justify-between items-center md:justify-start h-16 px-4 sm:px-6 lg:px-8'>
      <Logo />
      <div className='-mr-2'>
        <IconButton
          className='text-gray-400 hover:bg-white'
          icon={<CloseIcon className='w-6 h-6' />}
          onClick={onClick}
        />
      </div>
    </div>
  )
}

MenuHeader.propTypes = {
  onClick: PropTypes.func
}

export default MenuHeader
