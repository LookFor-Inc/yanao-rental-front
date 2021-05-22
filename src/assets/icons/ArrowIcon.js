import React from 'react'

/**
 * Иконка стрелочки
 * @param {object} props Дополнительные свойства
 * @returns {JSX.Element} Иконка стрелочки
 */
function ArrowIcon(props) {
  return (
    <svg {...props} viewBox='0 0 16 16' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
      <path d='M12.9092 1.42494L2.08175 6.42228C0.832551 7.00534 1.24895 8.83761 2.58149 8.83761H7.16242V13.4185C7.16242 14.7511 8.99469 15.1677 9.57776 13.9183L14.5751 3.09081C14.9915 2.09108 13.9087 1.00828 12.9092 1.42494V1.42494Z' />
    </svg>
  )
}

export default ArrowIcon
