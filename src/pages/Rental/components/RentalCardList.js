import React, {useEffect} from 'react'
import useSearchInput from '@/hooks/useSearchInput'
import RentalCard from '@/pages/Rental/components/RentalCard'
import {useSearchInputProvider} from '@/pages/Rental/components/SearchInputProvider'

// eslint-disable-next-line react/prop-types
function RentalCardList({search}) {
  const {items, setResult} = useSearchInputProvider()
  const searchInput = useSearchInput('Найти прокат', items, 'name')
  useEffect(() => {
    setResult(searchInput.found)
  }, [searchInput.found])
  const {result} = useSearchInputProvider()
  return (
    <div>
      {search &&
      <div className='mb-8 -mt-2.5'>
        {searchInput.bind}
      </div>
      }
      {result.map(({id, name, address, img}) => (
        <RentalCard
          key={id}
          name={name}
          address={address}
          id={id}
          img={img}
        />
      ))}
    </div>
  )
}

export default RentalCardList
