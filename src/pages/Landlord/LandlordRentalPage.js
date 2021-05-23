import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import {useParams} from 'react-router-dom'
import Container from '@/components/Container'
import NavTab from '@/components/Navbar/components/NavTab'
import {isObjEmpty} from '@/helpers/common'
import NotFoundPage from '@/pages/NotFound/NotFoundPage'
import RentServiceHeader from '@/pages/RentService/components/RentServiceHeader'
import {takeRentService} from '@/services/rentServiceService'

const LANDLORD_RENTAL_TABS = [
  {
    text: 'Основные настройки',
    path: id => `/landlord/rental/${id}/settings`
  },
  {
    text: 'Оборудование',
    path: id => `/landlord/rental/${id}/equipments`
  },
  {
    text: 'Брони',
    path: id => `/landlord/rental/${id}/reservations`
  }
]

/**
 * Общий макет страницы профиля проката
 * @param {element} children Дочерние элементы
 * @param {any} props Доп. свойства
 * @returns {JSX.Element} Макет
 */
function LandlordRentalPage({children, ...props}) {
  const {path} = useParams()
  const rentServiceId = path
  const [rentService, setRentService] = useState({})
  useEffect(() => {
    if (path !== null) {
      takeRentService(rentServiceId).then(result => {
        setRentService(result.data)
      })
    }
  }, [])

  return (
    <>
      {(rentService === undefined || isObjEmpty(rentService)) && <NotFoundPage />}
      {!isObjEmpty(rentService) && <div className='bg-gray-100'>
        <Container>
          <RentServiceHeader rentService={rentService} />
        </Container>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl'>
          <ul className='flex space-x-10 h-16'>
            {LANDLORD_RENTAL_TABS.map(({path, text}) =>
              <NavTab
                key={path}
                path={path(rentServiceId)}
                text={text}
              />
            )}
          </ul>
        </div>
        <div className='bg-white'>
          <Container>
            {children}
          </Container>
        </div>
      </div>}
    </>
  )
}

LandlordRentalPage.propTypes = {
  children: PropTypes.element.isRequired,
  props: PropTypes.any,
  className: PropTypes.string
}

export default LandlordRentalPage
