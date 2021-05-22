import React from 'react'

/**
 * Иконка пользователя
 * @param {object} props Дополнительные свойства
 * @returns {JSX.Element} Иконка пользователя
 */
function UserTieIcon(props) {
  return (
    <svg {...props} width='24' height='24' viewBox='0 0 24 24' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M12 12C14.7617 12 17 9.76172 17 7C17 4.23828 14.7617 2 12 2C9.23828 2 7 4.23828 7 7C7 9.76172 9.23828 12 12
        12ZM15.7422 13.2734L13.875 20.75L12.625 15.4375L13.875 13.25H10.125L11.375 15.4375L10.125 20.75L8.25781
        13.2734C5.47266 13.4062 3.25 15.6836 3.25 18.5V20.125C3.25 21.1602 4.08984 22 5.125 22H18.875C19.9102 22 20.75
        21.1602 20.75 20.125V18.5C20.75 15.6836 18.5273 13.4062 15.7422 13.2734Z'
      />
    </svg>
  )
}

export default UserTieIcon
