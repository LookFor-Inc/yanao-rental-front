import React, {createElement} from 'react'
import classNames from 'classnames'
import ReactTooltip from 'react-tooltip'
import AchievementIcon from '@/assets/icons/AchievementIcon'
import BankCardIcon from '@/assets/icons/BankCardIcon'
import CashBackIcon from '@/assets/icons/CashBackIcon'
import CompanyIcon from '@/assets/icons/CompanyIcon'
import CompetitionIcon from '@/assets/icons/CompetitionIcon'
import LeadershipIcon from '@/assets/icons/LeadershipIcon'
import OneIcon from '@/assets/icons/OneIcon'
import SportsmanIcon from '@/assets/icons/SportsmanIcon'

const ACHIEVEMENTS = [
  {
    id: 0,
    name: 'Первые шаги',
    description: 'Возьми своё первое оборудование на прокат',
    points: 10,
    status: true,
    component: OneIcon
  },
  {
    id: 1,
    name: 'На соревнования!',
    description: 'Прими участие в спортивном событии',
    points: 20,
    status: true,
    component: CompetitionIcon
  },
  {
    id: 2,
    name: 'Организатор',
    description: 'Организуй своё спортивное событие',
    points: 20,
    status: false,
    component: LeadershipIcon
  },
  {
    id: 3,
    name: 'Десятка!',
    description: 'Забронируй десятое оборудование',
    points: 40,
    status: false,
    component: AchievementIcon
  },
  {
    id: 4,
    name: 'Онлайн оплата',
    description: 'Осуществи онлайн оплату',
    points: 30,
    status: true,
    component: BankCardIcon
  },
  {
    id: 5,
    name: 'Бумеранг',
    description: 'Осуществи оплату баллами',
    points: 200,
    status: false,
    component: CashBackIcon
  },
  {
    id: 6,
    name: 'Вместе веселее',
    description: 'Забронируй сразу несколько оборудований',
    points: 40,
    status: true,
    component: CompanyIcon
  },
  {
    id: 7,
    name: 'Спортсмен',
    description: 'Забронируй оборудование на весь день',
    points: 50,
    status: true,
    component: SportsmanIcon
  }
]

function Achievements() {
  return (
    <div>
      <h1 className='text-2xl text-gray-800 font-semibold my-6'>
        Достижения
      </h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {ACHIEVEMENTS.map(a => (
          <div
            key={a.id}
            className={classNames('flex flex-col space-y-3 justify-center items-center m-5', {
              'text-gray-500': !a.status
            })}
          >
            {createElement(a.component, {
              'className': classNames('h-36 focus:outline-none', {
                'opacity-30': !a.status
              }),
              'data-tip': a.description
            })}
            <ReactTooltip
              offset={{top: 15}}
            />
            <div className='font-bold text-xl'>{a.name}</div>
            <div className='text-center md:hidden text-md font-medium'>{a.description}</div>
            <div>{a.points} баллов</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Achievements
