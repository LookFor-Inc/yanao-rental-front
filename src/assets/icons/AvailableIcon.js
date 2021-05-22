import React from 'react'

/**
 * Иконка с тремя вертикальными чёрточками
 * @param {object} props Дополнительные свойства
 * @returns {JSX.Element} Иконка Bars
 */
function AvailableIcon(props) {
  return (
    <svg {...props} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.8571 0H2.14286C0.959375 0 0 0.959375 0 2.14286V17.8571C0 19.0406 0.959375 20 2.14286
      20H17.8571C19.0406 20 20 19.0406 20 17.8571V2.14286C20 0.959375 19.0406 0 17.8571 0ZM17.8571
      17.8571H2.14286V2.14286H17.8571V17.8571ZM16.2561 7.06589L8.55121 14.7089C8.34116 14.9173 8.00196 14.9159 7.79362
      14.7059L3.74089 10.6204C3.53254 10.4103 3.53388 10.0711 3.74397 9.86272L4.75821 8.85665C4.96826 8.6483 5.30746
      8.64964 5.5158 8.85973L8.18509 11.5507L14.4954 5.29103C14.7055 5.08268 15.0447 5.08402 15.253 5.29406L16.2591
      6.30826C16.4675 6.51835 16.4661 6.85754 16.2561 7.06589Z" fill="green"/>
    </svg>
  )
}

export default AvailableIcon
