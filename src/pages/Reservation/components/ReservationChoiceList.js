import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import ReservationChoiceItem from '@/pages/Reservation/components/ReservationChoiceItem'

function ReservationChoiceList({equipments}) {
  return (
    <div className='flex flex-col justify-between w-full mb-12 mt-8 space-y-3'>
      <h1 className='text-2xl text-gray-800 font-semibold'>
        Список оборудования
      </h1>
      <div className='flex'>
        {equipments.length !== 0 && equipments.map((equipment, id) => (
          <ReservationChoiceItem
            key={id}
            equipment={equipment}
          />
        ))}
      </div>
    </div>
  )
}

ReservationChoiceList.propTypes = {
  equipments: PropTypes.arrayOf(PropTypes.object)
}

/**
 * Получение информации об оборудованиях в корзине
 * @param {object} state Состояние
 * @returns {object} Значения состояний
 */
const reservationChoiceListState = state => {
  return {
    equipments: state.cart.equipments
  }
}

export default connect(reservationChoiceListState)(ReservationChoiceList)
