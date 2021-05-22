import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import Container from '@/components/Container'
import {isObjEmpty} from '@/helpers/common'
import NotFoundPage from '@/pages/NotFound/NotFoundPage'
import RentServiceContent from '@/pages/RentService/components/RentServiceContent'
import RentServiceHeader from '@/pages/RentService/components/RentServiceHeader'
import {takeRentService} from '@/services/rentServiceService'

function RentServicePage() {
  const {rentServiceId} = useParams()
  const [rentService, setRentService] = useState({})
  useEffect(() => {
    if (rentServiceId !== null) {
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
          <RentServiceContent rentService={rentService} />
        </Container>
      </div>}
    </>
  )
}

export default RentServicePage
