import React, { Suspense } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import './mvp.css'

import MainHeader from './components/UI/MainHeader'

import LoadingSpinner from './components/UI/LoadingSpinner'

const NewQuote = React.lazy(() => import('./pages/NewQuote'))
const QuoteDetail = React.lazy(() => import('./pages/QuoteDetail'))
const NotFound = React.lazy(() => import('./pages/NotFound'))
const AllQuotes = React.lazy(() => import('./pages/AllQuotes'))
const Layout = React.lazy(() => import('./components/layout/Layout'))

function App() {
  return (
    <>
      <Suspense
        fallback={
          <div className="centered">
            <LoadingSpinner />
          </div>
        }>
        <MainHeader />
        <Switch>
          <Route path="/" exact>
            <Redirect to="/quotes" />
          </Route>

          <Route path="/quotes" exact>
            <AllQuotes />
          </Route>

          <Route path="/quotes/:quoteId">
            <QuoteDetail />
          </Route>

          <Route path="/new-quote" exact>
            <NewQuote />
          </Route>

          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </>
  )
}

export default App
