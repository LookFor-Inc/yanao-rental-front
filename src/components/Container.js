import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

/**
 * Компонент(контейнер) для задания отступов и центрирования элементов веб-страницы
 * @param {JSX.Element} children Дочерний компонент для отображения содержимого
 * @param {string} className дополнительные стили
 * @returns {JSX.Element} Компонент контейнера
 */
function Container({children, className}) {
  const classes = classNames('container mx-auto py-6 px-4 sm:px-6 lg:px-8 max-w-7xl', className)

  return (
    <div className={classes}>
      {children}
    </div>
  )
}

Container.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}

export default Container
