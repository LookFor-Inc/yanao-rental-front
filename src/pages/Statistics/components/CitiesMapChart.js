import React from 'react'
import {Circle, GeolocationControl, Map, YMaps} from 'react-yandex-maps'
import {deliveryLocations} from '@/data/deliveryLocations'

function CitiesMapChart() {
  return (
    <YMaps>
      <Map
        className='w-full h-128'
        defaultState={{
          center: [66.088513, 76.674562],
          zoom: 12,
          controls: ['zoomControl', 'fullscreenControl']
        }}
        modules={['control.ZoomControl', 'control.FullscreenControl']}
      >
        <GeolocationControl options={{float: 'right'}}/>
        {
          deliveryLocations.map(({latitude, longitude, name, address, customersAmount}, id) => {
            const balloonTemplate = `
                  <div class='flex flex-col space-y-1 text-gray-800'>
                    <p class='font-semibold'>${name}</p>
                    <p>${address}</p>
                    <p>Доставок: ${customersAmount.amount}</p>
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


export default CitiesMapChart
