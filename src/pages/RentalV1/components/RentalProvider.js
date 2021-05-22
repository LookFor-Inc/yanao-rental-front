import React, {createContext, useState, useContext, useEffect} from 'react'
import PropTypes from 'prop-types'
import {getEquipmentTypesAndRentals} from '@/services/reservationService'
const RentalContext = createContext(null)

/**
 * Provider меню схемы
 * @param {element} children Дочерние элементы
 * @returns {JSX.Element} Provider меню схемы
 */
const RentalProvider = ({children}) => {
  const [equipmentCategories, setEquipmentCategories] = useState([])
  const [rentals, setRentals] = useState([])

  useEffect(() => {
    getEquipmentTypesAndRentals()
      .then(response => {
        setEquipmentCategories(response.data.equipmentCategories)
        setRentals(response.data.rentals)
      })
      .catch(reject => console.error(reject.error))
  }, [])

  return (
    <RentalContext.Provider value={{equipmentCategories, setEquipmentCategories, rentals, setRentals}}>
      {children}
    </RentalContext.Provider>
  )
}

RentalProvider.propTypes = {
  children: PropTypes.node
}

/**
 * Hook для управления меню смехы
 * @returns {Context} Контекст меню схемы
 */
export function useRental() {
  return useContext(RentalContext)
}

export default RentalProvider
