import React, {Fragment} from 'react'
import {Menu, Transition} from '@headlessui/react'
import classNames from 'classnames'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {ADMIN} from '@/data/userTypes'

const ITEMS = [
  {
    name: 'Профиль',
    to: '/profile'
  },
  {
    name: 'Выйти',
    to: '/auth/logout'
  }
]

function ProfileMenu() {
  const userData = useSelector(state => state.user)

  return (
    <Menu as='div' className='ml-3 relative'>
      {({open}) => (
        <>
          <div>
            <Menu.Button
              className='max-w-xs bg-gray-200 rounded-full flex items-center text-sm focus:outline-none focus:ring-2
              focus:ring-offset-2 focus:ring-offset-gray-400 focus:ring-white'>
              <span className='sr-only'>Открыть меню</span>
              <img
                className='h-9 w-9 rounded-full'
                src={userData.avatar}
                alt=''
              />
              <div className='p-2 font-medium'>
                {userData.email}
              </div>
            </Menu.Button>
          </div>
          <Transition
            show={open}
            as={Fragment}
            enter='transition ease-out duration-100'
            enterFrom='transform opacity-0 scale-95'
            enterTo='transform opacity-100 scale-100'
            leave='transition ease-in duration-75'
            leaveFrom='transform opacity-100 scale-100'
            leaveTo='transform opacity-0 scale-95'
          >
            <Menu.Items
              static
              className='origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1
              ring-black ring-opacity-5 focus:outline-none'
            >
              {userData.type === ADMIN &&
              <Menu.Item>
                {({active}) => (
                  <Link
                  to='/statistics'
                  className={classNames(
                    active ? 'bg-gray-100' : '',
                    'block px-4 py-2 text-sm text-gray-700'
                  )}
                  >
                  Аналитика
                  </Link>
                )}
              </Menu.Item>
              }
              {ITEMS.map(item => (
                <Menu.Item key={item.name}>
                  {({active}) => (
                    <Link
                      to={item.to}
                      className={classNames(
                        active ? 'bg-gray-100' : '',
                        'block px-4 py-2 text-sm text-gray-700'
                      )}
                    >
                      {item.name}
                    </Link>
                  )}
                </Menu.Item>
              ))}
              <div className='pl-4 pr-4 pt-2 pb-2 text-sm text-gray-400'>
                У вас 170 баллов
              </div>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  )
}

export default ProfileMenu
