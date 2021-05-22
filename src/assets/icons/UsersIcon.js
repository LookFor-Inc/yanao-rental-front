import React from 'react'

/**
 * Иконка пользователей
 * @param {object} props Дополнительные свойства
 * @returns {JSX.Element} Иконка пользователей
 */
function UsersIcon(props) {
  return (
    <svg {...props} viewBox='0 0 512 446' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
      <path d='M256 174C303.972 174 343 134.972 343 87C343 39.028 303.972 0 256 0C208.028 0 169 39.028 169 87C169 134.972 208.028 174 256 174ZM256 30C287.43 30 313 55.57 313 87C313 118.43 287.43 144 256 144C224.57 144 199 118.43 199 87C199 55.57 224.57 30 256 30Z'/>
      <path d='M432 174C462.327 174 487 149.327 487 119C487 88.673 462.327 64 432 64C401.673 64 377 88.673 377 119C377 149.327 401.673 174 432 174ZM432 94C445.785 94 457 105.215 457 119C457 132.785 445.785 144 432 144C418.215 144 407 132.785 407 119C407 105.215 418.215 94 432 94Z'/>
      <path d='M444.1 208H420.9C393.561 208 369.961 224.152 359.207 247.352C337.066 223.182 305.263 208 269.979 208H242.022C206.738 208 174.935 223.182 152.794 247.352C142.039 224.152 118.439 208 91.1 208H67.9C30.46 208 0 238.276 0 275.49V384.7C0 400.856 13.194 414 29.412 414H121.139C122.677 431.9 137.729 446 156.022 446H355.979C374.271 446 389.323 431.9 390.862 414H481.541C498.337 414 512.001 400.39 512.001 383.66V275.49C512 238.276 481.54 208 444.1 208V208ZM30 275.49C30 254.818 47.002 238 67.9 238H91.1C111.998 238 129 254.818 129 275.49V285.761C118.913 312.025 121 327.765 121 384H30V275.49ZM361 410.979C361 413.748 358.748 416 355.979 416H156.021C153.252 416 151 413.747 151 410.979V329.022C151 278.832 191.832 238 242.021 238H269.978C320.168 238 361 278.832 361 329.021V410.979ZM482 383.66C482 384.177 487.592 384 391 384C391 327.349 393.071 311.982 383 285.761V275.49C383 254.818 400.002 238 420.9 238H444.1C464.998 238 482 254.818 482 275.49V383.66Z'/>
      <path d='M80 174C110.327 174 135 149.327 135 119C135 88.673 110.327 64 80 64C49.673 64 25 88.673 25 119C25 149.327 49.673 174 80 174ZM80 94C93.785 94 105 105.215 105 119C105 132.785 93.785 144 80 144C66.215 144 55 132.785 55 119C55 105.215 66.215 94 80 94Z'/>
    </svg>

  )
}

export default UsersIcon