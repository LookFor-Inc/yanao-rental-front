import React from 'react'
import Container from '@/components/Container'
import DeliveryOption from '@/pages/Reservation/components/DeliveryOption'
import ReservationEquipments from '@/pages/Reservation/components/ReservationEquipments'

function ReservationPage() {
  return (
    <Container>
      <ReservationEquipments />
      <DeliveryOption />
    </Container>
  )
}

export default ReservationPage
