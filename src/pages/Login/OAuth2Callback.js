import React, {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {checkAuth} from '@/services/authService'
import {loginSuccess} from '@/store/Auth/actions'
import {getUserInfo} from '@/store/User/actions'

/**
 * Обработка входа через сторонние сервисы
 * @returns {JSX.Element} Обработчик
 */
function OAuth2Callback() {
  const history = useHistory()
  const dispatch = useDispatch()

  useEffect(() => {
    checkAuth()
      .then(() => {
        // TODO: XD
        dispatch(getUserInfo())
        dispatch(loginSuccess())
        history.push('/')
      })
      .catch(() => history.push('/'))
  }, [])

  return <div />
}

export default OAuth2Callback
