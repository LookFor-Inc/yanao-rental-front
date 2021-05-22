import React, {useMemo} from 'react'
import PropTypes from 'prop-types'
import {Redirect, Route, useHistory} from 'react-router-dom'
import {APP_NAME} from '@/data/constants'

/**
 * Кастомный элемент роута
 * @param {string} title Заголовок страницы
 * @param {bool} access Доступ к маршруту
 * @param {string} forbiddenUrl Ссылка переадресации при запрете
 * @param {JSX.Element} children Дочерние элементы
 * @param {object} rest Свойства
 * @returns {JSX.Element} Роут
 */
function CustomRoute({title, access = true, forbiddenUrl, children, ...rest}) {
  const history = useHistory()

  useMemo(() => {
    document.title = title + ' | ' + APP_NAME
  }, [title])

  if (access) {
    return (
      <Route {...rest}>
        {children}
      </Route>
    )
  }

  history.push('/')
  return <Redirect push to='/auth/login' />
}

CustomRoute.propTypes = {
  title: PropTypes.string,
  access: PropTypes.bool,
  forbiddenUrl: PropTypes.string,
  children: PropTypes.element
}

export default CustomRoute
