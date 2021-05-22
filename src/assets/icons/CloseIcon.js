import React from 'react'

/**
 * Иконка крестика
 * @param {object} props Дополнительные свойства
 * @returns {JSX.Element} Иконка крестика
 */
function CloseIcon(props) {
  return (
    <svg
      {...props}
      viewBox='0 0 24 24'
      width='24'
      height='24'
      xmlns='http://www.w3.org/2000/svg'
      fill='currentColor'
      stroke='currentColor'
      aria-hidden='true'
    >
      <path
        d='M6 18L18 6M6 6l12 12'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
      />
    </svg>
  )
}

export default CloseIcon
