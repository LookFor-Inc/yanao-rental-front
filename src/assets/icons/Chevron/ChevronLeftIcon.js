import React from 'react'

/**
 * Иконка стрелочки влево
 * @param {object} props Дополнительные свойства
 * @returns {JSX.Element} Иконка стрелочки влево
 */
function ChevronLeftIcon(props) {
  return (
    <svg {...props} viewBox='0 0 24 24' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M15.41,7.41L14,6l-6,6 6,6 1.41,-1.41L10.83,12z'
      />
    </svg>
  )
}

export default ChevronLeftIcon
