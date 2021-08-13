import { Fragment, useEffect } from 'react'
import { Route, useParams, Link, useRouteMatch } from 'react-router-dom'

import HighlightedQuote from '../components/quotes/HighlightedQuote'
import Comments from '../components/comments/Comments'
import { DummyQuotes } from '../components/quotes/DummyQuotes'
import useHttp from '../hooks/use-http'
import { getSingleQuote } from '../lib/api'
import LoadingSpinner from '../components/UI/LoadingSpinner'

const QuoteDetail = () => {
  const match = useRouteMatch()
  const params = useParams()

  const { quoteId } = params

  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote, true)

  useEffect(() => {
    sendRequest()
  }, [sendRequest, quoteId])

  // const quote = DummyQuotes.find((quote) => quote.id === params.quoteId)

  if (status === 'pending') {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    )
  }

  if (error) {
    return <p className="centered">{error}</p>
  }

  if (loadedQuote.text) {
    return <section>No quote found</section>
  }

  return (
    <Fragment>
      <section>
        <h1>Quote Detail</h1>
      </section>
      <div className="centered focused">
        <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
        <Route path={match.path} exact>
          <div>
            <Link to={`${match.url}/comments`}>
              <button>Load Comments</button>
            </Link>
          </div>
        </Route>
      </div>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  )
}
export default QuoteDetail
