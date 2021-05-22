import React from 'react'
import PropTypes from 'prop-types'
import Container from '@/components/Container'
import NavTab from '@/components/Navbar/components/NavTab'
import ProfileHeader from '@/pages/Profile/components/ProfileHeader'

const PROFILE_TABS = [
  {
    text: 'История бронирований',
    path: '/profile'
  },
  {
    text: 'Достижения',
    path: '/profile/achievements'
  }
]

/**
 * Общий макет страницы профиля
 * @param {element} children Дочерние элементы
 * @param {any} props Доп. свойства
 * @returns {JSX.Element} Макет
 */
function ProfilePage({children, ...props}) {
  return (
    <>
      <Container>
        <ProfileHeader />
      </Container>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl'>
        <ul className='flex space-x-10 h-16'>
          {PROFILE_TABS.map(({path, text}) =>
            <NavTab
            key={path}
            path={path}
            text={text}
            />
          )}
        </ul>
      </div>
      <div className='bg-white'>
        <Container>
          {children}
        </Container>
      </div>
    </>
  )
}

ProfilePage.propTypes = {
  children: PropTypes.element.isRequired,
  props: PropTypes.any,
  className: PropTypes.string
}

export default ProfilePage
