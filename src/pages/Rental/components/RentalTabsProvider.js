import React, {createContext, useState, useContext} from 'react'
import PropTypes from 'prop-types'
import {rentalListTab} from '@/data/rentalListTabs'

const RentalTabContext = createContext(null)

/**
 * Provider меню схемы
 * @param {element} children Дочерние элементы
 * @returns {JSX.Element} Provider меню схемы
 */
const RentalTabProvider = ({children}) => {
  const [tab, setTab] = useState(rentalListTab)

  return (
    <RentalTabContext.Provider value={{setTab, tab}}>
      {children}
    </RentalTabContext.Provider>
  )
}

RentalTabProvider.propTypes = {
  children: PropTypes.node
}

/**
 * Hook для управления меню смехы
 * @returns {Context} Контекст меню схемы
 */
export function useRentalTab() {
  return useContext(RentalTabContext)
}

export default RentalTabProvider
