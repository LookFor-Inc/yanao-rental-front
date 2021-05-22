import React, {useState} from 'react'
import classNames from 'classnames'
import LinkButton from '@/components/LinkButton'

function RentalTabs() {
  const [tab, setTab] = useState('list')

  const btnClasses = tabParam => classNames(
    'font-semibold text-md rounded-md py-0.5 px-1.5 text-xs',
    {
      'bg-white shadow': tabParam === tab
    }
  )

  return (
    <div className='flex space-x-2 bg-gray-200 rounded-md'>
      <LinkButton
        className={btnClasses('list')}
        to='/rental/list'
        onClick={e => {
          setTab('list')
        }}
      >
        Список
      </LinkButton>
      <LinkButton
        className={btnClasses('map')}
        to='/rental/map'
        onClick={e => {
          setTab('map')
        }}
      >
        Карта
      </LinkButton>
    </div>
  )
}

export default RentalTabs
