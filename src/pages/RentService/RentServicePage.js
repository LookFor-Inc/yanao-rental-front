import React from 'react'
import Container from '@/components/Container'
// eslint-disable-next-line import/namespace
import RentServiceContent from '@/pages/RentService/components/RentServiceContent'
import RentServiceHeader from '@/pages/RentService/components/RentServiceHeader'

function RentServicePage() {
  return (
    <div className='bg-gray-100'>
      <Container>
        <div>
          <RentServiceHeader/>
          <RentServiceContent/>
        </div>
      </Container>
    </div>
  )
}

export default RentServicePage
