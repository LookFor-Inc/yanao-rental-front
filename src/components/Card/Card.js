import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import CardBody from '@/components/Card/CardBody'
import CardFooter from '@/components/Card/CardFooter'

/**
 * Компонент карточки
 * @param {element} children Дочерние элементы
 * @param {string} className Дополнительные стили
 * @returns {JSX.Element} Карточка
 */
function Card({children, className}) {
  const classes = classNames('bg-white rounded-lg shadow overflow-hidden', className)

  return (
    <div className={classes}>
      {children}
    </div>
  )
}

Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}

Card.Body = CardBody
Card.Footer = CardFooter

export default Card
