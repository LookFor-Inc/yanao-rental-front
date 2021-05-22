import React from 'react'
import PropTypes from 'prop-types'
import Container from '@/components/Container'
import Navbar from '@/components/Navbar/Navbar'
import RentalHeader from '@/pages/Rental/components/RentalHeader'

/**
 * Макет с серым фоном
 * @param {element} children Дочерние элементы
 * @returns {JSX.Element} Макет страницы
 */
function RentalLayout({children}) {
  return (
    <>
      <Navbar />
      <div className='flex flex-col items-center w-full h-full bg-gray-100 min-h-screen'>
        <Container>
          <RentalHeader />
          {children}
        </Container>
      </div>
    </>
  )
}

RentalLayout.propTypes = {
  children: PropTypes.element.isRequired
}

export default RentalLayout
