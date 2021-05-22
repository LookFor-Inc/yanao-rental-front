import React from 'react'

/**
 * Главная (целевая) страница веб-сайта
 * @returns {JSX.Element} Целевая страница
 */
function LandingPage() {
  return (
    <div className=''>
      <header />
      <main className='top-0 lg:flex w-full justify-center items-center'>
        <section className='text-gray-600'>
          <div className='container px-5 py-24 mx-auto'>
            <div className='flex flex-wrap -mx-4 -mb-10 text-center'>
              <div className='sm:w-1/2 mb-10 px-4'>
                <h2 className='text-2xl font-medium text-gray-900 mt-6 mb-3'>50</h2>
                <p className='text-lg'>Подключённых прокатов</p>
              </div>
              <div className='sm:w-1/2 mb-10 px-4'>
                <h2 className='text-2xl font-medium text-gray-900 mt-6 mb-3'>1000</h2>
                <p className='text-lg'>Активных пользователей</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default LandingPage
