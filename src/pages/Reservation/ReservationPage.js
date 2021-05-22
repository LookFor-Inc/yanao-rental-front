import React from 'react'
import Container from '@/components/Container'
import ReservationChoiceList from '@/pages/Reservation/components/ReservationChoiceList'
import ChoicePayment from '@/pages/Reservation/components/СhoicePaymentCard'

function ReservationPage() {
  return (
    <Container>
      <ReservationChoiceList />
      <ChoicePayment />
    </Container>
  )
}

export default ReservationPage
