import {useContext} from 'react'
import {ToastContext} from '@/hooks/Toasts/ToastProvider'

export const useToast = () => useContext(ToastContext)
