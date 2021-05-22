import React, {forwardRef} from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

/**
 * Общий компонент поля ввода
 * @param {string} label Подпись поля
 * @param {string} type Тип поля
 * @param {string} size Размер поля
 * @param {string} placeholder Подсказка поля
 * @param {boolean} disabled Состояние блокировки
 * @param {Object} error Красная обводка у поля
 * @param {boolean} validation Есть ли у поля валидация?
 * @param {string} className Дополнительные стили
 * @returns {JSX.Element} Поле ввода
 */
const Input = forwardRef(({
  label, type = 'text', placeholder, disabled,
  error, validation = true, size, className, ...props
}, ref) => {
  const classes = classNames('input', {
    'py-1.5 px-3 text-sm': size === 'sm',
    'py-3.5 px-3 text-md': size === 'md',
    'placeholder-error border-error focus:ring-error focus:border-error': error
  }, className)

  return (
    <div className='form-group'>
      {label && (
        <label className='text-sm text-gray-800 font-medium'>
          {label}
        </label>
      )}
      <input
        {...props}
        ref={ref}
        type={type}
        className={classes}
        placeholder={placeholder}
        disabled={disabled}
      />
      {validation && (
        <div className='min-h-5 h-5'>
          {error && (
            <div className='text-error font-medium text-sm'>
              {error.message || error}
            </div>
          )}
        </div>
      )}
    </div>
  )
})

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  validation: PropTypes.bool,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  className: PropTypes.string
}

export default Input
