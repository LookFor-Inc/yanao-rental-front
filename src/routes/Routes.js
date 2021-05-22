import React, {lazy, Suspense} from 'react'
import {BrowserRouter as Router, Switch} from 'react-router-dom'
import EmptyLayout from '@/layouts/EmptyLayout'
import RentalLayout from '@/layouts/RentalLayout'
import CustomRoute from '@/routes/CustomRoute'
import PageLoading from '@/routes/PageLoading'
import ScrollToTop from '@/routes/ScrollToTop'

const PageLayout = lazy(() => import('@/layouts/PageLayout'))
const NotFoundPage = lazy(() => import('@/pages/NotFound/NotFoundPage'))

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
                  component={lazy(() => import('@/pages/Login/LoginPage'))}
                />
                <CustomRoute
                  exact
                  path='/auth/registration'
                  title='Регистрация'
                  component={lazy(() => import('@/pages/Registration/RegistrationPage'))}
                />
                <CustomRoute
                  path='/auth/registration/check-email'
                  title='Подтвердите email | Регистрация'
                  component={lazy(() => import('@/pages/Registration/CheckEmailPage'))}
                />
                <CustomRoute
                  path='/auth/registration/confirm'
                  title='Подтверждение email | Регистрация'
                  component={lazy(() => import('@/pages/Registration/ConfirmEmailPage'))}
                />
                <CustomRoute
                  exact
                  path='/auth/recovery'
                  title='Восстановление пароля'
                  component={lazy(() => import('@/pages/Recovery/RecoveryPage'))}
                />
                <CustomRoute
                  path='/auth/recovery/check-email'
                  title='Восстановление пароля'
                  component={lazy(() => import('@/pages/Recovery/CheckEmailPage'))}
                />
                <CustomRoute
                  exact
                  path='/auth/recovery/confirm'
                  title='Установка нового пароля'
                  component={lazy(() => import('@/pages/Recovery/ConfirmRecoveryPage'))}
                />
                <CustomRoute
                  exact
                  path='/auth/recovery/confirm/complete'
                  title='Установка нового пароля'
                  component={lazy(() => import('@/pages/Recovery/CompleteRecoveryPage'))}
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
                      component={lazy(() => import('@/pages/Rental/RentalListPage'))}
                  />
                  <CustomRoute
                    exact
                    path='/rental/map'
                    title='Карта прокатов'
                    component={lazy(() => import('@/pages/Rental/RentalMapPage'))}
                  />
                </Switch>
              </RentalLayout>
              <PageLayout>
                <CustomRoute
                path='/rental/:rentServiceId'
                title='Страница проката'
                component={lazy(() => import('@/pages/RentService/RentServicePage'))}
                />
              </PageLayout>
            </Switch>
          </CustomRoute>
          <CustomRoute path='/'>
            <PageLayout>
              <Switch>
                <CustomRoute
                  exact
                  path='/'
                  title='Главная страница'
                  component={lazy(() => import('@/pages/Landing/LandingPage'))}
                />
                <CustomRoute
                  exact
                  path='/rental-equipment'
                  title='Страница проката'
                  component={lazy(() => import('@/pages/RentalV1/RentalV1Page'))}
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
