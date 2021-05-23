import React, {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {logoutUser} from '@/services/authService'
import {logout} from '@/store/Auth/actions'

/**
 * Обработка выхода
 * @returns {JSX.Element} Обработчик
 */
function LogoutCallback() {
  const history = useHistory()
  const dispatch = useDispatch()

  useEffect(() => {
    logoutUser().then(() => dispatch(logout()))
    history.push('/')
  }, [])

  return <div />
}

export default LogoutCallback
