import React from 'react'
import {string} from 'prop-types'
import Card from '@/components/Card/Card'

function RentalItem({name, address}) {
  return (
    <Card className='transition duration-750 ease-in transform hover:scale-101'>
      <Card.Body size='md'>
        <div className='flex flex-shrink space-x-4'>
          <div className='flex-none w-16 h-16 justify-center text-xs'>
            <img
              className='max-w-full max-h-full rounded-md'
              src={'image'}
              alt={name}
            />
          </div>
          <div className='flex flex-col justify-between w-full'>
            <h3 className='flex font-medium text-sm sm:text-base'>
              {name}
            </h3>
            {address &&
            <p className='flex mt-2 text-xs sm:text-sm line-clamp-2 sm:line-clamp-3'>
              {address}
            </p>}
          </div>
        </div>
      </Card.Body>
    </Card>
  )
}

RentalItem.propTypes = {
  name: string,
  address: string
}

export default RentalItem
