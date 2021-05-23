import React from 'react'
import Button from '@/components/Button'
import Card from '@/components/Card/Card'
import Input from '@/components/Input'

function ReservationBooking() {
  return (
    <Card className='flex flex-col justify-between p-6 w-full flex-initial max-w-md'>
      <div className='flex flex-col space-y-4'>
        <div className='flex justify-between text-md text-gray-800 font-semibold'>
          <span>К оплате</span>
          <span>8500 ₽</span>
        </div>
        <div className='flex space-x-2'>
          <Input
          placeholder='Промокод'
          validation={false}
          />
          <Button color='primary'>Применить</Button>
        </div>
      </div>
      <Button color='primary'>Перейти к оформлению</Button>
    </Card>
  )
}

export default ReservationBooking
