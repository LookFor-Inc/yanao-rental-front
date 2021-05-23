import React from 'react'

/**
 * Иконка награды
 * @param {object} props Дополнительные свойства
 * @returns {JSX.Element} Иконка награды
 */
function AchievementIcon(props) {
  return (
    <svg {...props} viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M186.384 498.981L164.211 457.173C161.878 452.774 156.751 450.65 151.99 452.111L106.748 465.994C98.3507 468.571 90.7457 460.207 94.1067 452.092L173.894 259.475L284.938 305.472L205.151 498.089C201.791 506.204 190.499 506.741 186.384 498.981V498.981Z'
        fill='#FFE07D' />
      <path
        d='M226.545 281.285L155.954 451.702C159.37 452.007 162.523 453.989 164.211 457.172L186.384 498.98C190.499 506.74 201.791 506.204 205.152 498.089L284.939 305.472L226.545 281.285Z'
        fill='#FFD064' />
      <path
        d='M325.616 498.981L347.789 457.173C350.122 452.774 355.249 450.65 360.01 452.111L405.252 465.994C413.649 468.571 421.254 460.207 417.893 452.092L338.106 259.475L227.062 305.472L306.849 498.089C310.21 506.204 321.501 506.741 325.616 498.981V498.981Z'
        fill='#FFE07D' />
      <path
        d='M417.893 452.092L338.106 259.475L279.916 283.579L350.481 453.934C353.097 451.844 356.642 451.077 360.009 452.11L405.251 465.994C413.649 468.571 421.254 460.207 417.893 452.092V452.092Z'
        fill='#FFD064' />
      <path
        d='M276.035 14.5269C284.38 21.1479 295.456 23.2179 305.629 20.0589C319.934 15.6169 335.414 21.6139 342.992 34.5339C348.382 43.7219 357.962 49.6539 368.589 50.3829C383.532 51.4079 395.801 62.5919 398.2 77.3769C399.907 87.8909 406.697 96.8839 416.343 101.403C429.907 107.757 437.307 122.618 434.203 137.271C431.996 147.692 435.08 158.53 442.442 166.228C452.795 177.053 454.326 193.583 446.139 206.126C440.317 215.046 439.277 226.266 443.361 236.104C449.104 249.938 444.561 265.905 432.396 274.643C423.745 280.857 418.722 290.944 418.976 301.593C419.334 316.567 409.33 329.815 394.829 333.569C384.517 336.238 376.189 343.83 372.58 353.852C367.504 367.944 353.39 376.684 338.513 374.946C327.933 373.71 317.425 377.781 310.439 385.822C300.615 397.129 284.297 400.18 271.052 393.185C261.633 388.211 250.364 388.211 240.945 393.185C227.7 400.18 211.382 397.13 201.558 385.822C194.572 377.781 184.064 373.71 173.484 374.946C158.607 376.684 144.492 367.945 139.417 353.852C135.807 343.83 127.48 336.239 117.168 333.569C102.667 329.815 92.6631 316.568 93.0211 301.593C93.2761 290.944 88.2531 280.857 79.6011 274.643C67.4361 265.905 62.8931 249.937 68.6361 236.104C72.7201 226.266 71.6801 215.046 65.8581 206.126C57.6711 193.583 59.2021 177.053 69.5551 166.228C76.9171 158.53 80.0011 147.691 77.7941 137.271C74.6911 122.617 82.0901 107.757 95.6541 101.403C105.3 96.8839 112.091 87.8919 113.797 77.3769C116.197 62.5919 128.465 51.4079 143.408 50.3829C154.035 49.6539 163.616 43.7219 169.005 34.5339C176.584 21.6139 192.064 15.6169 206.368 20.0589C216.541 23.2179 227.617 21.1469 235.962 14.5269C247.7 5.21693 264.301 5.21693 276.035 14.5269V14.5269Z'
        fill='#E8AE4D' />
      <path
        d='M256 344.436C334.538 344.436 398.205 280.769 398.205 202.231C398.205 123.693 334.538 60.0259 256 60.0259C177.462 60.0259 113.795 123.693 113.795 202.231C113.795 280.769 177.462 344.436 256 344.436Z'
        fill='#FFE07D' />
      <path
        d='M256 60.0259C245.113 60.0259 234.514 61.2539 224.329 63.5709C287.621 77.9679 334.863 134.58 334.863 202.231C334.863 269.882 287.621 326.495 224.329 340.891C234.514 343.208 245.114 344.436 256 344.436C334.538 344.436 398.205 280.769 398.205 202.231C398.205 123.693 334.538 60.0259 256 60.0259V60.0259Z'
        fill='#FFD064' />
      <path
        d='M262.591 106.451L282.879 162.028C283.858 164.71 286.365 166.531 289.218 166.634L348.344 168.755C354.884 168.99 357.57 177.258 352.417 181.292L305.83 217.762C303.582 219.522 302.624 222.469 303.409 225.214L319.663 282.102C321.461 288.394 314.427 293.504 308.999 289.85L259.918 256.813C257.549 255.219 254.451 255.219 252.082 256.813L203.001 289.85C197.572 293.504 190.539 288.394 192.337 282.102L208.591 225.214C209.375 222.469 208.418 219.522 206.17 217.762L159.583 181.292C154.43 177.258 157.117 168.99 163.656 168.755L222.782 166.634C225.635 166.532 228.142 164.71 229.121 162.028L249.409 106.451C251.653 100.304 260.347 100.304 262.591 106.451V106.451Z'
        fill='#E8AE4D' />
      <path
        d='M308.999 289.849C314.428 293.503 321.461 288.393 319.663 282.101L316.716 271.786C313.553 277.415 310.014 282.804 306.141 287.925L308.999 289.849Z'
        fill='#E5A32E' />
      <path
        d='M348.344 168.755L330.741 168.123C332.89 176.85 334.23 185.895 334.683 195.174L352.417 181.291C357.57 177.258 354.884 168.989 348.344 168.755V168.755Z'
        fill='#E5A32E' />
      <path
        d='M452.42 210.226C462.566 194.683 460.692 174.46 447.863 161.046C442.209 155.134 439.846 146.828 441.54 138.826C445.387 120.667 436.334 102.486 419.525 94.613C412.117 91.143 406.913 84.251 405.602 76.177C402.629 57.855 387.619 44.172 369.102 42.902C360.941 42.342 353.598 37.796 349.459 30.74C340.067 14.731 321.133 7.39398 303.403 12.898C295.591 15.324 287.103 13.736 280.694 8.65298C266.153 -2.88302 245.844 -2.88302 231.304 8.65298C224.896 13.738 216.406 15.324 208.595 12.898C190.869 7.39298 171.93 14.73 162.539 30.74C158.4 37.796 151.058 42.342 142.897 42.902C124.379 44.172 109.37 57.856 106.396 76.177C105.086 84.251 99.8814 91.143 92.4744 94.613C75.6664 102.487 66.6134 120.668 70.4584 138.826C72.1534 146.828 69.7894 155.135 64.1364 161.047C51.3084 174.461 49.4334 194.685 59.5794 210.228C64.0504 217.077 64.8474 225.677 61.7104 233.232C54.5934 250.374 60.1524 269.909 75.2264 280.737C81.8704 285.51 85.7194 293.241 85.5234 301.418C85.0804 319.973 97.3204 336.181 115.288 340.833C120.592 342.206 125.2 345.275 128.502 349.461L87.1784 449.224C81.3874 463.205 94.4944 477.602 108.947 473.165L154.189 459.281C155.511 458.878 156.937 459.469 157.584 460.688L179.757 502.496C186.85 515.87 206.295 514.926 212.079 500.961L255.15 396.98C255.715 396.961 256.28 396.961 256.845 396.98L299.916 500.961C305.711 514.948 325.155 515.851 332.239 502.497L354.412 460.688C355.058 459.468 356.485 458.877 357.807 459.282L403.048 473.166C417.509 477.605 430.606 463.198 424.818 449.225L383.493 349.462C386.795 345.276 391.403 342.207 396.707 340.834C414.675 336.183 426.914 319.975 426.472 301.419C426.276 293.242 430.126 285.511 436.77 280.739C451.845 269.91 457.402 250.375 450.285 233.233C447.153 225.675 447.95 217.075 452.42 210.226V210.226ZM198.224 495.219C197.283 497.491 194.157 497.63 193.01 495.467L170.837 453.659C166.826 446.096 157.975 442.432 149.792 444.942L104.55 458.826C102.203 459.544 100.098 457.232 101.038 454.963L137.7 366.45C145.972 377.781 159.8 384.096 174.357 382.396C182.481 381.449 190.534 384.567 195.899 390.741C203.682 399.701 214.649 404.457 225.838 404.456C229.377 404.456 232.937 403.961 236.427 402.992L198.224 495.219ZM407.451 458.825L362.21 444.941C354.027 442.431 345.174 446.096 341.164 453.658L318.991 495.466C317.846 497.627 314.716 497.487 313.776 495.218L275.581 403.009C290.1 407.039 305.859 402.529 316.102 390.739C321.466 384.564 329.516 381.444 337.644 382.394C352.215 384.097 366.034 377.78 374.301 366.449L410.965 454.959C411.907 457.237 409.79 459.54 407.451 458.825V458.825ZM439.861 202.028C432.679 213.031 431.399 226.845 436.437 238.981C440.867 249.652 437.408 261.812 428.023 268.554C417.351 276.22 411.167 288.639 411.481 301.774C411.757 313.326 404.137 323.416 392.951 326.311C382.488 329.02 373.702 335.83 368.433 345.039C368.419 345.066 368.404 345.092 368.39 345.118C367.273 347.081 366.305 349.147 365.526 351.312C361.611 362.183 350.868 368.845 339.385 367.499C326.336 365.973 313.397 370.986 304.78 380.905C297.203 389.627 284.774 391.95 274.556 386.555C271.081 384.719 267.401 383.445 263.643 382.708C263.612 382.701 263.581 382.694 263.55 382.688C258.558 381.721 253.428 381.722 248.436 382.692C248.418 382.696 248.401 382.7 248.383 382.703C244.616 383.44 240.929 384.716 237.446 386.555C227.228 391.951 214.8 389.627 207.223 380.905C199.625 372.16 188.672 367.23 177.241 367.23C175.707 367.23 174.162 367.319 172.617 367.5C161.145 368.843 150.39 362.185 146.475 351.313C145.696 349.15 144.73 347.087 143.614 345.125C143.597 345.093 143.58 345.063 143.563 345.031C138.293 335.826 129.51 329.019 119.05 326.311C107.864 323.415 100.245 313.326 100.521 301.775C100.835 288.639 94.6514 276.221 83.9794 268.554C74.5954 261.813 71.1344 249.652 75.5654 238.98C80.6034 226.844 79.3234 213.03 72.1414 202.027C65.8264 192.352 66.9924 179.762 74.9794 171.412C84.0604 161.916 87.8574 148.572 85.1354 135.718C82.7414 124.414 88.3774 113.096 98.8404 108.194C110.739 102.62 119.099 91.549 121.205 78.579C123.056 67.173 132.4 58.655 143.927 57.865C157.036 56.966 168.832 49.663 175.48 38.328C181.327 28.362 193.119 23.796 204.15 27.222C216.699 31.119 230.336 28.57 240.63 20.403C249.68 13.221 262.324 13.221 271.377 20.403C281.67 28.569 295.305 31.12 307.856 27.222C318.891 23.795 330.681 28.363 336.526 38.328C343.174 49.662 354.97 56.965 368.079 57.865C379.606 58.656 388.95 67.174 390.801 78.579C392.907 91.549 401.268 102.62 413.166 108.195C423.63 113.096 429.265 124.414 426.871 135.718C424.149 148.572 427.945 161.916 437.027 171.412C445.01 179.762 446.176 192.352 439.861 202.028V202.028Z'
        fill='black' />
      <path
        d='M113.951 192.129C118.058 192.634 121.805 189.712 122.31 185.602C130.592 118.287 188.067 67.526 256 67.526C323.966 67.526 381.443 118.314 389.698 185.665C390.164 189.466 393.398 192.253 397.132 192.253C397.437 192.253 397.744 192.234 398.054 192.196C402.165 191.692 405.089 187.951 404.586 183.84C395.41 108.979 331.532 52.527 256 52.527C180.503 52.527 116.629 108.949 107.423 183.77C106.918 187.881 109.84 191.623 113.951 192.129V192.129Z'
        fill='black' />
      <path
        d='M398.055 212.26C393.956 211.76 390.203 214.681 389.699 218.792C381.447 286.146 323.969 336.937 256 336.937C188.062 336.937 130.587 286.171 122.308 218.851C121.803 214.741 118.063 211.82 113.949 212.323C109.839 212.828 106.915 216.571 107.421 220.682C116.623 295.509 180.497 351.935 255.999 351.935C331.535 351.935 395.413 295.48 404.585 220.615C405.09 216.505 402.166 212.764 398.055 212.26V212.26Z'
        fill='black' />
      <path
        d='M361.9 171.281C359.994 165.415 354.78 161.481 348.615 161.26L289.814 159.151L269.637 103.879C267.522 98.0849 262.17 94.3409 256.002 94.3409C249.834 94.3409 244.482 98.0849 242.367 103.879L222.19 159.151L163.389 161.26C157.225 161.481 152.01 165.415 150.104 171.281C148.198 177.147 150.104 183.395 154.961 187.197L201.292 223.466L185.128 280.042C183.433 285.973 185.563 292.148 190.554 295.774C195.539 299.396 202.07 299.52 207.191 296.072L256.001 263.215L304.812 296.07C309.927 299.514 316.458 299.398 321.449 295.772C326.44 292.147 328.569 285.972 326.874 280.04L310.71 223.465L357.041 187.196C361.899 183.394 363.806 177.147 361.9 171.281V171.281ZM301.21 211.855C296.535 215.515 294.568 221.568 296.2 227.274L312.09 282.889L264.108 250.592C261.645 248.934 258.823 248.105 256.001 248.105C253.179 248.105 250.357 248.934 247.895 250.591L199.912 282.888L215.802 227.274C217.433 221.566 215.467 215.515 210.793 211.855L165.247 176.201L223.052 174.127C228.984 173.914 234.132 170.173 236.167 164.598L256.002 110.264L275.837 164.598C277.873 170.173 283.02 173.914 288.952 174.126L346.755 176.2L301.21 211.855Z'
        fill='black' />
    </svg>
  )
}

export default AchievementIcon
