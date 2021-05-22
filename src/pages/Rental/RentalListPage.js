import React, {useEffect} from 'react'
import {rentalListTab} from '@/data/rentalListTabs'
import RentalCardList from '@/pages/Rental/components/RentalCardList'
import {useRentalTab} from '@/pages/Rental/components/RentalTabsProvider'
import withRentalsPage from '@/pages/Rental/withRentalsPage'
import RentalProvider from '@/pages/RentService/components/RentalProvider'

function RentalListPage() {
  const {setTab} = useRentalTab()

  useEffect(() => {
    setTab(rentalListTab)
  }, [])

  return (
    <div className='bg-gray-100 mt-6'>
      <RentalProvider>
        <RentalCardList search={true}/>
      </RentalProvider>
    </div>
  )
}

export default withRentalsPage(RentalListPage)
