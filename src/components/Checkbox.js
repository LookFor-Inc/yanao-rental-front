import React, {forwardRef} from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

/**
 * Общий компонент флажока
 * @param {string} label Подпись поля
 * @param {boolean} disabled Состояние блокировки
 * @param {string} className Дополнительные стили
 * @returns {JSX.Element} Компонент флажока
 */
const Checkbox = forwardRef(({label, disabled, className, ...props}, ref) => {
  const classes = classNames('checkbox', className)

  return (
    <label className='inline-flex items-center'>
      <input
        {...props}
        type='checkbox'
        ref={ref}
        className={classes}
        disabled={disabled}
      />
      <span className='text-sm ml-2 text-gray-800 hover:text-black transition-colors cursor-pointer'>
        {label}
      </span>
    </label>
  )
})

Checkbox.displayName = 'Checkbox'

Checkbox.propTypes = {
  label: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string
}

export default Checkbox
