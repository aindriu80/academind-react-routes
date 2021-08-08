import { Fragment } from 'react'
import { Route, useParams } from 'react-router-dom'

import HighlightedQuote from '../components/quotes/HighlightedQuote'
import Comments from '../components/comments/Comments'
import { DummyQuotes } from '../components/quotes/DummyQuotes'

const QuoteDetail = () => {
  const params = useParams()

  const quote = DummyQuotes.find((quote) => quote.id === params.quoteId)

  if (!quote) {
    return <section>No quote found</section>
  }

  return (
    <Fragment>
      <section>
        <h1>Quote Detail</h1>
      </section>
      <section>
        <HighlightedQuote text={quote.text} author={quote.author} />
        {/* <p>{params.quoteId}</p> */}
      </section>
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  )
}
export default QuoteDetail
