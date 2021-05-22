import React from 'react'
import classNames from 'classnames'
import {bool, string} from 'prop-types'
import Card from '@/components/Card/Card'

function CategoryItem({name, imageUrl, available}) {
  const classes = classNames(
    'flex flex-col justify-between items-center text-gray-200 p-4 border-2',
    {
      '': available,
      'opacity-50': !available
    }
  )

  return (
    <Card className={classes}>
      <img src={imageUrl} alt={name} className='object-contain h-16'/>
      <span className='text-gray-800'>{name}</span>
    </Card>
  )
}

CategoryItem.propTypes = {
  name: string,
  imageUrl: string,
  available: bool
}

export default CategoryItem
