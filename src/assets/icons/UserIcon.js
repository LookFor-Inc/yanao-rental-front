import React from 'react'

/**
 * Иконка пользователя
 * @param {object} props Дополнительные свойства
 * @returns {JSX.Element} Иконка пользователя
 */
function UserIcon(props) {
  return (
    <svg {...props} viewBox='0 0 24 24' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M12 13.25C15.1055 13.25 17.625 10.7305 17.625 7.625C17.625 4.51953 15.1055 2 12 2C8.89453 2 6.375 4.51953
        6.375 7.625C6.375 10.7305 8.89453 13.25 12 13.25ZM17 14.5H14.8477C13.9805 14.8984 13.0156 15.125 12
        15.125C10.9844 15.125 10.0234 14.8984 9.15234 14.5H7C4.23828 14.5 2 16.7383 2 19.5V20.125C2 21.1602 2.83984 22
        3.875 22H20.125C21.1602 22 22 21.1602 22 20.125V19.5C22 16.7383 19.7617 14.5 17 14.5Z'
      />
    </svg>
  )
}

export default UserIcon