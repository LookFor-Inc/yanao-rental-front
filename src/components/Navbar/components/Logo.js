import React from 'react'
import {Link} from 'react-router-dom'

/**
 * Компонент логотипа сайта в нафигационном меню
 * @returns {JSX.Element} Логотип
 */
function Logo() {
  return (
    <div className='flex justify-start sm:mr-10 lg:mr-0 lg:w-0 lg:flex-1'>
      <div className='hidden md:block'>
        <Link to='/'>
          <div className='flex space-x-4'>
            <h3 className='font-semibold text-lg lg:text-2xl tracking-tight'>YANAO Sharing</h3>
          </div>
        </Link>
      </div>
      <div className='block md:hidden'>
        <Link to='/'>
          <h3 className='font-semibold text-xl tracking-tight'>Indoor Schemes</h3>
        </Link>
      </div>
    </div>
  )
}

export default Logo
