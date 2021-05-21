import React, {useState} from 'react'
import {RadioGroup} from '@headlessui/react'
import classNames from 'classnames'
import {useRental} from '@/pages/RentalV1/components/RentalProvider'

function RentalList() {
  const [selected, setSelected] = useState(false)
  const {rentals} = useRental()

  const classes = ({active, checked}) => classNames(
    'relative rounded-lg shadow-md px-5 py-4 cursor-pointer flex focus:outline-none',
    {
      'ring-2 ring-offset-2 ring-offset-primaryDark ring-white ring-opacity-60': active,
      'bg-primary bg-opacity-75 text-white': checked,
      'bg-white': !checked
    })

  return (
    <div className='flex flex-col space-y-3'>
      <RadioGroup value={selected} onChange={setSelected}>
        <div className="space-y-2">
          {rentals.map(({id, name, address, img}) => (
            <RadioGroup.Option key={id} value={name} className={classes}>
              {({active, checked}) => (
                <>
                  <div className='flex items-center justify-between w-full space-x-4'>
                    <div className='flex space-x-4'>
                      <div className='flex-none w-16 h-16 justify-center text-xs'>
                        <img
                        className='max-w-full max-h-full rounded-md'
                        src={img}
                        alt={name}
                        />
                      </div>
                      <div className='flex flex-col justify-between w-full'>
                        <RadioGroup.Label
                        as="p"
                        className={`font-medium  ${
                          checked ? 'text-white' : 'text-gray-900'
                        }`}
                        >
                          {name}
                        </RadioGroup.Label>
                        <RadioGroup.Description>
                          {address}
                        </RadioGroup.Description>
                      </div>
                    </div>
                    {checked && (
                      <div className="text-white">
                        <CheckIcon className="w-6 h-6" />
                      </div>
                    )}
                  </div>
                </>
              )}
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>

    </div>
  )
}

function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
      <path
        d="M7 13l3 3 7-7"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default RentalList
