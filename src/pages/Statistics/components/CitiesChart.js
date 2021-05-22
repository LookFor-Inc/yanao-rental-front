import React from 'react'
import {Line} from 'react-chartjs-2'
import {citiesChartData} from '@/data/citiesChart'

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true
        }
      }
    ]
  }
}

function CitiesChart() {
  return (
    <div>
      <Line data={citiesChartData} options={options} />
    </div>
  )
}

export default CitiesChart
