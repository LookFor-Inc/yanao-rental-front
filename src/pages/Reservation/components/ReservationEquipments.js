import React from 'react'
import ReservationChoiceList from '@/pages/Reservation/components/ReservationChoiceList'

function ReservationEquipments() {
  return (
    <div className='flex flex-col justify-between w-full mb-12 mt-8 space-y-8'>
      <h1 className='text-2xl text-gray-800 font-semibold'>
        Оборудование к бронированию
      </h1>
      <ReservationChoiceList />
    </div>
  )
}

export default ReservationEquipments
