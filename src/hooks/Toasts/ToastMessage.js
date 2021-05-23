import React, {useEffect, createElement} from 'react'
import classNames from 'classnames'
// eslint-disable-next-line no-unused-vars
import PropTypes from 'prop-types'
import CheckIcon from '@/assets/icons/CheckIcon'
import TimesCircleIcon from '@/assets/icons/TimesCircleIcon'
import IconButton from '@/components/IconButton'

const VARIANTS = {
  info: {
    name: 'Информация',
    style: 'bg-white border-blue-500',
    icon: {
      style: 'text-blue-500'
    }
  },
  error: {
    name: 'Ошибка',
    style: 'bg-white border-red-500',
    icon: {
      style: 'text-red-500'
    }
  },
  warning: {
    name: 'Предупреждение',
    style: 'bg-white border-yellow-500',
    icon: {
      style: 'text-yellow-500'
    }
  },
  success: {
    name: 'Успех',
    style: 'bg-white border-green-500',
    icon: {
      style: 'text-green-500',
      component: CheckIcon
    }
  }
}

// eslint-disable-next-line max-len,react/prop-types
export default function ToastMessage({id, header, message, lifetime, onRemove, icon, type}) {
  const Var = type ? VARIANTS[type] : {
    name: header,
    style: 'bg-white px-2 bg-orange-500 border-0 text-white font-medium',
    icon: icon
  }

  useEffect(() => {
    if (lifetime && onRemove) {
      setTimeout(() => {
        onRemove(id)
      }, lifetime)
    }
  }, [id, lifetime, onRemove])

  return (
    <div
      className={classNames(
        'flex w-full visible flex-row shadow-md',
        'rounded-md duration-100 cursor-pointer',
        'transform transition-all hover:scale-101 border-2',
        Var.style,
        type && 'max-h-40'
      )}
    >
      <div className="flex flex-row p-2 flex-no-wrap w-full">
        {Var.icon && (
          <div
            className={classNames(
              'flex items-center h-12 w-12',
              'mx-auto text-xl select-none'
            )}
          >
            {createElement(Var.icon.component, {className: Var.icon.style})}
          </div>
        )}

        <div className="flex flex-col flex-no-wrap px-1 w-full">
          <div className="flex my-auto font-medium text-gray-800 select-none">{Var.name}</div>
          <p
            className='-mt-0.5 my-auto break-all flex text-md text-white'
          >
            {message}
          </p>
        </div>
        <IconButton
          onClick={() => onRemove && onRemove(id)}
          className='w-10 h-12 mr-2 items-center mx-auto text-center leading-none text-lg'
          icon={<TimesCircleIcon
            className='mx-auto my-auto h-full text-center text-white cursor-pointer hover:scale-105 transform'
          />}
        />
      </div>
    </div>
  )
}

ToastMessage.propTypes = {
}
