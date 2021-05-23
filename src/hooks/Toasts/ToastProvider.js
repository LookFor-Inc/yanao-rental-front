import React, {createContext, useState, useCallback} from 'react'
import PropTypes from 'prop-types'
import ToastContainer from './ToastContainer'

export const ToastContext = createContext(null)

function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = (Math.random() * 16) | 0
    const v = c === 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}

const DEFAULT_INTERVAL = 1500

function ToastProvider({children, variant}) {
  const [data, setData] = useState([])

  const Push = useCallback((message, type, lifetime = DEFAULT_INTERVAL) => {
    if (message) {
      const newItem = {
        id: uuidv4(),
        message: message,
        type: type,
        lifetime: lifetime
      }

      setData(prev => [...prev, newItem])
    }
  }, [setData])

  const ToastContexd = useCallback(() => {
    return {
      data: data,
      push: Push,

      async remove(id) {
        setData(prev => prev.filter(item => item.id !== id))
      }
    }
  }, [data, setData, Push])

  return (
    // eslint-disable-next-line new-cap
    <ToastContext.Provider value={ToastContexd()}>
      <ToastContainer variant={variant} />
      {children}
    </ToastContext.Provider>
  )
}

ToastProvider.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.string
}

export default ToastProvider
