import React, {Fragment} from 'react'
import {Menu, Transition} from '@headlessui/react'
import classNames from 'classnames'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'

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
              className='max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2
              focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'>
              <span className='sr-only'>Открыть меню</span>
              <img
                className='h-9 w-9 rounded-full'
                src={userData.avatar}
                alt=''
              />
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
              {ITEMS.map(item => (
                <Menu.Item key={item}>
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
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  )
}

export default ProfileMenu
