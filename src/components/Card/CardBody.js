import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

/**
 * Компонент содержимого карточки
 * @param {element} children Дочерние элементы
 * @param {string} size Размер отступа
 * @param {string} className Дополнительные стили
 * @returns {JSX.Element} Содержимое карточки
 */
function CardBody({children, size, className}) {
  const classes = classNames('p-7', className, {
    'px-6 py-8 sm:px-10': size === 'lg'
  })

  return (
    <div className={classes}>
      {children}
    </div>
  )
}

CardBody.propTypes = {
  children: PropTypes.node,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  className: PropTypes.string
}

export default CardBody
