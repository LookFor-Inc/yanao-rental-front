import React from 'react'
import Container from '@/components/Container'
import DeliveryOption from '@/pages/Reservation/components/DeliveryOption'
import ReservationEquipments from '@/pages/Reservation/components/ReservationEquipments'
import ChoicePayment from '@/pages/Reservation/components/СhoicePaymentCard'

function ReservationPage() {
  return (
    <Container>
      <ReservationEquipments />
      <DeliveryOption />
      <ChoicePayment />
    </Container>
  )
}

export default ReservationPage
