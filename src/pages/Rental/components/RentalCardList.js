import React from 'react'
import RentalCard from '@/pages/Rental/components/RentalCard'
import {useRental} from '@/pages/RentalV1/components/RentalProvider'

function RentalCardList() {
  const {rentals} = useRental()

  return (
    <div role='presentation'>
      {rentals.map(({id, name, address, img}) => (
        <RentalCard
          key={id}
          name={name}
          address={address}
          id={id}
          img={img}
        />
      ))}
    </div>
  )
}

export default RentalCardList
