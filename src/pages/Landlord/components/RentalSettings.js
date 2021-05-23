import React from 'react'
import LandlordAddRentalsPage from '@/pages/Landlord/LandlordAddRentalsPage'

function RentalSettings() {
  return (
    <div>
      <LandlordAddRentalsPage
        name='Прокат спортивного оборудования в НУ'
        address='г. Новый Уренгой, ул. 26 Съезда Кпсс'
        phoneNumber='+7 (972) 833-23-90'
        schedule='пн-вс'
        startTime='09:00'
        endTime='23:00'
        newRental={false}/>
    </div>
  )
}

export default RentalSettings
