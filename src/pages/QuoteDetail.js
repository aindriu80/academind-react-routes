import { Fragment } from 'react'
import { Route, useParams, Link, useRouteMatch } from 'react-router-dom'

import HighlightedQuote from '../components/quotes/HighlightedQuote'
import Comments from '../components/comments/Comments'
import { DummyQuotes } from '../components/quotes/DummyQuotes'

const QuoteDetail = () => {
  const match = useRouteMatch()
  const params = useParams()
  console.log('match', match)

  const quote = DummyQuotes.find((quote) => quote.id === params.quoteId)

  if (!quote) {
    return <section>No quote found</section>
  }

  return (
    <Fragment>
      <section>
        <h1>Quote Detail</h1>
      </section>
      <div>
        <HighlightedQuote text={quote.text} author={quote.author} />
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
