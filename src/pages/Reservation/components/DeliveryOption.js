import React from 'react'
import {Disclosure} from '@headlessui/react'
import ArrowIcon from '@/assets/icons/ArrowIcon'
import Card from '@/components/Card/Card'
import Checkbox from '@/components/Checkbox'
import Collapse from '@/components/Collapse'

function DeliveryOption() {
  return (
    <div>
      <h1 className='text-2xl text-gray-800 font-semibold mb-6'>
        Опции
      </h1>
      <Disclosure>
        {({open}) => (
          <Card className='p-4 text-white bg-indigo-500'>
            <Disclosure.Button className='flex flex-stretch justify-between items-center w-full'>
              <div className='flex items-center space-x-2'>
                <span className='text-md font-semibold'>Доставка</span>
              </div>
              <Checkbox
                className='w-6 h-6'
                checked={open}
              />
            </Disclosure.Button>
            <Collapse isOpen={open}>
              <div className='mt-3'>
                <span>
              Укажите куда и когда Вам доставить оборудование, и мы сами его Вам доставим
                </span>
                <div className='flex space-x-4 mt-5'>
                  <Card>
                    <div className='p-6'>
                      <div className='flex space-x-10 justify-between'>
                        <h3 className='text-lg leading-6 font-medium text-gray-900'>Адрес пункта выдачи</h3>
                        <div className='cursor-pointer text-primary text-bold'>Изменить</div>
                      </div>
                      <div className='mt-6 my-3 flex text-black items-center space-x-2'>
                        <ArrowIcon className='h-5' />
                        <span>
                        г. Новый Уренгой, ул. Такая-то, д. 7
                        </span>
                      </div>
                    </div>
                  </Card>
                  <Card>
                    <div className='p-6'>
                      <div className='flex space-x-10 justify-between'>
                        <h3 className='text-lg leading-6 font-medium text-gray-900'>Адрес пункта возврата</h3>
                        <div className='cursor-pointer text-primary text-bold'>Изменить</div>
                      </div>
                      <div className='mt-6 my-3 flex text-black items-center space-x-2'>
                        <ArrowIcon className='h-5' />
                        <span>
                        г. Новый Уренгой, ул. Такая-то, д. 7
                        </span>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </Collapse>
          </Card>
        )}
      </Disclosure>
    </div>
  )
}

export default DeliveryOption
