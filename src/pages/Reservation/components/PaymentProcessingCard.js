import React, {useState} from 'react'
import {RadioGroup} from '@headlessui/react'
import classNames from 'classnames'
import {string} from 'prop-types'
import CheckIcon from '@/assets/icons/CheckIcon'
import CreditCardIcon from '@/assets/icons/CreditCardIcon'
import MoneyIcon from '@/assets/icons/MoneyIcon'
import Card from '@/components/Card/Card'
import Input from '@/components/Input'

const paymentMethod = [
  {
    name: 'Картой онлайн',
    icon: <CreditCardIcon />
  },
  {
    name: 'Наличными',
    icon: <MoneyIcon />
  }
]

function PaymentProcessingCard({...props}) {
  const [selected, setSelected] = useState(false)
  const [fromDate, setFromDate] = useState()
  const [toDate, setToDate] = useState()

  const classes = classNames(
    'flex w-full justify-between p-6 space-x-10 flex-grow',
    props.className
  )

  const radioGroupOptionClasses = ({active, checked}) => classNames(
    'relative rounded-lg shadow-md px-5 py-4 cursor-pointer flex focus:outline-none',
    {
      'ring-2 ring-offset-2 ring-offset-primaryDark ring-white ring-opacity-60': active,
      'bg-primary bg-opacity-75 text-white': checked,
      'bg-gray-100': !checked
    })

  const checkIconClasses = checked => classNames('text-white', {
    'invisible': !checked
  })

  return (
    <Card className={classes}>
      <div>
        <h1 className='text-md text-gray-800 font-semibold'>Время бронирования</h1>
        <div className='flex flex-col h-full mt-3'>
          <Input
            type='datetime-local'
            onChange={e => setFromDate(e.target.value)}
            size='md'
            value={fromDate}
            validation={false}
            label='Начало'
          />
          <Input
            type='datetime-local'
            onChange={e => setToDate(e.target.value)}
            size='md'
            value={toDate}
            validation={false}
            label='Конец'
          />
        </div>
      </div>
      <div className='w-full'>
        <h1 className='text-md text-gray-800 font-semibold'>Способ оплаты</h1>
        <RadioGroup
          className='flex flex-wrap flex-col space-y-4 mt-10'
          value={selected}
          onChange={setSelected}
        >
          {paymentMethod.map(({name, icon}, idx) => (
            <RadioGroup.Option key={idx} value={name} className={radioGroupOptionClasses}>
              {({active, checked}) => (
                <>
                  <div className='flex items-center justify-center w-full space-x-4'>
                    <div className='flex items-center w-6 h-6'>
                      {icon}
                    </div>
                    <div className='flex flex-col justify-between w-full'>
                      <RadioGroup.Label
                        as='p'
                        className={`font-medium  ${
                          checked ? 'text-white' : 'text-gray-900'
                        }`}
                      >
                        {name}
                      </RadioGroup.Label>
                    </div>
                    <div className={checkIconClasses(checked)}>
                      <CheckIcon className='w-6 h-6' />
                    </div>
                  </div>
                </>
              )}
            </RadioGroup.Option>
          ))}
        </RadioGroup>
      </div>
    </Card>
  )
}

PaymentProcessingCard.propTypes = {
  className: string
}

export default PaymentProcessingCard
