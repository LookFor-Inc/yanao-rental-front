import React from 'react'
import PropTypes from 'prop-types'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'

/**
 * Общий макет страницы
 * @param {element} children Дочерние элементы
 * @param {any} props Доп. свойства
 * @returns {JSX.Element} Макет
 */
function PageLayout({children, ...props}) {
  return (
    <div {...props}>
      <Navbar transparent />
      {children}
      <Footer />
    </div>
  )
}

PageLayout.propTypes = {
  children: PropTypes.element.isRequired,
  props: PropTypes.any
}

export default PageLayout
