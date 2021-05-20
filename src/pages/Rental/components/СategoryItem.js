import React from 'react'
import {string} from 'prop-types'

function CategoryItem({title, logo}) {
  return (
    <div className='flex flex-col justify-between items-center text-gray-200 p-4 border-2'>
      <img src={logo} alt={title} className='object-contain w-24'/>
      <span className='text-gray-800'>{title}</span>
    </div>
  )
}

CategoryItem.propTypes = {
  title: string,
  logo: string
}

export default CategoryItem
