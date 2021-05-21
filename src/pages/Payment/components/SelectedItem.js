import React, {useState} from 'react'
import MinusIcon from '@/assets/icons/MinusIcon'
import PlusIcon from '@/assets/icons/PlusIcon'
import Button from '@/components/Button'
import Card from '@/components/Card/Card'

function increase(count, setCount) {
  setCount(count+1)
}

function reduce(count, setCount) {
  if (count === 0) {
    return
  }
  setCount(count-1)
}

function SelectedItem(logo, title, defaultCount) {
  const [count, setCount] = useState(count)
  return (
    <Card className="p-4 flex justify-between w-full text-gray-800">
      <div className="flex space-x-2">
        <img
          src={logo}
          alt={title}
          className="object-contain w-8"
        />
        <span className="text-md font-semibold">{title}</span>
      </div>
      <div className='flex'>
        <Button
          size='xs'
          className='w-5 h-5'
          onClick = {()=> {
            reduce(count, setCount)
          }}>
          <MinusIcon className='w-4 h-4'/>
        </Button>
        {count}
        <Button
          size='xs'
          className='w-5 h-5'
          onClick = {()=> {
            increase(count, setCount)
          }}>
          <PlusIcon className='w-4 h-4'/>
        </Button>
      </div>
    </Card>
  )
}

export default SelectedItem
