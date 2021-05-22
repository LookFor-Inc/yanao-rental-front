import React from 'react'
import Container from '@/components/Container'
import RentServiceContent from '@/pages/RentService/components/RentServiceContent'
import RentServiceHeader from '@/pages/RentService/components/RentServiceHeader'

function RentServicePage() {
  return (
    <div className='bg-gray-100'>
      <Container>
        <RentServiceHeader />
        <RentServiceContent />
      </Container>
    </div>
  )
}

export default RentServicePage
