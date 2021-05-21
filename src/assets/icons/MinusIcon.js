import React from 'react'

/**
 * @param {object} props Дополнительные свойства
 * @returns {JSX.Element} Иконка крестика
 */
function PlusIcon(props) {
  return (
    <svg {...props} width="20" height="6" viewBox="0 0 20 6" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.5714 0.857117H1.42857C0.639732 0.857117 0 1.49685 0 2.28569V3.71426C0 4.5031 0.639732 5.14283 1.42857
      5.14283H18.5714C19.3603 5.14283 20 4.5031 20 3.71426V2.28569C20 1.49685 19.3603 0.857117 18.5714 0.857117Z"
            fill="black"/>
    </svg>
  )
}

export default PlusIcon
