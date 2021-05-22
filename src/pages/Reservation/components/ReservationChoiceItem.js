import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import MinusIcon from '@/assets/icons/MinusIcon'
import PlusIcon from '@/assets/icons/PlusIcon'
import TrashIcon from '@/assets/icons/TrashIcon'
import {decreaseEquipmentAmount, increaseEquipmentAmount, removeEquipmentFromCart} from '@/store/Cart/actions'

function ReservationChoiceItem({equipment, increaseEquipmentAmount, decreaseEquipmentAmount, removeEquipmentFromCart}) {
  return (
    <div className='flex justify-between items-center p-2 -m-3'>
      <div className='flex items-center space-x-6'>
        <div className='flex justify-center w-16'>
          <img src={equipment.img}
               alt={`${equipment.name} img`}
          />
        </div>
        <span className='flex text-sm font-medium text-gray-900'>
          {equipment.name}
        </span>
      </div>
      <div className='flex text-sm text-gray-500'>
        <div className='flex justify-between space-x-2 mr-6'>
          <button
            className='flex h-6 w-6 items-center justify-center
                           bg-gray-100 rounded-sm duration-100 hover:text-black'
            onClick={() => {
              decreaseEquipmentAmount(equipment.id)
            }}
          >
            <MinusIcon className='h-5' />
          </button>
          <span className='flex w-2 items-center justify-center font-semibold'>
            {equipment.amount}
          </span>
          <button
            className='flex h-6 w-6 items-center justify-center
                          bg-gray-100 rounded-sm duration-100 hover:text-black'
            onClick={() => {
              increaseEquipmentAmount(equipment.id)
            }}
          >
            <PlusIcon className='h-5' />
          </button>
        </div>
        <button
          className='duration-100 hover:text-red-400'
          onClick={() => {
            removeEquipmentFromCart(equipment.id)
          }}
        >
          <TrashIcon className='h-4' />
        </button>
      </div>
    </div>
  )
}

ReservationChoiceItem.propTypes = {
  equipment: PropTypes.object,
  increaseEquipmentAmount: PropTypes.func,
  decreaseEquipmentAmount: PropTypes.func,
  removeEquipmentFromCart: PropTypes.func
}

/**
 * Методы для получения информации об оборудованиях в корзине
 * @param {function} dispatch Запрос
 * @returns {object} Функция установки
 */
const reservationChoiceItemDispatch = dispatch => {
  return {
    increaseEquipmentAmount: id => dispatch(increaseEquipmentAmount(id)),
    decreaseEquipmentAmount: id => dispatch(decreaseEquipmentAmount(id)),
    removeEquipmentFromCart: id => dispatch(removeEquipmentFromCart(id))
  }
}

export default connect(null, reservationChoiceItemDispatch)(ReservationChoiceItem)
