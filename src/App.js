import './mvp.css'

import { Route, Switch, Redirect } from 'react-router-dom'

import MainHeader from './components/UI/MainHeader'

import AllQuotes from './pages/AllQuotes'
import QuoteDetail from './pages/QuoteDetail'
import NewQuote from './pages/NewQuote'
import NotFound from './pages/NotFound'

import Layout from './components/layout/Layout'

function App() {
  return (
    <>
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
    </>
  )
}

export default App

1
