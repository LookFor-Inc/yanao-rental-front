import React from 'react'
import CategoryList from '@/pages/Rental/components/CategoryList'

function CategoriesEquipment() {
  return (
    <div>
      <h1 className='text-2xl text-gray-800 font-bold'>
        <CategoryList/>
        Категории оборудования
      </h1>
      <CategoryList />
    </div>
  )
}

export default CategoriesEquipment
