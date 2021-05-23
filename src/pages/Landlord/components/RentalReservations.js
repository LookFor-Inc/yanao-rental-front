import React from 'react'
import {arrayOf, object} from 'prop-types'
import {connect} from 'react-redux'

const rentalList = [
  {
    status: 'wait',
    equipmentList: [
      {
        name: 'Велосипед Trek',
        amount: 2
      },
      {
        name: 'Ролики',
        amount: 1
      }
    ],
    address: 'Ленинградский проспект, 7',
    dateStart: '24 мая. 9:00',
    dateEnd: '30 мая. 18:00',
    cost: 4400
  },
  {
    address: '',
    dateStart: '22 мая. 16:00',
    dateEnd: '25 мар. 17:00',
    equipmentList: [
      {
        name: 'Ролики',
        amount: 3
      }
    ],
    status: 'active',
    cost: 3600
  },
  {
    address: '',
    dateStart: '15 мая. 10:00',
    dateEnd: '16 мая. 21:00',
    equipmentList: [
      {
        name: 'Велосипед Boxxer',
        amount: 1
      },
      {
        name: 'Велосипед Trek',
        amount: 1
      }
    ],
    status: 'close',
    cost: 2900
  },
  {
    address: '',
    dateStart: '10 мая. 12:00',
    dateEnd: '14 мая. 20:00',
    equipmentList: [
      {
        name: 'Велосипед Trek',
        amount: 3
      }
    ],
    status: 'close',
    cost: 3400
  },
  {
    address: 'Юбилейная улица, 3А',
    dateStart: '8 мая. 11:00',
    dateEnd: '9 мая. 19:00',
    equipmentList: [
      {
        name: 'Велосипед Trek',
        amount: 3
      },
      {
        name: 'Велосипед Boxxer',
        amount: 3
      }
    ],
    status: 'close',
    cost: 9600
  },
  {
    address: '',
    dateStart: '8 мая 9:00',
    dateEnd: '11 мар. 16:00',
    equipmentList: [
      {
        name: 'Самокат',
        amount: 3
      }
    ],
    status: 'close',
    cost: 4800
  }
]

function RentalReservations({equipments = []}) {
  return (
    /* <div className='flex flex-col my-4'>
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
    </div>*/
    <div className='flex flex-col my-4'>
      <div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
        <div className='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
          <div className='shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'>
            <table className='min-w-full divide-y divide-gray-200'>
              <thead className='bg-gray-50'>
                <tr>
                  <th scope='col'
                      className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    Текущий статус
                  </th>
                  <th scope='col'
                      className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    Оборудование
                  </th>
                  <th scope='col'
                      className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                  Начало
                  </th>
                  <th scope='col'
                      className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                  Конец
                  </th>
                  <th scope='col'
                      className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    Доставка
                  </th>
                  <th scope='col'
                      className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                  Стоимость
                  </th>
                </tr>
              </thead>
              <tbody className='bg-white divide-y divide-gray-200'>
                {rentalList.map((rent, index) => (
                  <tr key={index}>
                    <td className='px-6 py-4 whitespace-nowrap'>
                      <span
                        className={'px-2 inline-flex text-xs leading-5 font-semibold rounded-full ' +
                        (rent.status === 'active' ? 'bg-green-100 text-green-600' : rent.status === 'close' ? 'bg-indigo-100 text-gray-600' : 'bg-yellow-200 text-gray-600')}>
                        {rent.status === 'active' ? 'Активен' : rent.status === 'close' ? 'Завершен' : 'Ожидает'}
                      </span>
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap'>
                      <ul className='list-disc text-sm font-medium text-gray-900'>
                        {rent.equipmentList.map((equipment, index) => (
                          <li key={index}>
                            {equipment.name}
                            {equipment.amount > 1 ? ` (x${equipment.amount})` : ''}
                          </li>
                        ))}
                      </ul>
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                      {rent.dateStart}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                      {rent.dateEnd}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap'>
                      <div className='text-sm text-gray-500'>
                        {rent.address}
                      </div>
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap'>
                      <div className='text-sm font-medium text-gray-900'>
                        {rent.cost}
                      </div>
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
