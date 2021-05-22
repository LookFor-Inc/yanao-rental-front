import React, {Suspense, lazy} from 'react'
import {BrowserRouter as Router, Switch} from 'react-router-dom'
import EmptyLayout from '@/layouts/EmptyLayout'
import PageLayout from '@/layouts/PageLayout'
import RentalLayout from '@/layouts/RentalLayout'
import LandingPage from '@/pages/Landing/LandingPage'
import LoginPage from '@/pages/Login/LoginPage'
import NotFoundPage from '@/pages/NotFound/NotFoundPage'
import CheckEmailPage from '@/pages/Recovery/CheckEmailPage'
import CompleteRecoveryPage from '@/pages/Recovery/CompleteRecoveryPage'
import ConfirmRecoveryPage from '@/pages/Recovery/ConfirmRecoveryPage'
import RecoveryPage from '@/pages/Recovery/RecoveryPage'
import ConfirmEmailPage from '@/pages/Registration/ConfirmEmailPage'
import RegistrationPage from '@/pages/Registration/RegistrationPage'
import RentalListPage from '@/pages/Rental/RentalListPage'
import RentalMapPage from '@/pages/Rental/RentalMapPage'
import RentServicePage from '@/pages/RentService/RentServicePage'
import ReservationPage from '@/pages/Reservation/ReservationPage'
import CustomRoute from '@/routes/CustomRoute'
import PageLoading from '@/routes/PageLoading'
import ScrollToTop from '@/routes/ScrollToTop'

/**
 * Пути в браузере
 * @returns {JSX.Element} Возможные пути
 */
export default function Routes() {
  return (
    <Suspense fallback={<PageLoading />}>
      <Router>
        <ScrollToTop />
        <Switch>
          <CustomRoute path={'/auth/:path?'}>
            <EmptyLayout>
              <Switch>
                <CustomRoute
                  path='/auth/login'
                  title='Авторизация'
                  component={LoginPage}
                />
                <CustomRoute
                  exact
                  path='/auth/registration'
                  title='Регистрация'
                  component={RegistrationPage}
                />
                <CustomRoute
                  path='/auth/registration/check-email'
                  title='Подтвердите email | Регистрация'
                  component={CheckEmailPage}
                />
                <CustomRoute
                  path='/auth/registration/confirm'
                  title='Подтверждение email | Регистрация'
                  component={ConfirmEmailPage}
                />
                <CustomRoute
                  exact
                  path='/auth/recovery'
                  title='Восстановление пароля'
                  component={RecoveryPage}
                />
                <CustomRoute
                  path='/auth/recovery/check-email'
                  title='Восстановление пароля'
                  component={CheckEmailPage}
                />
                <CustomRoute
                  exact
                  path='/auth/recovery/confirm'
                  title='Установка нового пароля'
                  component={ConfirmRecoveryPage}
                />
                <CustomRoute
                  exact
                  path='/auth/recovery/confirm/complete'
                  title='Установка нового пароля'
                  component={CompleteRecoveryPage}
                />
                <CustomRoute
                  path='/auth/oauth2/callback'
                  component={lazy(() => import('@/pages/Login/OAuth2Callback'))}
                />
                <CustomRoute
                  path='*'
                  title='Страница не найдена'
                  component={NotFoundPage}
                />
              </Switch>
            </EmptyLayout>
          </CustomRoute>
          <CustomRoute path={'/rental/:path?'}>
            <Switch>
              <RentalLayout
                exact
                path={['/rental/list', '/rental/map']}
              >
                <Switch>
                  <CustomRoute
                    exact
                    path='/rental/list'
                    title='Список прокатов'
                    component={RentalListPage}
                  />
                  <CustomRoute
                    exact
                    path='/rental/map'
                    title='Карта прокатов'
                    component={RentalMapPage}
                  />
                </Switch>
              </RentalLayout>
              <PageLayout>
                <CustomRoute
                  path='/rental/:rentServiceId'
                  title='Страница проката'
                  component={RentServicePage}
                />
              </PageLayout>
            </Switch>
          </CustomRoute>
          <CustomRoute path={'/reservation'}>
            <PageLayout className='bg-gray-100'>
              <CustomRoute
                path='/'
                title='Оформление'
                component={ReservationPage}
              />
            </PageLayout>
          </CustomRoute>
          <CustomRoute path='/'>
            <PageLayout>
              <Switch>
                <CustomRoute
                  exact
                  path='/'
                  title='Главная страница'
                  component={LandingPage}
                />
              </Switch>
            </PageLayout>
          </CustomRoute>
          <CustomRoute
            path='*'
            title='Страница не найдена'
            component={NotFoundPage}
          />
        </Switch>
      </Router>
    </Suspense>
  )
}
