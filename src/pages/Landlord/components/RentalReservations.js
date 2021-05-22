import React from 'react'
import {arrayOf, object} from 'prop-types'
import {connect} from 'react-redux'

function RentalReservations({equipments = []}) {
  return (
    <div className='flex flex-col my-4'>
      <div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
        <div className='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
          <div className='shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'>
            <table className='min-w-full divide-y divide-gray-200'>
              <thead className='bg-gray-50'>
                <tr>
                  <th scope='col'
                      className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                  Модель
                  </th>
                  <th scope='col'
                      className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                  Всего
                  </th>
                  <th scope='col'
                      className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                  Свободно
                  </th>
                  <th scope='col'
                      className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    Забронировано
                  </th>
                  <th scope='col'
                      className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                  Стоимость
                  </th>
                </tr>
              </thead>
              <tbody className='bg-white divide-y divide-gray-200'>
                {equipments.length !== 0 && equipments.map((
                  {
                    img, name, totalCount, freeCount, amount, price
                  }, index) => (
                  <tr key={index}>
                    <td className='px-6 py-4 whitespace-nowrap'>
                      <div className='flex items-center space-x-4'>
                        <img src={img} alt={name} className='w-12'/>
                        <span>{name}</span>
                      </div>
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                      {totalCount}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                      {freeCount}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                      {amount}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                      {price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

RentalReservations.propTypes = {
  equipments: arrayOf(object)
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

export default connect(reservationChoiceListState)(RentalReservations)
