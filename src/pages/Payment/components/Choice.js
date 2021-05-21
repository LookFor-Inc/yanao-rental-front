import React from 'react'
// eslint-disable-next-line no-unused-vars
import MinusIcon from '@/assets/icons/MinusIcon'
// eslint-disable-next-line no-unused-vars
import Button from '@/components/Button'
// eslint-disable-next-line no-unused-vars
import Card from '@/components/Card/Card'
// eslint-disable-next-line no-unused-vars
import IconButton from '@/components/IconButton'
import SelectedItem from '@/pages/Payment/components/SelectedItem'
// eslint-disable-next-line no-unused-vars
import PlusIcon from '../../../assets/icons/PlusIcon'

const categories = [
  {
    count: 1,
    title: 'Велосипед мужской',
    logo: 'http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcQvMrc5ndh1Zt_zpCEbA7dI6cj852fLC8wECxzrtZ8SojYM' +
      'MG7ei7LDppIBwcjuHoiLzLdZqJIT4umq5UxMOX0'
  },
  {
    count: 1,
    title: 'Велосипед Олега',
    logo: 'http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcRkFgFFwPnAU5Gi3A0lJzNUBBUIn-yP7Cuz3fRLjzc-fzQyVeFPt' +
      'PDOskm4uzJiNegjltdPyZ36lttDEPLBjJ4'
  },
  {
    count: 1,
    title: 'Велосипед женский',
    logo: 'https://ultrasport.ru/upload/cache/Products/Product22181/068200cdac-1_1200x.png'
  }
]

// eslint-disable-next-line no-unused-vars
function increase(equipmentType) {
  console.log('1')
  equipmentType.count=equipmentType.count+1
}

function CategoriesEquipment() {
  return (
    <div>
      <h1 className="text-xl text-gray-800 font-bold">
        Мы оцениваем Ваш выбор
      </h1>
      <div className="flex flex-col space-y-3">
        {
          categories.map((equipmentType, idx) => (
            <SelectedItem logo={equipmentType.logo} tittle={equipmentType.title} count={equipmentType.count}/>
            
          ))}
      </div>
    </div>
  )
}

export default CategoriesEquipment
