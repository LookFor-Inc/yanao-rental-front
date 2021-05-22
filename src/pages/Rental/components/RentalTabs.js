import React from 'react'
import classNames from 'classnames'
import LinkButton from '@/components/LinkButton'
import rentalTabs from '@/data/rentalListTabs'
import {useRentalTab} from '@/pages/Rental/components/RentalTabsProvider'

function RentalTabs() {
  // eslint-disable-next-line no-unused-vars
  const {setTab, tab} = useRentalTab()
  const btnClasses = tabParam => classNames('font-semibold text-md rounded-md py-0.5 px-1.5', {
    'bg-white shadow': tabParam === tab
  })

  return (
    <div className='flex space-x-2 bg-gray-200 rounded-md'>
      {
        rentalTabs.map((constTab, idx) => (
          <LinkButton
            key={idx}
            className={btnClasses(constTab)}
            to={constTab.to}
          >
            {constTab.name}
          </LinkButton>
        ))
      }
    </div>
  )
}

export default RentalTabs
