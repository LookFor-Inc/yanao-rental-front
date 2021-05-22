import React, {useEffect} from 'react'
import {rentalListTab} from '@/data/rentalListTabs'
import RentalCardList from '@/pages/Rental/components/RentalCardList'
import {useRentalTab} from '@/pages/Rental/components/RentalTabsProvider'
import RentalProvider from '@/pages/RentService/components/RentalProvider'

function RentalListPage() {
  const {setTab} = useRentalTab()

  useEffect(() => {
    setTab(rentalListTab)
  }, [])

  return (
    <div className='bg-gray-100 mt-6'>
      <RentalProvider>
        <RentalCardList />
      </RentalProvider>
    </div>
  )
}

export default RentalListPage
