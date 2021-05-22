import React from 'react'

/**
 * Иконка 1
 * @param {object} props Дополнительные свойства
 * @returns {JSX.Element} Иконка 1
 */
function OneIcon(props) {
  return (
    <svg {...props} viewBox='0 0 512 512' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path fillRule='evenodd' clipRule='evenodd' d='M376.982 422.741C376.982 428.419 376.672 433.169 376.053 437.092C375.433 441.015 374.608 444.216 373.472 446.487C372.44 448.862 371.097 450.514 369.755 451.443C368.309 452.476 366.657 452.991 364.902 452.991H148.397C146.848 452.991 145.299 452.475 143.854 451.443C142.512 450.514 141.273 448.862 140.136 446.487C139.001 444.216 138.175 441.015 137.556 437.092C136.936 433.169 136.627 428.419 136.627 422.741C136.627 416.959 136.833 412.107 137.349 408.08C137.865 404.157 138.691 401.06 139.827 398.582C140.962 396.206 142.202 394.452 143.647 393.316C144.989 392.18 146.641 391.664 148.397 391.664H221.494V137.061L158.618 171.751C154.075 173.92 150.255 175.365 147.364 175.881C144.369 176.294 142.098 175.778 140.343 174.022C138.691 172.267 137.556 169.376 136.936 165.143C136.317 160.91 136.007 154.922 136.007 147.282C136.007 142.429 136.11 138.403 136.317 135.305C136.523 132.208 137.04 129.524 137.865 127.355C138.589 125.084 139.724 123.329 141.169 121.884C142.512 120.438 144.473 118.993 146.848 117.341L230.89 62.9308C231.922 62.1052 233.161 61.4854 234.607 60.9697C236.156 60.4532 238.118 60.0408 240.595 59.7309C242.97 59.421 246.17 59.2144 250.093 59.1119C254.017 59.0078 259.076 59.0078 265.374 59.0078C273.014 59.0078 279.209 59.1111 283.958 59.421C288.708 59.7309 292.321 60.2466 294.696 60.9697C297.174 61.692 298.723 62.6217 299.549 63.8605C300.374 65.0994 300.788 66.5448 300.788 68.4034V391.664H364.8C366.657 391.664 368.309 392.181 369.859 393.316C371.408 394.452 372.647 396.207 373.782 398.582C374.918 401.06 375.744 404.157 376.26 408.081C376.775 412.107 376.982 416.959 376.982 422.741V422.741Z' fill='#CBE558'/>
      <path d='M384.2 407.035C383.585 402.369 382.559 398.512 381.062 395.245C381.044 395.205 381.025 395.165 381.006 395.125C379.214 391.378 377.177 388.751 374.593 386.857C371.695 384.734 368.401 383.657 364.8 383.657H308.795V68.4026C308.795 65.0105 307.925 61.9859 306.212 59.4194C304.308 56.5622 301.289 54.5579 296.984 53.295C294.004 52.3942 289.913 51.784 284.481 51.43C279.932 51.1329 274.039 51 265.374 51C258.971 51 253.912 51 249.883 51.1057C245.665 51.2162 242.192 51.4468 239.602 51.7848C236.627 52.1563 234.165 52.676 232.075 53.3719C232.021 53.3895 231.968 53.4087 231.914 53.4272C229.702 54.2167 227.845 55.1889 226.256 56.3909L142.497 110.618C142.421 110.667 142.348 110.717 142.275 110.768C139.347 112.805 137.167 114.453 135.403 116.327C133.075 118.687 131.36 121.506 130.305 124.712C129.248 127.565 128.582 130.948 128.328 134.774C128.111 138.043 128 142.251 128 147.282C128 155.418 128.332 161.64 129.014 166.304C129.873 172.171 131.672 176.492 134.513 179.51C134.569 179.569 134.626 179.628 134.683 179.686C138.199 183.201 142.833 184.59 148.459 183.814C148.564 183.799 148.668 183.782 148.772 183.764C152.287 183.136 156.636 181.571 162.068 178.977C162.21 178.91 162.35 178.838 162.486 178.761L213.487 150.624L213.489 228.326C213.489 232.749 217.075 236.334 221.497 236.334C225.919 236.334 229.505 232.748 229.505 228.326L229.502 137.059C229.502 134.226 228.005 131.603 225.566 130.164C223.125 128.723 220.106 128.679 217.626 130.048L154.96 164.622C150.218 166.873 147.55 167.687 146.117 167.966C146.029 167.977 145.949 167.985 145.876 167.99C145.596 167.374 145.179 166.164 144.86 163.983C144.299 160.15 144.015 154.53 144.015 147.28C144.015 142.602 144.113 138.752 144.307 135.836C144.5 132.935 144.981 131.172 145.349 130.204C145.402 130.065 145.451 129.924 145.496 129.783C145.788 128.867 146.199 128.177 146.831 127.546C146.902 127.475 146.971 127.403 147.038 127.33C147.87 126.434 149.575 125.198 151.313 123.986L235.241 69.6502C235.464 69.5053 235.679 69.3499 235.887 69.1841C236.028 69.0712 236.386 68.8406 237.215 68.5379C238.273 68.1944 239.744 67.9045 241.629 67.6683C243.716 67.396 246.635 67.2094 250.302 67.1133C254.121 67.0156 259.087 67.0156 265.374 67.0156C273.677 67.0156 279.248 67.1373 283.438 67.4112C288.89 67.7668 291.371 68.3281 292.364 68.6292C292.394 68.6388 292.424 68.6468 292.454 68.6564C292.572 68.6909 292.68 68.7237 292.778 68.7557V391.664C292.778 396.085 296.364 399.671 300.786 399.671H364.799C364.911 399.671 364.972 399.681 364.98 399.683C364.993 399.688 365.043 399.714 365.123 399.773C365.145 399.789 365.665 400.183 366.529 401.974C367.325 403.736 367.928 406.141 368.317 409.098C368.76 412.55 368.974 417.012 368.974 422.74C368.974 427.941 368.694 432.35 368.143 435.843C367.495 439.944 366.789 441.947 366.31 442.904C366.246 443.032 366.185 443.163 366.128 443.294C365.629 444.437 365.19 444.855 365.195 444.858C365.163 444.88 365.132 444.902 365.1 444.925C365.039 444.969 365.02 444.982 364.903 444.982H148.594C148.57 444.968 148.542 444.949 148.509 444.926C148.402 444.811 147.971 444.305 147.361 443.031C147.341 442.99 147.321 442.948 147.3 442.907C146.821 441.948 146.114 439.943 145.466 435.842C144.914 432.348 144.634 427.941 144.634 422.74C144.634 417.014 144.849 412.551 145.289 409.125C145.681 406.141 146.284 403.736 147.08 401.974C147.82 400.441 148.349 399.846 148.529 399.671H221.494C225.917 399.671 229.502 396.085 229.502 391.664V300.398C229.502 295.976 225.917 292.39 221.494 292.39C217.072 292.39 213.487 295.976 213.487 300.398V383.657H148.397C144.699 383.657 141.311 384.849 138.588 387.108C136.245 388.983 134.286 391.607 132.603 395.127C132.584 395.167 132.565 395.206 132.547 395.246C131.05 398.513 130.024 402.37 129.407 407.062C128.87 411.254 128.619 416.236 128.619 422.741C128.619 428.861 128.955 433.964 129.646 438.341C130.439 443.359 131.487 447.066 132.942 450.003C134.687 453.634 136.75 456.25 139.246 457.993C142.02 459.961 145.183 461 148.398 461H364.904C368.32 461 371.59 459.961 374.364 457.993C376.983 456.164 379.18 453.361 380.731 449.874C382.153 446.96 383.183 443.287 383.963 438.342C384.654 433.964 384.99 428.861 384.99 422.742C384.99 416.236 384.739 411.253 384.2 407.035V407.035Z' fill='black'/>
      <path d='M221.499 272.37C225.922 272.37 229.507 268.784 229.507 264.363C229.507 259.941 225.922 256.355 221.499 256.355H221.494C217.071 256.355 213.489 259.941 213.489 264.363C213.489 268.784 217.077 272.37 221.499 272.37V272.37Z' fill='black'/>
    </svg>
  )
}

export default OneIcon