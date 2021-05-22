import React, {useRef} from 'react'
import className from 'classnames'
import {bool, element, string} from 'prop-types'

/**
 * Занавес
 * @param {boolean} isOpen Статус
 * @param {element} children Дочерние элементы
 * @param {Object} props Дополнительные свойства
 * @returns {JSX.Element} Элемент занавеса
 */
function Collapse({isOpen, children, ...props}) {
  const ref = useRef(null)
  const inlineStyle = isOpen ? {height: ref.current?.scrollHeight} : {height: 0}
  return (
    <div
      className={className('transition-height ease duration-300', {
        'overflow-hidden': !isOpen
      }, props.className)}
      ref={ref}
      style={inlineStyle}
    >
      {children}
    </div>
  )
}

Collapse.propTypes = {
  isOpen: bool,
  children: element,
  className: string
}

export default Collapse
