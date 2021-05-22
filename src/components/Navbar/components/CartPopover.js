import React, {Fragment} from 'react'
import {Popover, Transition} from '@headlessui/react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {useHistory} from 'react-router-dom'
import ListIcon from '@/assets/icons/ListIcon'
import MinusIcon from '@/assets/icons/MinusIcon'
import PlusIcon from '@/assets/icons/PlusIcon'
import TrashIcon from '@/assets/icons/TrashIcon'
import Button from '@/components/Button'
import {decreaseEquipmentAmount, increaseEquipmentAmount, removeEquipmentFromCart} from '@/store/Cart/actions'

function CartPopover({equipments, increaseEquipmentAmount, decreaseEquipmentAmount, removeEquipmentFromCart}) {
  const history = useHistory()
  return <Popover className='flex mr-6'>
    {({open}) => (
      <>
        <Popover.Button className={`${open ? '' : 'text-opacity-90'} text-primary hover:text-opacity-100`}>
          <ListIcon className='h-6 w-6' />
        </Popover.Button>
        <Transition
          as={Fragment}
          enter='transition ease-out duration-200'
          enterFrom='opacity-0 translate-y-1'
          enterTo='opacity-100 translate-y-0'
          leave='transition ease-in duration-150'
          leaveFrom='opacity-100 translate-y-0'
          leaveTo='opacity-0 translate-y-1'
        >
          <Popover.Panel className='absolute z-10 max-w-md px-4 mt-14 w-screen max-w-sm
          transform right-0.5'>
            <div className='overflow-hidden bg-gray-100 rounded-lg shadow-lg'>
              <div className='flex flex-col bg-white p-5 space-y-3'>
                <h3 className='font-semibold'>
                  Выбранное оборудование
                </h3>
                {equipments.length !== 0 && equipments.map((equipment, id) => (
                  <div
                    key={id}
                    className='flex justify-between items-center p-2 -m-3'
                  >
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
                ))}
                {equipments.length === 0 &&
                <span className='p-3 flex items-center justify-center text-gray-300 font-medium'>
                  Вы пока ничего не выбрали
                </span>
                }
              </div>
              {equipments.length !== 0 && (
                <Button
                  className={classNames('ml-auto m-3')}
                  color='primary'
                  size='sm'
                  onClick={() => {
                    history.push('/reservation')
                  }}
                >
                  Забронировать
                </Button>
              )}
            </div>
          </Popover.Panel>
        </Transition>
      </>
    )}
  </Popover>
}

CartPopover.propTypes = {
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
const cartPopoverState = state => {
  return {
    equipments: state.cart.equipments
  }
}

/**
 * Методы для получения информации об оборудованиях в корзине
 * @param {function} dispatch Запрос
 * @returns {object} Функция установки
 */
const cartPopoverDispatch = dispatch => {
  return {
    increaseEquipmentAmount: id => dispatch(increaseEquipmentAmount(id)),
    decreaseEquipmentAmount: id => dispatch(decreaseEquipmentAmount(id)),
    removeEquipmentFromCart: id => dispatch(removeEquipmentFromCart(id))
  }
}

export default connect(cartPopoverState, cartPopoverDispatch)(CartPopover)
