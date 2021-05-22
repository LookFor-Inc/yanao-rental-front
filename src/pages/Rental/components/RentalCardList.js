import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import RentalCard from '@/pages/Rental/components/RentalCard'
import {fetchEquipmentTypesAndRentals} from '@/store/EquipmentAndRentals/actions'

function RentalCardList() {
  const dispatch = useDispatch()
  const rentals = useSelector(state => state.equipmentAndRentals.data.rentals)

  useEffect(() => {
    dispatch(fetchEquipmentTypesAndRentals())
  }, [])

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
