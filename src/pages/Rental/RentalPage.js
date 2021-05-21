import React from 'react'
import Container from '@/components/Container'
import CategoriesEquipment from '@/pages/Rental/components/CategoriesEquipment'
import RentalEquipment from '@/pages/Rental/components/RentalEquipment'
import RentalProvider from '@/pages/Rental/components/RentalProvider'

function RentalPage() {
  return (
    <div className='bg-gray-100'>
      <RentalProvider>
        <Container>
          <div>
            <CategoriesEquipment />
            <RentalEquipment />
          </div>
        </Container>
      </RentalProvider>
    </div>
  )
}

export default RentalPage
