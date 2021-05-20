import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

/**
 * Общий компонент формы группы
 * @param {element} children Дочерние элементы
 * @param {string} className Дополнительные стили
 * @returns {JSX.Element} Форма группы
 */
function FormGroup({children, className}) {
  const classes = classNames('form-group', className)

  return (
    <div className={classes}>
      {children}
    </div>
  )
}

FormGroup.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}

export default FormGroup
