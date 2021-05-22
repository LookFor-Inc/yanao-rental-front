import React from 'react'

/**
 * Иконка Google
 * @param {object} props Дополнительные свойства
 * @returns {JSX.Element} Иконка Google
 */
function GoogleIcon(props) {
  return (
    <svg
      {...props}
      width='21'
      height='20'
      viewBox='0 0 21 20'
      fill='currentColor'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M20.3055 8.0415H19.5V8H10.5V12H16.1515C15.327 14.3285 13.1115 16
        10.5 16C7.1865 16 4.5 13.3135 4.5 10C4.5 6.6865 7.1865 4 10.5 4
        C12.0295 4 13.421 4.577 14.4805 5.5195L17.309 2.691C15.523 1.0265
        13.134 0 10.5 0C4.9775 0 0.5 4.4775 0.5 10C0.5 15.5225 4.9775 20
        10.5 20C16.0225 20 20.5 15.5225 20.5 10C20.5 9.3295 20.431 8.675
        20.3055 8.0415Z'
      />
      <path
        d='M1.65295 5.3455L4.93845 7.755C5.82745 5.554 7.98045 4 10.5 4
        C12.0295 4 13.421 4.577 14.4805 5.5195L17.309 2.691C15.523 1.0265
        13.134 0 10.5 0C6.65895 0 3.32795 2.1685 1.65295 5.3455Z'
      />
      <path
        d='M10.5 20C13.083 20 15.43 19.0115 17.2045 17.404L14.1095 14.785
        C13.1055 15.5455 11.8575 16 10.5 16C7.89903 16 5.69053 14.3415
        4.85853 12.027L1.59753 14.5395C3.25253 17.778 6.61353 20 10.5 20Z'
      />
      <path
        d='M20.3055 8.0415L20.2975 8H19.5H10.5V12H16.1515C15.7555 13.1185
        15.036 14.083 14.108 14.7855C14.1085 14.785 14.109 14.785 14.1095
        14.7845L17.2045 17.4035C16.9855 17.6025 20.5 15 20.5 10C20.5
        9.3295 20.431 8.675 20.3055 8.0415Z'
      />
    </svg>
  )
}

export default GoogleIcon
