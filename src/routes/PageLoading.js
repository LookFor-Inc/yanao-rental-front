import React from 'react'

/**
 * Индикатор загрузки страницы
 * @returns {JSX.Element} Элемент загрузки
 */
function PageLoading() {
  return (
    <div className='fixed top-0 inset-x-0'>
      <div className='h-1 animate-pulse bg-primary' />
    </div>
  )
}

export default PageLoading
