import React from 'react'

/**
 * Иконка с тремя вертикальными чёрточками
 * @param {object} props Дополнительные свойства
 * @returns {JSX.Element} Иконка Bars
 */
function BarsIcon(props) {
  return (
    <svg {...props} viewBox='0 0 448 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16 C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16
        16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163
        16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837
        7.163 16 16 16z'
      />
    </svg>
  )
}

export default BarsIcon
