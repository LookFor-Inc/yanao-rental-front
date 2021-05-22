import React from 'react'
import PropTypes from 'prop-types'
import {convertToWorkTimeFormat} from '@/converters/dataConverters'

function RentServiceHeader({rentService}) {
  const {info} = rentService
  return (
    <>
      <main className='md:space-y-12 md:my-6'>
        <div className='flex md:space-x-10 justify-between'>
          <div className='flex flex-initial space-x-4 sm:space-x-6 md:space-x-9 lg:space-x-12'>
            <div className='flex-none items-center'>
              {info.img &&
              <img
                className='object-contain w-16 sm:w-24 md:w-28 lg:w-32 rounded-md'
                src={info.img}
                alt={`${info.name} img`}
              />}
              {!info.img &&
              <div className='animate-pulse w-16 h-16 sm:w-24
                 md:w-28 lg:w-32 sm:h-24 md:h-28 lg:h-32 rounded-full bg-gray-300'
              />}
            </div>
            <div className='flex-auto space-y-2 lg:space-y-4'>
              <h1 className='text-lg tracking-tight font-medium text-gray-800 md:text-4xl sm:text-3xl'>
                {info.name}
              </h1>
              <div className='flex items-center space-x-2'>
                <span className='font-bold text-gray-800'>
                    Адрес:&nbsp;
                </span>
                {info.address}
              </div>
              <div className='flex items-center space-x-2'>
                <span className='text-gray-800 line-clamp-2'>
                  <span className='font-bold text-gray-800'>
                    График работы:&nbsp;
                  </span>
                  <div className='flex flex-col space-y-3'>
                    {info.workTime.map(({fromDay, fromTime, toDay, toTime}, key) => (
                      <div key={key}>
                        {convertToWorkTimeFormat(fromDay, fromTime, toDay, toTime)}
                      </div>
                    ))}
                  </div>
                </span>
              </div>
              <div className='flex items-center space-x-2'>
                <span className='text-gray-800 line-clamp-2'>
                  <span className='font-bold text-gray-800'>
                    Телефон:&nbsp;
                  </span>
                  +7 (972) 833-23-90
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

RentServiceHeader.propTypes = {
  rentService: PropTypes.object
}

export default RentServiceHeader
