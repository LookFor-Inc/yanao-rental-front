import React, {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import RentalCardList from '@/pages/Rental/components/RentalCardList'
import RentalProvider from '@/pages/RentService/components/RentalProvider'
import {setOpenedRentalTab} from '@/store/Rental/actions'

function RentalListPage() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setOpenedRentalTab('/rental/list'))
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
