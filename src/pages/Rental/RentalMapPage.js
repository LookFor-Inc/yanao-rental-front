import React, {useEffect} from 'react'
import {arrayOf, func, object} from 'prop-types'
import {connect} from 'react-redux'
import {GeolocationControl, Map, Placemark, YMaps} from 'react-yandex-maps'
import {rentalMapTab} from '@/data/rentalListTabs'
import {useRentalTab} from '@/pages/Rental/components/RentalTabsProvider'
import {fetchEquipmentTypesAndRentals} from '@/store/EquipmentAndRentals/actions'

function RentalMapPage({rentals, fetchEquipmentTypesAndRentals}) {
  const {setTab} = useRentalTab()

  useEffect(() => {
    setTab(rentalMapTab)
    fetchEquipmentTypesAndRentals()
  }, [])

  return (
    <>
      <div className='mt-6 w-full'>
        <YMaps className='w-full'>
          <Map
            className='w-full h-128'
            defaultState={{
              center: [66.49, 66.66],
              zoom: 10,
              controls: ['zoomControl', 'fullscreenControl']
            }}
            modules={['control.ZoomControl', 'control.FullscreenControl']}
          >
            <GeolocationControl options={{float: 'right'}} />
            {
              rentals.map(({id, latitude, longitude, name, address}) => {
                const balloonTemplate = `
                  <div class='flex flex-col text-gray-800'>
                    <div class='flex flex-col space-y-1'>
                        <p class='font-semibold'>${name}</p>
                        <p>${address}</p>
                    <div>
                    <a href='${id}' class='btn-primary rounded-md py-0.5 px-1 mt-1'>Перейти</a>
                  </div>
                `
                return (<Placemark
                  key={id}
                  geometry={[latitude, longitude]}
                  properties={{balloonContent: balloonTemplate}}
                  modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
                />)
              })
            }
          </Map>
        </YMaps>
      </div>
    </>
  )
}

RentalMapPage.propTypes = {
  rentals: arrayOf(object),
  fetchEquipmentTypesAndRentals: func
}

/**
* Получение информации об успешном получении данных о группе
* @param {object} state Состояние
* @returns {object} Значения состояний
*/
const rentalState = state => {
  return {
    rentals: state.equipmentAndRentals.data.rentals
  }
}

/**
* Установка исходных данных в состояние группы
* @param {function} dispatch Запрос на установку
* @returns {object} Функция установки
*/
const rentalDispatch = dispatch => {
  return {
    fetchEquipmentTypesAndRentals: () => dispatch(fetchEquipmentTypesAndRentals())
  }
}

export default connect(rentalState, rentalDispatch)(RentalMapPage)
