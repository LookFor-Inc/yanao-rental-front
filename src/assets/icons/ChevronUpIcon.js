import React from 'react'

/**
 * Иконка стрелочки вверх
 * @param {object} props Дополнительные свойства
 * @returns {JSX.Element} Иконка стрелочки вверх
 */
function ChevronUpIcon(props) {
  return (
    <svg {...props} width='24' height='24' viewBox='0 0 24 24' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M12.7772 6.25325L21.678 15.1541C22.1073 15.5834 22.1073 16.2793 21.678 16.7086L20.6399 17.7467C20.2114
        18.1753 19.5168 18.1761 19.0873 17.7485L12 10.6945L4.91274 17.7485C4.48319 18.1761 3.78864 18.1753 3.36009
        17.7467L2.32196 16.7086C1.89268 16.2793 1.89268 15.5833 2.32196 15.1541L11.2227 6.25325C11.652 5.82402 12.348
        5.82402 12.7772 6.25325Z'
      />
    </svg>
  )
}

export default ChevronUpIcon
