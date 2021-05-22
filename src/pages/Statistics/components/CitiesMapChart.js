import React, {useEffect, useState} from 'react'
import {arrayOf, func, object} from 'prop-types'
import {connect} from 'react-redux'
import {Circle, GeolocationControl, Map, YMaps} from 'react-yandex-maps'
import {customersAmount} from '@/data/customersAmount'
import {fetchEquipmentTypesAndRentals} from '@/store/EquipmentAndRentals/actions'

function CitiesMapChart({rentals, fetchEquipmentTypesAndRentals}) {
  const [modernRentals, setModernRentals] = useState([])

  useEffect(() => {
    fetchEquipmentTypesAndRentals()
  }, [])

  useEffect(() => {
    const nObj = []
    rentals.forEach((item, idx) => {
      item['customersAmount'] = customersAmount[idx]
      nObj.push(item)
    })
    setModernRentals(nObj)
    console.log(nObj)
  }, [rentals])

  return (
    <YMaps>
      <Map
        className='w-full h-128'
        defaultState={{
          center: [66.49, 66.66],
          zoom: 10,
          controls: ['zoomControl', 'fullscreenControl']
        }}
        modules={['control.ZoomControl', 'control.FullscreenControl']}
      >
        <GeolocationControl options={{float: 'right'}}/>
        {
          modernRentals.map(({id, latitude, longitude, name, address, customersAmount}) => {
            const balloonTemplate = `
                  <div class='flex flex-col space-y-1 text-gray-800'>
                    <p class='font-semibold'>${name}</p>
                    <p>${address}</p>
                    <p>Посетителей: ${customersAmount.amount}</p>
                  </div>
                `
            return (
              <Circle
                  key={id}
                  geometry={[[latitude, longitude], 250]}
                  options={{
                    draggable: false,
                    fillColor: customersAmount.color,
                    strokeColor: customersAmount.color,
                    strokeOpacity: 0.7,
                    fillOpacity: 0.7
                  }}
                  properties={{balloonContent: balloonTemplate}}
                  modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
              />
            )
          })
        }
      </Map>
    </YMaps>
  )
}

CitiesMapChart.propTypes = {
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

export default connect(rentalState, rentalDispatch)(CitiesMapChart)
