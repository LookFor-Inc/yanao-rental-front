import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import TrashIcon from '@/assets/icons/TrashIcon'
import WrenchIcon from '@/assets/icons/WrenchIcon'
import Card from '@/components/Card/Card'
import {takeRentService} from '@/services/rentServiceService'

function RentalEquipments() {
  const {rentServiceId} = useParams()
  const [categories, setCategories] = useState([])

  useEffect(() => {
    if (rentServiceId !== null) {
      takeRentService(rentServiceId).then(result => {
        setCategories(result.data.categories)
      })
    }
  }, [])

  return (
    <div>
      {Object.entries(categories).map(([categoryName, equipments], id) => (
        <div className='mt-12' key={id}>
          <h1 className='text-2xl text-gray-800 font-bold mb-6'>
            {categoryName}
          </h1>
          <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4'>
            {equipments.map((equipment, idx) => (
              <Card key={idx} className='flex flex-col justify-between'>
                <div className='flex items-center justify-center'>
                  <img
                    className='w-52 p-2'
                    src={equipment.img}
                    alt={`${equipment.name} img`}
                  />
                </div>
                <div className='p-4'>
                  <div className='flex justify-between'>
                    <div className='flex flex-col'>
                      <p className='font-bold text-gray-800'>
                        {equipment.name}
                      </p>
                      <p className='text-sm font-medium text-gray-500 mb-1.5'>
                        {equipment.price} pуб./ч.
                      </p>
                    </div>
                    <div>
                      <p className='text-xl font-semibold text-right text-green-700'>~{equipment.totalCount}</p>
                      <div className='flex space-x-4'>
                        <WrenchIcon className='text-primary hover:text-primaryDark cursor-pointer' />
                        <TrashIcon className='text-error hover:text-errorDark cursor-pointer' />
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default RentalEquipments
