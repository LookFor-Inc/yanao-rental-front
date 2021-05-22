import React, {useState} from 'react'
import AvailableIcon from '@/assets/icons/AvailableIcon'
import Button from '@/components/Button'
import Card from '@/components/Card/Card'

const categories = [
  {
    category: 'Велосипеды',
    list: [
      {
        id: 0,
        title: 'Велосипед',
        logo: 'http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcQvMrc5ndh1Zt_zpCEbA7dI6cj852fLC8wECxzrtZ8SojYM' +
          'MG7ei7LDppIBwcjuHoiLzLdZqJIT4umq5UxMOX0',
        cost: '1000 p/час',
        amount: 2,
        booking: 0
      },
      {
        id: 1,
        title: 'Велосипед',
        logo: 'http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcQvMrc5ndh1Zt_zpCEbA7dI6cj852fLC8wECxzrtZ8SojYM' +
          'MG7ei7LDppIBwcjuHoiLzLdZqJIT4umq5UxMOX0',
        cost: '1000 p/час',
        amount: 2,
        booking: 0
      },
      {
        id: 2,
        title: 'Велосипед',
        logo: 'https://www.velopiter.ru/vlp/cache/preview/crop700500/d2d/d2d0ccf3756531da39bdeb80f545975e.jpg',
        cost: '1000 p/час',
        amount: 2,
        booking: 0
      },
      {
        id: 3,
        title: 'Велосипед',
        logo: 'https://klv-oboi.ru/img/gallery/60/thumbs/thumb_l_27668.jpg',
        cost: '1000 p/час',
        amount: 2,
        booking: 0
      },
      {
        id: 4,
        title: 'Велосипед',
        logo: 'http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcQvMrc5ndh1Zt_zpCEbA7dI6cj852fLC8wECxzrtZ8SojYM' +
          'MG7ei7LDppIBwcjuHoiLzLdZqJIT4umq5UxMOX0',
        cost: '1000 p/час',
        amount: 2
      }
    ]
  },
  {
    category: 'Самокаты',
    list: [
      {
        id: 0,
        title: 'Велосипед',
        logo: 'http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcQvMrc5ndh1Zt_zpCEbA7dI6cj852fLC8wECxzrtZ8SojYM' +
          'MG7ei7LDppIBwcjuHoiLzLdZqJIT4umq5UxMOX0',
        cost: '1000 p/час',
        amount: 2,
        booking: 0
      },
      {
        id: 1,
        title: 'Велосипед',
        logo: 'http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcQvMrc5ndh1Zt_zpCEbA7dI6cj852fLC8wECxzrtZ8SojYM' +
          'MG7ei7LDppIBwcjuHoiLzLdZqJIT4umq5UxMOX0',
        cost: '1000 p/час',
        amount: 2,
        booking: 0
      },
      {
        id: 2,
        title: 'Велосипед',
        logo: 'https://www.velopiter.ru/vlp/cache/preview/crop700500/d2d/d2d0ccf3756531da39bdeb80f545975e.jpg',
        cost: '1000 p/час',
        amount: 2,
        booking: 0
      },
      {
        id: 3,
        title: 'Велосипед',
        logo: 'https://klv-oboi.ru/img/gallery/60/thumbs/thumb_l_27668.jpg',
        cost: '1000 p/час',
        amount: 2,
        booking: 0
      },
      {
        id: 4,
        title: 'Велосипед',
        logo: 'http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcQvMrc5ndh1Zt_zpCEbA7dI6cj852fLC8wECxzrtZ8SojYM' +
          'MG7ei7LDppIBwcjuHoiLzLdZqJIT4umq5UxMOX0',
        cost: '1000 p/час',
        amount: 2
      }
    ]
  }
]

function RentServiceContent() {
  const [buttonText, setButtonText] = useState('Забронировано')
  return (
    <div>
      {
        categories.map((equipmentType, idx) => (
          <div className="mt-3" key={idx}>
            <h1 className="text-2xl text-gray-800 font-bold mb-3">
              {equipmentType.category}
            </h1>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
              {
                equipmentType.list.map(item => (
                  <Card key={idx}>
                    <div className="md:flex-shrink-0">
                      <img className="w-full md:h-40 sm:h-48 h-52sm:h-object-cover"
                           src={item.logo}
                           alt={item.title}/>
                    </div>
                    <div className="p-4">
                      <p className="font-bold text-gray-800">
                        {item.title}
                      </p>
                      <p className="text-sm font-medium text-gray-500 mb-1.5">
                        {item.cost}
                      </p>
                      <div className="flex items-center">
                        <AvailableIcon className="mr-1.5"/>
                        <p className="text-xl font-bold text-green-700">
                          {item.amount}
                        </p>
                      </div>
                      {item.id !== 3 &&
                      <Button
                        size='sm'
                        className='w-full'
                        color='secondary'
                      >
                        Забронировать
                      </Button>
                      }
                      {item.id === 3 &&
                      <Button
                        size='sm'
                        className='w-full'
                        color='primary'
                        onMouseOver={() => setButtonText('Перейти к заказу')}
                        onMouseLeave={()=> setButtonText('Забронировано')}
                      >
                        {buttonText}
                      </Button>
                      }
                    </div>
                  </Card>
                ))}
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default RentServiceContent
