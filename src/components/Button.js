import React, {createElement} from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

/**
 * Общий компонент кнопки
 * @param {element} children Дочерние элементы
 * @param {string} type Тип кнопки
 * @param {string} size Размер кнопки
 * @param {string} color Цвет кнопки
 * @param {function} icon Элемент иконки
 * @param {boolean} disabled Состояние блокировки
 * @param {object} props Дополнительные свойства
 * @returns {JSX.Element} Кнопка
 */
function Button({children, type, size, color, icon, disabled, ...props}) {
  const classes = classNames('btn', {
    'btn-primary': color === 'primary',
    'btn-secondary text-primary': color === 'secondary',
    'btn-error': color === 'error',
    'btn-success': color === 'success',
    'py-0.5 px-1.5 text-xs': size === 'xs',
    'py-1 px-3 text-sm lg:text-base': size === 'sm',
    'px-8 py-3 md:py-4 md:px-10 md:text-lg': size === 'lg',
    'opacity-50': disabled
  }, props.className)

  return (
    <button
      {...props}
      type={type}
      className={classes}
      disabled={disabled}
    >
      {icon && createElement(icon, {className: 'h-6'})}
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  color: PropTypes.string,
  icon: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string
}

export default Button
