import React from 'react'
import {Disclosure} from '@headlessui/react'
import ChevronUpIcon from '@/assets/icons/Chevron/ChevronUpIcon'
import Card from '@/components/Card/Card'
import Collapse from '@/components/Collapse'
import CategoryItem from '@/pages/Rental/components/СategoryItem'

const categories = [
  {
    logo: 'https://images.giant-bicycles.com/b_white,c_pad,h_600,q_80,w_800/csl3ht2dwybelphcinqe/' +
      'MY21Escape1Disc_ColorACharcoal.jpg',
    title: 'Вeлосипеды',
    subCategories: [
      {
        title: 'первый тип',
        logo: 'http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcQvMrc5ndh1Zt_zpCEbA7dI6cj852fLC8wECxzrtZ8SojYM' +
          'MG7ei7LDppIBwcjuHoiLzLdZqJIT4umq5UxMOX0'
      },
      {
        title: 'первый тип',
        logo: 'http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcRkFgFFwPnAU5Gi3A0lJzNUBBUIn-yP7Cuz3fRLjzc-fzQyVeFPt' +
          'PDOskm4uzJiNegjltdPyZ36lttDEPLBjJ4'
      },
      {
        title: 'первый тип',
        logo: 'https://ultrasport.ru/upload/cache/Products/Product22181/068200cdac-1_1200x.png'
      }]
  }
]

function CategoryList() {
  return (
    <div className='flex flex-col space-y-3'>
      {
        categories.map((equipmentType, idx) => (
          <Disclosure key={idx}>
            {({open}) => (
              <Card className='p-4'>
                <Disclosure.Button className='flex justify-between w-full text-gray-800'>
                  <div className='flex space-x-2'>
                    <img
                      src={equipmentType.logo}
                      alt={equipmentType.title}
                      className='object-contain w-8'
                    />
                    <span className='text-md font-semibold'>{equipmentType.title}</span>
                  </div>
                  <ChevronUpIcon className={`${open ? 'transform rotate-180' : ''}`}/>
                </Disclosure.Button>
                <Collapse isOpen={open} className='overflow-x-auto overflow-y-hidden flex flex-shrink space-x-4'>
                  {equipmentType.subCategories.map(({title, logo}, idx) => (
                    <CategoryItem key={idx} title={title} logo={logo}/>
                  ))}
                </Collapse>
              </Card>
            )}
          </Disclosure>
        ))
      }
    </div>
  )
}

export default CategoryList

