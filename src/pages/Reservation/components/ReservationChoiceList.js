import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import MinusIcon from '@/assets/icons/MinusIcon'
import PlusIcon from '@/assets/icons/PlusIcon'
import TrashIcon from '@/assets/icons/TrashIcon'
import Card from '@/components/Card/Card'
import {decreaseEquipmentAmount, increaseEquipmentAmount, removeEquipmentFromCart} from '@/store/Cart/actions'

function ReservationChoiceList({
  equipments, increaseEquipmentAmount,
  decreaseEquipmentAmount, removeEquipmentFromCart
}) {
  return <div className='flex flex-col space-y-6'>
    {equipments.length !== 0 && equipments.map((equipment, id) => (
      <Card key={id} className='flex justify-between items-center pl-2 pr-2 rounded-lg shadow-md'>
        <div className='flex items-center space-x-6 p-5'>
          <div className='flex justify-center w-16'>
            <img src={equipment.img}
                 alt={`${equipment.name} img`}
            />
          </div>
          <h4 className='flex font-medium text-gray-900'>
            {equipment.name}
          </h4>
        </div>
        <div className='flex text-sm text-gray-500 p-5'>
          <div className='flex justify-between space-x-2 mr-8'>
            <button
              className='flex h-7 w-7 items-center justify-center bg-gray-100 rounded-sm duration-100 hover:text-black'
              onClick={() => {
                decreaseEquipmentAmount(equipment.id)
              }}
            >
              <MinusIcon className='h-6' />
            </button>
            <span className='flex w-3 items-center justify-center font-semibold'>
              {equipment.amount}
            </span>
            <button
              className='flex h-7 w-7 items-center justify-center bg-gray-100 rounded-sm duration-100 hover:text-black'
              onClick={() => {
                increaseEquipmentAmount(equipment.id)
              }}
            >
              <PlusIcon className='h-6' />
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
      </Card>
    ))}
    {equipments.length === 0 && (
      <div className='flex justify-center text-gray-500'>
        <div>
          Воспользуйтесь&nbsp;
        </div>
        <Link to='/rental/list' className='underline hover:text-primary'>
          поиском
        </Link>
        <div>
          , чтобы подобрать оборудование
        </div>
      </div>
    )}
  </div>
}

ReservationChoiceList.propTypes = {
  equipments: PropTypes.arrayOf(PropTypes.object),
  increaseEquipmentAmount: PropTypes.func,
  decreaseEquipmentAmount: PropTypes.func,
  removeEquipmentFromCart: PropTypes.func
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

/**
 * Методы для получения информации об оборудованиях в корзине
 * @param {function} dispatch Запрос
 * @returns {object} Функция установки
 */
const reservationChoiceListDispatch = dispatch => {
  return {
    increaseEquipmentAmount: id => dispatch(increaseEquipmentAmount(id)),
    decreaseEquipmentAmount: id => dispatch(decreaseEquipmentAmount(id)),
    removeEquipmentFromCart: id => dispatch(removeEquipmentFromCart(id))
  }
}

export default connect(reservationChoiceListState, reservationChoiceListDispatch)(ReservationChoiceList)
