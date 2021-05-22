import React from 'react'
import PropTypes from 'prop-types'
import {NavLink} from 'react-router-dom'

/**
 * Компонент навигационной ссылки в навигационном меню
 * @param {string} path Путь ссылки
 * @param {string} text Текст ссылки
 * @returns {JSX.Element} Навигационная ссылка
 */
function NavTab({path, text}) {
  return (
    <li className='relative flex items-center font-medium text-sm lg:text-base hover:text-primary transition-colors'>
      <NavLink
        className='flex h-full items-center nav-link hover:nav-link-active'
        activeClassName='nav-link-active'
        to={path}>
        <h3>{text}</h3>
      </NavLink>
    </li>
  )
}

NavTab.propTypes = {
  path: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default NavTab
