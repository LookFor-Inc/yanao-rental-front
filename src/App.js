import React from 'react'
import {Provider} from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react'
import ToastProvider from '@/hooks/Toasts/ToastProvider'
import Routes from '@/routes/Routes'
import {persist, store} from '@/store/configureStore'

/**
 * Главный компонент
 * @returns {JSX.Element} Приложение
 */
function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persist}>
        <ToastProvider variant='bottom_right'>
          <Routes />
        </ToastProvider>
      </PersistGate>
    </Provider>
  )
}

export default App
