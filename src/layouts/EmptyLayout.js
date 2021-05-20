import React from 'react'
import PropTypes from 'prop-types'

/**
 * Макет с серым фоном
 * @param {element} children Дочерние элементы
 * @returns {JSX.Element} Макет страницы
 */
function EmptyLayout({children}) {
  return (
    <div className='bg-gray-100 min-h-screen flex justify-center items-center py-12 px-4 sm:px-6 lg:px-8'>
      {children}
    </div>
  )
}

EmptyLayout.propTypes = {
  children: PropTypes.element.isRequired
}

export default EmptyLayout
