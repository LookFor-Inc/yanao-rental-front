import React from 'react'
import Container from '@/components/Container'
import CategoriesEquipment from '@/pages/Rental/components/CategoriesEquipment'
import RentalEquipment from '@/pages/Rental/components/RentalEquipment'

function RentalPage() {
  return (
    <div className='bg-gray-100'>
      <Container>
        <div>
          <CategoriesEquipment />
          <RentalEquipment />
        </div>
      </Container>
    </div>
  )
}

export default RentalPage
