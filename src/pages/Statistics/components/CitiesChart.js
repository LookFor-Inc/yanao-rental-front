import React from 'react'
import {Line} from 'react-chartjs-2'
import {citiesChartData} from '@/data/citiesChart'

const options = {
  scales: {
    x: {
      title: {
        color: '#27272A',
        display: true,
        text: 'Месяцы',
        font: {
          size: 18,
          family: 'Inter',
          weight: '600'
        }
      }
    },
    y: {
      title: {
        color: '#27272A',
        display: true,
        text: 'Жители',
        font: {
          size: 18,
          family: 'Inter',
          weight: '600'
        }
      }
    }
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
