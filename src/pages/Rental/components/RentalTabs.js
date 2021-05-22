import React from 'react'
import classNames from 'classnames'
import {func, string} from 'prop-types'
import {connect} from 'react-redux'
import LinkButton from '@/components/LinkButton'
import {setOpenedRentalTab} from '@/store/Rental/actions'

const TABS = [
  {
    name: 'Список',
    path: '/rental/list'
  },
  {
    name: 'Карта',
    path: '/rental/map'
  }
]

function RentalTabs({openedTab, setOpenedTab}) {
  const btnClasses = tabParam => classNames(
    'font-semibold text-md rounded-md py-0.5 px-1.5',
    {'bg-white shadow': tabParam === openedTab}
  )

  return (
    <div className='flex space-x-2 bg-gray-200 rounded-md'>
      {
        TABS.map(({name, path}, idx) => (
          <LinkButton
            key={idx}
            className={btnClasses(path)}
            to={path}
            onClick={e => {
              setOpenedTab(path)
            }}
          >
            {name}
          </LinkButton>
        ))
      }
    </div>
  )
}

RentalTabs.propTypes = {
  openedTab: string,
  setOpenedTab: func
}

/**
 * Получение информации об открытой вкладке
 * @param {object} state Состояние
 * @returns {object} Значения состояний
 */
const rentalTabState = state => {
  return {
    openedTab: state.rentalTab.rentalTab
  }
}

/**
 * Установка открытой вкладки
 * @param {function} dispatch Запрос на установку
 * @returns {object} Функция установки
 */
const rentalTabDispatch = dispatch => {
  return {
    setOpenedTab: tab => dispatch(setOpenedRentalTab(tab))
  }
}

export default connect(rentalTabState, rentalTabDispatch)(RentalTabs)
