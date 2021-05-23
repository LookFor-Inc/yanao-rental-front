import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {GeolocationControl, Map, Placemark, YMaps} from 'react-yandex-maps'
import RentalIcon from '@/assets/icons/RentalIcon'
import UsersIcon from '@/assets/icons/UsersIcon'
import banner01 from '@/assets/images/banner01.png'
import event01 from '@/assets/images/event01.jpeg'
import event02 from '@/assets/images/event02.jpeg'
import Button from '@/components/Button'
import Card from '@/components/Card/Card'
import Container from '@/components/Container'
import RentalCardList from '@/pages/Rental/components/RentalCardList'
import withRentalsPage from '@/pages/Rental/withRentalsPage'
import {fetchEquipmentTypesAndRentals} from '@/store/EquipmentAndRentals/actions'

/**
 * Главная (целевая) страница веб-сайта
 * @returns {JSX.Element} Целевая страница
 */
function LandingPage() {
  const dispatch = useDispatch()
  const rentals = useSelector(state => state.equipmentAndRentals.data.rentals)

  useEffect(() => {
    dispatch(fetchEquipmentTypesAndRentals())
  }, [])

  return (
    <div className='bg-gray-100'>
      <header>
        <Link to='/rental/list'>
          <img src={banner01} alt='Banner' />
        </Link>
      </header>
      <section className='my-4'>
        <Container>
          <h1 className='text-3xl text-gray-800 font-bold my-10'>
            Спортивные события
          </h1>
          <div className='flex flex-col space-y-10'>
            <Card>
              <div className='flex'>
                <div className='flex-none w-64 relative'>
                  <img src={event01} alt='' className='absolute inset-0 w-full h-full object-cover' />
                </div>
                <Card.Body className='flex-auto p-9 space-y-6'>
                  <div>
                    <div className='flex flex-wrap'>
                      <h1 className='flex-auto text-3xl font-semibold'>
                        Велофестиваль 2021
                      </h1>
                      <div className='text-xl font-semibold text-gray-500'>
                        23.07.2021
                      </div>
                    </div>
                    <div className='text-gray-500 mt-2'>
                      г. Салехард
                    </div>
                  </div>
                  <p className='text-lg text-gray-500'>
                    Велофестиваль - это праздник в поддержку развития велосипедной культуры, масштабное велосипедное
                    событие в России и сообщество людей, которые выбирают активный образ жизни и альтернативный
                    транспорт.
                  </p>
                  <div className='flex space-x-4'>
                    <Button color='primary'>Хочу участвовать</Button>
                    <Button color='secondary'>Прокат велосипедов</Button>
                  </div>
                </Card.Body>
              </div>
            </Card>
            <Card>
              <div className='flex'>
                <div className='flex-none w-64 relative'>
                  <img src={event02} alt='' className='absolute inset-0 w-full h-full object-cover' />
                </div>
                <Card.Body className='flex-auto p-9 space-y-6'>
                  <div>
                    <div className='flex flex-wrap'>
                      <h1 className='flex-auto text-3xl font-semibold'>
                        Полумарафон 2021
                      </h1>
                      <div className='text-xl font-semibold text-gray-500'>
                        10.08.2021
                      </div>
                    </div>
                    <div className='text-gray-500 mt-2'>
                      г. Ноябрьск
                    </div>
                  </div>
                  <p className='text-lg text-gray-500'>
                    Полумарафон — крупнейший забег России на дистанции 21,1 км. Внесите свой вклад в спортивную историю
                    страны и пробегите полумарафон или дистанцию 5 км. Вас ждут живописный маршрут по центральным
                    набережным и виды на знаковые достопримечательности.
                  </p>
                  <div className='flex space-x-4'>
                    <Button color='primary'>Хочу участвовать</Button>
                  </div>
                </Card.Body>
              </div>
            </Card>
          </div>
        </Container>
      </section>
      <section className='bg-white text-center my-4'>
        <Container>
          <div className='my-10'>
            <h1 className='text-3xl text-gray-800 font-bold'>
              Инфографика
            </h1>
            <h2 className='text-gray-600 mt-4'>
              Статистика сервиса за 2021 год
            </h2>
          </div>
          <div className='container px-5 py-12 mx-auto'>
            <div className='flex flex-wrap -mx-4 -mb-10 text-center justify-center'>
              <div className='sm:w-1/2 mb-10 px-4'>
                <div
                  className='w-20 h-20 inline-flex items-center justify-center text-primary'>
                  <RentalIcon className='w-20 h-20' />
                </div>
                <h2 className='text-3xl font-bold text-gray-900 mt-6 mb-3'>50</h2>
                <p className='text-xl text-gray-600'>Подключённых прокатов</p>
              </div>
              <div className='sm:w-1/2 mb-10 px-4'>
                <div
                  className='w-20 h-20 inline-flex items-center justify-center text-primary'>
                  <UsersIcon className='w-20 h-20' />
                </div>
                <h2 className='text-3xl font-bold text-gray-900 mt-6 mb-3'>1000</h2>
                <p className='text-lg text-gray-600'>Активных пользователей</p>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section>
        <Container>
          <h1 className='text-3xl text-gray-800 font-bold my-10'>
            Пункты прокатов
          </h1>
          <div className='md:flex md:space-x-16'>
            <div className='overflow-auto h-128'>
              <RentalCardList search={false}/>
            </div>
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
                    <a href='/rental/${id}' class='btn-primary rounded-md py-0.5 px-1 mt-1'>Перейти</a>
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
        </Container>
      </section>
    </div>
  )
}

export default withRentalsPage(LandingPage)
