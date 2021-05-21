import React from 'react'
// eslint-disable-next-line no-unused-vars
import {Link} from 'react-router-dom'

function RentServiceHeader() {
  const logo = ''
  const title = ''
  const name = 'Сервис Олега'
  const address = 'г. Салехард'
  const telNumber = '+7(985)627-23-42'
  const grafic = 'пн.-сб. 09:00-18:00'
  return (
    <>
      <main className="md:space-y-12 md:my-6">
        <div className="flex md:space-x-10 justify-between">
          <div className="flex flex-initial space-x-4 sm:space-x-6 md:space-x-9 lg:space-x-12">
            <div className="flex-none items-center">
              {logo &&
              <img
                className="object-contain w-16 sm:w-24 md:w-28 lg:w-32 rounded-md"
                src={logo}
                alt={title}
              />}
              {!logo &&
              <div className="animate-pulse w-16 h-16 sm:w-24
                 md:w-28 lg:w-32 sm:h-24 md:h-28 lg:h-32 rounded-full bg-gray-300"
              />}
            </div>
            <div className="flex-auto space-y-2 lg:space-y-4">
              <h1 className="text-lg tracking-tight font-medium text-gray-800 md:text-4xl sm:text-3xl">
                {name}
              </h1>
              <div className="flex items-center space-x-2">
                <span className="font-bold text-gray-800">
                    Адрес:&nbsp;
                </span>
                {address}
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-gray-800 line-clamp-2">
                  <span className="font-bold text-gray-800">
                    График работы:&nbsp;
                  </span>
                  {grafic}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-gray-800 line-clamp-2">
                  <span className="font-bold text-gray-800">
                    Тулуфон:&nbsp;
                  </span>
                  {telNumber}
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default RentServiceHeader
