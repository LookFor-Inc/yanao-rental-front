import React, {useEffect, useState} from 'react'
import CheckCircleIcon from '@/assets/icons/CheckCircleIcon'
import TokenNotFound from '@/components/TokenNotFound'
import useQuery from '@/hooks/useQuery'
import PageLoading from '@/routes/PageLoading'
import {confirmRegistration} from '@/services/authService'
import HttpStatus from '@/utils/httpStatus'

/**
 * Страница подтверждения email
 * @returns {JSX.Element} Элемент страницы
 */
function ConfirmEmailPage() {
  const query = useQuery()
  const [status, setStatus] = useState(null)

  useEffect(async () => {
    const token = query.remove('token')
    try {
      const res = await confirmRegistration(token)
      if (res.status === HttpStatus.OK) {
        setStatus(true)
      }
    } catch (e) {
      setStatus(false)
    }
  }, [])

  return (
    status === null
      ? <PageLoading />
      : <>
        {status === true && (
          <div className='max-w-md w-full space-y-6 text-center'>
            <CheckCircleIcon className='mx-auto h-16 w-auto text-success' />
            <h2 className='mt-6 text-3xl font-extrabold text-gray-900'>
              Email подтверждён
            </h2>
            <div className='mt-2 text-gray-600'>
              <p>
                Теперь вы можете войти в свой аккаунт.
              </p>
            </div>
          </div>
        )}
        {status === false && <TokenNotFound />}
      </>
  )
}

export default ConfirmEmailPage
