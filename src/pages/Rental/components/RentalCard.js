import React from 'react'
import {Link} from 'react-router-dom'
import Card from '@/components/Card/Card'

// eslint-disable-next-line react/prop-types
function RentalCard({name, id, address, img}) {
  return (
    <div role='presentation'>
      <Card className='transition transform p-6 mb-6 rounded-lg shadow-md
      cursor-pointer flex focus:outline-none bg-white'>
        <Link to={`/rental/${id}`} key={id}
              className='w-full'>
          <div>
            <div className='flex items-center justify-between w-full space-x-4'>
              <div className='flex space-x-4'>
                <div className='flex-none w-16 h-16 justify-center text-xs'>
                  <img
                    className='max-w-full max-h-full rounded-md'
                    src={img}
                    alt={name}
                  />
                </div>
                <div className='flex flex-col justify-between w-full'>
                  <div
                    className='font-medium text-gray-900'
                  >
                    {name}
                  </div>
                  <div>
                    {address}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </Card>
    </div>
  )
}

export default RentalCard
