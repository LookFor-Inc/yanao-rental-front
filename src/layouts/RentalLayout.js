import React from 'react'
import PropTypes from 'prop-types'
import RentalHeader from '@/pages/Rental/components/RentalHeader'

/**
 * Макет с серым фоном
 * @param {element} children Дочерние элементы
 * @returns {JSX.Element} Макет страницы
 */
function RentalLayout({children}) {
  return (
    <div className='flex flex-col items-center w-full h-full bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8'>
      <RentalHeader />
      {children}
    </div>
  )
}

RentalLayout.propTypes = {
  children: PropTypes.element.isRequired
}

export default RentalLayout
