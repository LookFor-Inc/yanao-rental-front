import React from 'react'
import PropTypes from 'prop-types'
import FooterLinkList from '@/components/Footer/components/FooterLinkList'

/**
 * Компонент футера страницы
 * @returns {JSX.Element} Футер страницы сайта
 */
function Footer({entire}) {
  return (
    <footer className='bg-gray-100 py-8'>
      <div className='container mx-auto'>
        {entire && <FooterLinkList />}
        <div className='text-sm text-center text-gray-400'>
          &copy; 2021 ЯНАО шеринг. Все права защищены.
        </div>
      </div>
    </footer>
  )
}

Footer.propTypes = {
  entire: PropTypes.bool
}

export default Footer
