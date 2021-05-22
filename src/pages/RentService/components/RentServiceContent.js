import React from 'react'
import Card from '@/components/Card/Card'

const categories = [
  {
    category: 'Велосипеды',
    list: [
      {
        title: 'Велосипед',
        logo: 'http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcQvMrc5ndh1Zt_zpCEbA7dI6cj852fLC8wECxzrtZ8SojYM' +
          'MG7ei7LDppIBwcjuHoiLzLdZqJIT4umq5UxMOX0',
        cost: '1000 p/час',
        amount: 2
      },
      {
        title: 'Велосипед',
        logo: 'http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcQvMrc5ndh1Zt_zpCEbA7dI6cj852fLC8wECxzrtZ8SojYM' +
          'MG7ei7LDppIBwcjuHoiLzLdZqJIT4umq5UxMOX0',
        cost: '1000 p/час',
        amount: 2
      },
      {
        title: 'Велосипед',
        logo: 'http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcQvMrc5ndh1Zt_zpCEbA7dI6cj852fLC8wECxzrtZ8SojYM' +
          'MG7ei7LDppIBwcjuHoiLzLdZqJIT4umq5UxMOX0',
        cost: '1000 p/час',
        amount: 2
      },
      {
        title: 'Велосипед',
        logo: 'http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcQvMrc5ndh1Zt_zpCEbA7dI6cj852fLC8wECxzrtZ8SojYM' +
          'MG7ei7LDppIBwcjuHoiLzLdZqJIT4umq5UxMOX0',
        cost: '1000 p/час',
        amount: 2
      },
      {
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
  return (
    <div>
      {
        categories.map((equipmentType, idx) => (
          <>
            <h1 className='text-xl text-gray-800 font-bold'>
              {equipmentType.category}
            </h1>
            <div className='grid grid-cols-4 gap-4'>
              {
                equipmentType.list.map(item => (
                  <Card className='p-4' key={idx}>
                    <div className='md:flex-shrink-0'>
                      <img className='w-full object-cover h-full'
                           src={item.logo}
                           alt={item.title} />
                    </div>
                    <p className='font-bold text-gray-800'>
                      {item.title}
                    </p>
                    <p className='text-sm font-medium text-gray-500'>
                      {item.cost}
                    </p>
                  </Card>
                ))}
            </div>
          </>
        ))
      }
    </div>
  )
}

export default RentServiceContent
