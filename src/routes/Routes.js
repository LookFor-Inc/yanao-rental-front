import React, {lazy, Suspense} from 'react'
import {BrowserRouter as Router, Switch} from 'react-router-dom'
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
                  component={lazy(() => import('@/pages/Rental/RentalPage'))}
                />
                <CustomRoute
                  exact
                  path='/rental-payment'
                  title='Страница бронирования'
                  component={lazy(() => import('@/pages/Payment/PaymentPage'))}
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
