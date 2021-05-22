import MapMarkerIcon from '@/assets/icons/MapMarkerIcon'
import QuestionCircleIcon from '@/assets/icons/QuestionCircleIcon'

const NAV_TABS = {
  MAIN: [
    {
      path: '/rental/list',
      text: 'Поиск прокатов',
      Icon: MapMarkerIcon
    },
    {
      path: '/equipments',
      text: 'Поиск оборудования',
      Icon: QuestionCircleIcon
    }
  ]
}

export default NAV_TABS
