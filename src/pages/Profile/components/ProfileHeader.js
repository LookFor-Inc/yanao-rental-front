import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import CoinIcon from '@/assets/icons/CoinIcon'

function ProfileHeader({user}) {
  return (
    <>
      <main className='md:space-y-12 md:my-6'>
        <div className='flex md:space-x-10 justify-between'>
          <div className='flex flex-initial space-x-4 sm:space-x-6 md:space-x-9 lg:space-x-12'>
            <div className='flex-none items-center'>
              {user.avatar &&
              <img
                className='object-contain w-16 sm:w-24 md:w-28 lg:w-32 rounded-full'
                src={user.avatar}
                alt={`${user.email} avatar`}
              />}
              {!user.avatar &&
              <div className='animate-pulse w-16 h-16 sm:w-24
                 md:w-28 lg:w-32 sm:h-24 md:h-28 lg:h-32 rounded-full bg-gray-300'
              />}
            </div>
            <div className='flex-auto space-y-2 lg:space-y-4'>
              <h1 className='text-lg tracking-tight font-medium text-gray-800 md:text-4xl sm:text-3xl'>
                {user.firstName}
              </h1>
              <div className='flex items-center space-x-2'>
                <span className='font-bold text-gray-800'>
                    Почта:&nbsp;
                </span>
                {user.email}
              </div>
            </div>
          </div>
          <div className='flex'>
            <span className='hidden md:block text-2xl font-bold mr-2 mt-1'>
              Баллов: 170
            </span>
            <span className='block md:hidden text-2xl font-bold mr-2 mt-1'>
              170
            </span>
            <CoinIcon className='h-10 w-10' />
          </div>
        </div>
      </main>
    </>
  )
}

ProfileHeader.propTypes = {
  user: PropTypes.object
}

/**
 * Получение информации о пользователе
 * @param {object} state Состояние
 * @returns {object} Значения состояний
 */
const profileHeaderState = state => {
  return {
    user: state.user
  }
}

export default connect(profileHeaderState)(ProfileHeader)
