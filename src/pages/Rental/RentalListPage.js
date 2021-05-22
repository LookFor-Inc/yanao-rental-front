import React from 'react'
import RentalCardList from '@/pages/Rental/components/RentalCardList'
import RentalProvider from '@/pages/RentalV1/components/RentalProvider'

function RentalListPage() {
  return (
    <div className='bg-gray-100 mt-6'>
      <RentalProvider>
        <RentalCardList />
      </RentalProvider>
    </div>
  )
}

export default RentalListPage
