import React, {useContext} from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import {TOASTS_VARIANTS} from '@/hooks/Toasts/ToastsVariants'
import ToastMessage from './ToastMessage'
import {ToastContext} from './ToastProvider'

/**
 * Контейнер для уведомлений
 * @param {string} variant Местоположение уведомлений
 * @returns {JSX.Element} Элемент контейнера
 */
function ToastContainer({variant = 'top_right'}) {
  const context = useContext(ToastContext)
  const Var = TOASTS_VARIANTS[variant] || TOASTS_VARIANTS.top_right
  const classes = classNames(Var.style, 'fixed z-50 w-full md:max-w-sm',
    'p-4 md:p-4 max-h-screen overflow-hidden pointer-events-none')

  /**
   * Функция удаления уведомления
   * @param {uuid} id Идентификатор уведомления
   * @returns {void}
   */
  function handleRemove(id) {
    context.remove(id)
  }

  return (
    <div className={classes}>
      <div className='flex-1 flex-col fade w-full mr-8 justify-end pointer-events-none'>
        {context?.data.map(toast => {
          return (
            <div
                key={toast.id}
                className='flex py-1 w-full transform transition-all duration-300 pointer-events-auto'
            >
              <ToastMessage
                  id={toast.id}
                  message={toast.message}
                  type={toast.type}
                  header={toast.header}
                  icon={toast.icon}
                  truncate={toast.truncate}
                  onRemove={handleRemove}
                  lifetime={toast.lifetime}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

ToastContainer.propTypes = {
  variant: PropTypes.string
}

export default ToastContainer
