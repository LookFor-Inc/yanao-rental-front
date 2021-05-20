import React, {useEffect, useState} from 'react'
import KeyIcon from '@/assets/icons/KeyIcon'
import TokenNotFound from '@/components/TokenNotFound'
import useQuery from '@/hooks/useQuery'
import ConfirmRecoveryCard from '@/pages/Recovery/components/ConfirmRecoveryCard'
import PageLoading from '@/routes/PageLoading'
import {checkResetPasswordToken} from '@/services/authService'

/**
 * Страница сброса пароля
 * @returns {JSX.Element} Элемент страницы
 */
function ConfirmRecoveryPage() {
  const query = useQuery()
  const [status, setStatus] = useState(null)
  const [token] = useState(query.get('token'))

  useEffect(async () => {
    query.remove('token')
    const res = await checkResetPasswordToken(token)
    setStatus(res)
  }, [])

  return (
    status === null
      ? <PageLoading />
      : <>
        {status === true && (
          <div className='max-w-md w-full space-y-8'>
            <div>
              <KeyIcon className='mx-auto h-16 w-auto text-success' />
              <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
                Установка нового пароля
              </h2>
              <p className='mt-2 text-center text-sm text-gray-600'>
                Для вашего аккаунта.
              </p>
            </div>
            <ConfirmRecoveryCard token={token} />
          </div>
        )}
        {status === false && <TokenNotFound />}
      </>
  )
}

export default ConfirmRecoveryPage
