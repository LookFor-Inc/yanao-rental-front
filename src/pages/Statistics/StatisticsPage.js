import React from 'react'
import Container from '@/components/Container'
import CitiesChart from '@/pages/Statistics/components/CitiesChart'
import CitiesMapChart from '@/pages/Statistics/components/CitiesMapChart'

function StatisticsPage() {
  return (
    <Container>
      <div className='flex flex-col space-y-8'>
        <h1 className="text-4xl text-gray-800 font-bold">Покупательская способность</h1>
        <CitiesChart />
        <CitiesMapChart />
      </div>
    </Container>
  )
}

export default StatisticsPage
