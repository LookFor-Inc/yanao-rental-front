import React from 'react'
import classNames from 'classnames'
import {string} from 'prop-types'
import PaymentProcessingCard from '@/pages/Reservation/components/PaymentProcessingCard'
import ReservationBooking from '@/pages/Reservation/components/ReservationBooking'

function ChoicePayment(props) {
  const classes = classNames(
    'flex flex-col justify-between w-full mb-12 mt-8 space-y-3',
    props.className
  )

  return (
    <div className={classes}>
      <h1 className='text-2xl text-gray-800 font-semibold mb-6 mt-4'>
        Оформление бронирования
      </h1>
      <div className='flex space-x-8 w-full'>
        <PaymentProcessingCard />
        <ReservationBooking />
      </div>
    </div>
  )
}

ChoicePayment.propTypes = {
  className: string
}

export default ChoicePayment
