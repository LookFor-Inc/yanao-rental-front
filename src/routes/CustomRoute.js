import React, {useMemo} from 'react'
import PropTypes from 'prop-types'
import {Route} from 'react-router-dom'
import {APP_NAME} from '@/data/constants'

/**
 * Кастомный элемент роута
 * @param {string} title Заголовок страницы
 * @param {JSX.Element} children Дочерние элементы
 * @param {object} rest Свойства
 * @returns {JSX.Element} Роут
 */
function CustomRoute({title, children, ...rest}) {
  useMemo(() => {
    document.title = title + ' | ' + APP_NAME
  }, [title])

  return (
    <Route {...rest}>
      {children}
    </Route>
  )
}

CustomRoute.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element
}

export default CustomRoute
