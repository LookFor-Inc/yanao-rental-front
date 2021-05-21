import React from 'react'
import Container from '@/components/Container'
import CategoriesEquipment from '@/pages/RentalV1/components/CategoriesEquipment'
import RentalEquipment from '@/pages/RentalV1/components/RentalEquipment'
import RentalProvider from '@/pages/RentalV1/components/RentalProvider'

function RentalV1Page() {
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

export default RentalV1Page
