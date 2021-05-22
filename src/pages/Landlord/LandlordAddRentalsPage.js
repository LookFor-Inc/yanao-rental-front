import React from 'react'
import Button from '@/components/Button'
import Card from '@/components/Card/Card'
import Container from '@/components/Container'
import Input from '@/components/Input'

function LandlordAddRentalsPage() {
  return (
    <>
      <div className='flex flex-col items-center w-full h-full bg-gray-100 min-h-screen'>
        <Container>
          <h1 className='text-4xl text-gray-800 font-bold my-8'>
            Добавление нового проката
          </h1>
          <Card>
            <Card.Body>
              <div className='bg-white'>
                <div className='grid grid-cols-6'>
                  <div className='col-span-7'>
                    <Input
                      placeholder='Велобайк'
                      label='Название проекта'
                      validation={true}
                    />
                  </div>
                  <div className='col-span-8'>
                    <Input
                      label='Адрес проката'
                      placeholder='г. Новый Уренгой, Ленинградский проспект, 7'
                      validation={true}
                    />
                  </div>
                  <div className='col-span-6'>
                    <Input
                      placeholder='+7(999)999999'
                      label='Номер телефона'
                      type='tel'
                      validation={true}
                    />
                  </div>

                  <div className='col-span-12'>
                    <div className='flex space-x-8 justify-between'>
                      <div className='w-full'>
                        <label htmlFor='schedule' className='text-sm text-gray-800 font-medium'>График работы</label>
                        <select id='schedule' name='country' autoComplete='country'
                                className='mt-1 block w-full mt-2 pt-2 pb-3 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'>
                          <option>пн-пт</option>
                          <option>пн-вс</option>
                        </select>
                      </div>

                      <div className='w-full'>
                        <Input
                          label='Время начала работы'
                          type='time'/>
                      </div>

                      <div className='w-full'>
                        <Input
                          label='Время окончания работы'
                          type='time'/>
                      </div>
                    </div>
                  </div>


                </div>
              </div>
              <div>
                <div className='block text-sm font-medium text-gray-700'>Загрузите логотип проката</div>
                <div
                  className='mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md'>
                  <div className='space-y-1 text-center'>
                    <svg
                      className='mx-auto h-12 w-12 text-gray-400'
                      stroke='currentColor'
                      fill='none'
                      viewBox='0 0 48 48'
                      aria-hidden='true'
                    >
                      <path
                        d='M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02'
                        strokeWidth={2}
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                    <div className='flex text-sm text-gray-600'>
                      <label
                        htmlFor='file-upload'
                        className='relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500'
                      >
                        <span>Загрузите файл</span>
                        <input id='file-upload' name='file-upload' type='file' className='sr-only'/>
                      </label>
                      <p className='pl-1'>или перетащите</p>
                    </div>
                    <p className='text-xs text-gray-500'>PNG, JPG, GIF до 10MB</p>
                  </div>
                </div>
              </div>
            </Card.Body>
            <Card.Footer>
              <Button
                size='md'
                color='primary'
              >
                Save
              </Button>
            </Card.Footer>
          </Card>
        </Container>
      </div>
    </>
  )
}

export default LandlordAddRentalsPage
