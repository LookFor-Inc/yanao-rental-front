import React from 'react'
import PropTypes from 'prop-types'

/**
 * Общий макет страницы
 * @param {element} children Дочерние элементы
 * @returns {JSX.Element} Макет
 */
function PageLayout({children}) {
  return (
    <>
      <p>Navbar</p>
      {children}
      <p>Footer</p>
    </>
  )
}

PageLayout.propTypes = {
  children: PropTypes.element.isRequired
}

export default PageLayout
