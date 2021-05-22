import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import Card from '@/components/Card/Card'
import Container from '@/components/Container'
import {fetchEquipmentTypesAndRentals} from '@/store/EquipmentAndRentals/actions'

function LandlordRentalsPage() {
  const dispatch = useDispatch()
  const rentals = useSelector(state => state.equipmentAndRentals.data.rentals)

  useEffect(() => {
    dispatch(fetchEquipmentTypesAndRentals())
  }, [])

  return (
    <div className='flex flex-col items-center w-full h-full bg-gray-100 min-h-screen'>
      <Container>
        <h1 className='text-4xl text-gray-800 font-bold my-8'>
          Список ваших прокатов
        </h1>
        {rentals.map(r => r.id === 3 && (
          <Card className='transition transform p-6 mb-6 rounded-lg shadow-md
      cursor-pointer flex focus:outline-none bg-white'>
            <Link to={`/rental/${r.id}`} key={r.id}
                  className='w-full'>
              <div>
                <div className='flex items-center justify-between w-full space-x-4'>
                  <div className='flex space-x-4'>
                    <div className='flex-none w-16 h-16 justify-center text-xs'>
                      <img
                        className='max-w-full max-h-full rounded-md'
                        src={r.img}
                        alt={r.name}
                      />
                    </div>
                    <div className='flex flex-col justify-between w-full'>
                      <div
                        className='font-medium text-gray-900'
                      >
                        {r.name}
                      </div>
                      <div>
                        {r.address}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </Card>
        ))}
      </Container>
    </div>
  )
}

export default LandlordRentalsPage
