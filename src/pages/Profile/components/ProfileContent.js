import React from 'react'

const rentalList = [
  {
    city: 'Новый Уренгой',
    address: 'Адрес',
    dateStart: '16 мар. 16:30',
    equipmentList: [
      {
        name: 'Велосипед мужской',
        amount: 1
      },
      {
        name: 'Велосипед мужской',
        amount: 1
      }
    ],
    dateEnd: '17 мар. 17:30',
    status: 'active',
    score: '23',
    cost: 4400
  },
  {
    city: 'Ноябрьск',
    address: 'ул. Космонавтов 13',
    dateStart: '16 апр. 11:30',
    dateEnd: '17 мар. 17:30',
    equipmentList: [
      {
        name: 'Велосипед мужской',
        amount: 1
      },
      {
        name: 'Велосипед мужской',
        amount: 1
      }
    ],
    status: 'close',
    score: '40',
    cost: 4000
  },
  {
    city: 'Салехард',
    address: 'Адрес',
    dateStart: '16 мар. 16:30',
    dateEnd: '17 мар. 17:30',
    equipmentList: [
      {
        name: 'Велосипед мужской',
        amount: 2
      },
      {
        name: 'Велосипед детский',
        amount: 3
      }
    ],
    status: 'close',
    score: '23',
    cost: 4200
  },
  {
    city: 'Новый Уренгой',
    address: 'Адрес',
    dateStart: '16 мар. 16:30',
    dateEnd: '17 мар. 17:30',
    equipmentList: [
      {
        name: 'Ролики',
        amount: 2
      }
    ],
    status: 'close',
    score: '23',
    cost: 2000
  },
  {
    city: 'Новый Уренгой',
    address: 'Адрес',
    dateStart: '16 мар. 16:30',
    dateEnd: '17 мар. 17:30',
    equipmentList: [
      {
        name: 'Самокат',
        amount: 3
      }
    ],
    status: 'close',
    score: '23',
    cost: 1500
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
                        {rent.city}
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
