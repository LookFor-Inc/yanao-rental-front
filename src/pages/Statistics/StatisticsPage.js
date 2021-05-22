import React from 'react'
import Card from '@/components/Card/Card'
import CitiesChart from '@/pages/Statistics/components/CitiesChart'
import CitiesMapChart from '@/pages/Statistics/components/CitiesMapChart'

function StatisticsPage() {
  return (
    <div className='bg-gray-100 '>
      <div className='flex flex-col space-y-8 mx-auto py-6 px-4 sm:px-6 lg:px-8 max-w-7xl'>
        <h1 className="text-4xl text-gray-800 font-bold mt-4">Аналитика по городам</h1>
        <Card className='p-6'>
          <CitiesChart />
        </Card>
        <h1 className="text-4xl text-gray-800 font-bold mt-4">Аналитика по точкам проката</h1>
        <CitiesMapChart />
      </div>
    </div>
  )
}

export default StatisticsPage
