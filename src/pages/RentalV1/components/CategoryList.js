import React from 'react'
import {Disclosure} from '@headlessui/react'
import ChevronDownIcon from '@/assets/icons/Chevron/ChevronDownIcon'
import Card from '@/components/Card/Card'
import Collapse from '@/components/Collapse'
import {useRental} from '@/pages/RentalV1/components/RentalProvider'
import CategoryItem from '@/pages/RentalV1/components/СategoryItem'

function CategoryList() {
  const {equipmentCategories} = useRental()

  return (
    <div className='flex flex-col space-y-3'>
      {
        equipmentCategories.map((equipmentCategory, idx) => (
          <Disclosure key={idx}>
            {({open}) => (
              <Card className='p-4'>
                <Disclosure.Button className='flex flex-stretch justify-between items-center w-full text-gray-800'>
                  <div className='flex items-center space-x-2'>
                    <div className='object-contain w-8 h-8'>
                      <img
                        src={equipmentCategory.img}
                        alt={equipmentCategory.name}
                        className=''
                      />
                    </div>
                    <span className='text-md font-semibold'>{equipmentCategory.name}</span>
                  </div>
                  <ChevronDownIcon className={`${open ? 'transform rotate-180' : ''}`}/>
                </Disclosure.Button>
                <Collapse isOpen={open}>
                  <div className='overflow-x-auto overflow-y-hidden flex flex-shrink space-x-4 mt-2'>
                    {equipmentCategory.types.map(({id, name, img, available}) => (
                      <CategoryItem key={id} name={name} imageUrl={img} available={available}/>
                    ))}
                  </div>
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
