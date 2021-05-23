import React from 'react'

const rentalList = [
  {
    name: 'Прокат спортивного оборудования в НУ',
    address: 'г. Новый Уренгой',
    dateStart: '22 мая 16:00',
    equipmentList: [
      {
        name: 'Велосипед Trek',
        amount: 1
      },
      {
        name: 'Велосипед Boxxer',
        amount: 1
      }
    ],
    dateEnd: '24 мая 16:00',
    status: 'active',
    score: '23',
    cost: 5000
  },
  {
    name: 'Сервис Олега',
    address: 'г. Ноябрьск',
    dateStart: '20 мая 11:00',
    dateEnd: '22 мая 18:00',
    equipmentList: [
      {
        name: 'Велосипед Pinarello',
        amount: 2
      },
      {
        name: 'Велосипед Townie',
        amount: 2
      }
    ],
    status: 'close',
    score: '40',
    cost: 6500
  },
  {
    name: 'Мотосалон STELS',
    address: 'г. Салехард',
    dateStart: '14 мая 10:00',
    dateEnd: '19 мая 19:30',
    equipmentList: [
      {
        name: 'Велосипед Flover',
        amount: 1
      },
      {
        name: 'Велосипед Pinarello',
        amount: 2
      }
    ],
    status: 'close',
    score: '23',
    cost: 4200
  },
  {
    name: 'Катай везде',
    address: 'г. Новый Уренгой',
    dateStart: '10 мая 13:00',
    dateEnd: '14 мая 15:00',
    equipmentList: [
      {
        name: 'Ролики',
        amount: 3
      }
    ],
    status: 'close',
    score: '23',
    cost: 3600
  },
  {
    name: 'Катай везде',
    address: 'г. Новый Уренгой',
    dateStart: '9 мая 10:00',
    dateEnd: '11 мая 15:00',
    equipmentList: [
      {
        name: 'Самокат Ninebot',
        amount: 3
      }
    ],
    status: 'close',
    score: '23',
    cost: 2300
  }
]

function ProfileContent() {
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
                  Прокат
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
                  Оборудование
                  </th>
                  <th scope='col'
                      className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                  Текущий статус
                  </th>
                  <th scope='col'
                      className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    Получено баллов
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
                      <div className='text-sm font-medium text-gray-900'>
                        {rent.name}
                      </div>
                      <div className='text-sm text-gray-500'>
                        {rent.address}
                      </div>
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                      {rent.dateStart}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                      {rent.dateEnd}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap'>
                      <ul className='list-disc text-sm font-medium text-gray-900'>
                        {rent.equipmentList.map((equipment, index) => (
                          <li key={index}>
                            {equipment.name}
                            {equipment.amount>1 ? ` (x${equipment.amount})` : ''}
                          </li>
                        ))}
                      </ul>
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap'>
                      <span
                      className={'px-2 inline-flex text-xs leading-5 font-semibold rounded-full ' +
                      (rent.status === 'active' ? 'bg-green-100 text-green-600' : 'bg-indigo-100 text-gray-600')}>
                        {rent.status === 'active' ? 'Активен' : 'Сдан'}
                      </span>
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap'>
                      <span
                      className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-600'>
                        {rent.score}
                      </span>
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

export default ProfileContent
