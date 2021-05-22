import React from 'react'
import Container from '@/components/Container'
import DeliveryOption from '@/pages/Reservation/components/DeliveryOption'
import ReservationChoiceList from '@/pages/Reservation/components/ReservationChoiceList'

function ReservationPage() {
  return (
    <Container>
      <ReservationChoiceList />
      <DeliveryOption />
    </Container>
  )
}

export default ReservationPage
