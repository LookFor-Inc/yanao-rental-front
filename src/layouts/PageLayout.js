import React from 'react'
import PropTypes from 'prop-types'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'

/**
 * Общий макет страницы
 * @param {element} children Дочерние элементы
 * @returns {JSX.Element} Макет
 */
function PageLayout({children}) {
  return (
    <>
      <Navbar transparent />
      {children}
      <Footer />
    </>
  )
}

PageLayout.propTypes = {
  children: PropTypes.element.isRequired
}

export default PageLayout
