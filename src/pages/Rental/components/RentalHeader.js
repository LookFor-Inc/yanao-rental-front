import React from 'react'
import classNames from 'classnames'
import {string} from 'prop-types'
import Button from '@/components/Button'
import Input from '@/components/Input'
import RentalTabs from '@/pages/Rental/components/RentalTabs'

function RentalHeader({...props}) {
  const classes = classNames(
    'flex justify-between w-full mb-12 mt-8',
    props.className
  )

  return (
    <>
      <div className={classes}>
        <h1 className='text-4xl text-gray-800 font-bold'>
          Поиск прокатов
        </h1>
        <RentalTabs/>
      </div>
      <form className='flex space-x-3 w-full'>
        <Input
          placeholder='Найти прокат'
          validation={false}
        />
        <Button
          color='primary'
          type='submit'
        >
          Найти
        </Button>
      </form>
    </>
  )
}

RentalHeader.propTypes = {
  className: string
}

export default RentalHeader
