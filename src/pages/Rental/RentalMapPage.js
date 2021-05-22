import React, {useEffect} from 'react'
import {arrayOf, func, object} from 'prop-types'
import {connect} from 'react-redux'
import {Map, Placemark, YMaps} from 'react-yandex-maps'
import {fetchEquipmentTypesAndRentals} from '@/store/EquipmentAndRentals/actions'

function RentalMapPage({rentals, fetchEquipmentTypesAndRentals}) {
  useEffect(() => {
    fetchEquipmentTypesAndRentals()
  }, [])


  return (
    <>
      <div className='mt-6 w-full h-full'>
        <YMaps className='w-full h-full'>
          <Map
            className='w-full h-96'
            defaultState={{
              center: [66.49, 66.66],
              zoom: 10,
              controls: ['zoomControl', 'fullscreenControl']
            }}
            modules={['control.ZoomControl', 'control.FullscreenControl']}
          >
            {
              rentals.map(({latitude, longitude}, idx) => (
                <Placemark
                  key={idx}
                  geometry={[latitude, longitude]}
                  properties={{balloonContent: 'Это балун'}}
                  modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
                />
              ))
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
