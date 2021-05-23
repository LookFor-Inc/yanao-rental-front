import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {useHistory} from 'react-router-dom'
import Button from '@/components/Button'
import Card from '@/components/Card/Card'
import {addEquipmentToCart} from '@/store/Cart/actions'

function RentServiceContent({rentService, equipments, addEquipmentToCart}) {
  const {categories} = rentService
  const history = useHistory()
  /**
   * Проверка на наличие оборудования в корзине
   * @param {string} equipmentId Идентификатор оборудования
   * @returns {boolean} Находится ли в корзине
   */
  const isEquipmentRent = equipmentId =>
    !!equipments.find(({id}) => id === equipmentId)
  return (
    <div>
      {Object.entries(categories).map(([categoryName, equipments], id) => (
        <div className='mt-12' key={id}>
          <h1 className='text-2xl text-gray-800 font-bold mb-6'>
            {categoryName}
          </h1>
          <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4'>
            {equipments.map((equipment, idx) => (
              <Card
                key={idx}
                className='flex flex-col justify-between'
              >
                <div className='flex items-center justify-center'>
                  <img
                    className='w-52 p-2'
                    src={equipment.img}
                    alt={`${equipment.name} img`}
                  />
                </div>
                <div className='p-4'>
                  <div className='flex justify-between'>
                    <div className='flex flex-col'>
                      <p className='font-bold text-gray-800'>
                        {equipment.name}
                      </p>
                      <p className='text-sm font-medium text-gray-500 mb-1.5'>
                        {equipment.price} pуб./ч.
                      </p>
                    </div>
                    <p className='text-xl font-semibold text-green-700'>
                      ~{equipment.totalCount}
                    </p>
                  </div>
                  <Button
                    size='sm'
                    className='w-full'
                    color={!isEquipmentRent(equipment.id) ? 'secondary' : 'primary'}
                    onClick={() => {
                      if (!isEquipmentRent(equipment.id)) {
                        addEquipmentToCart(equipment)
                      } else {
                        history.push('/reservation')
                      }
                    }}
                  >
                    {!isEquipmentRent(equipment.id) ? 'Забронировать' : 'К оформлению'}
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

RentServiceContent.propTypes = {
  rentService: PropTypes.object,
  equipments: PropTypes.arrayOf(PropTypes.object),
  addEquipmentToCart: PropTypes.func
}

/**
 * Получение информации об оборудованиях в корзине
 * @param {object} state Состояние
 * @returns {object} Значения состояний
 */
const rentServiceState = state => {
  return {
    equipments: state.cart.equipments
  }
}

/**
 * Методы для получения информации об оборудованиях в корзине
 * @param {function} dispatch Запрос
 * @returns {object} Функция установки
 */
const rentServiceDispatch = dispatch => {
  return {
    addEquipmentToCart: equipment => dispatch(addEquipmentToCart(equipment))
  }
}

export default connect(rentServiceState, rentServiceDispatch)(RentServiceContent)
