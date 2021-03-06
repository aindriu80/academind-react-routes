import { Fragment } from 'react'
import { useHistory, useLocation } from 'react-router-dom'

import QuoteItem from './QuoteItem'
// import classes from './QuoteList.module.css';

import '../../mvp.css'

const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1
    } else {
      return quoteA.id < quoteB.id ? 1 : -1
    }
  })
}

const QuoteList = (props) => {
  const history = useHistory()
  const location = useLocation()

  const queryParams = new URLSearchParams(location.search)

  const isSortingAscending = queryParams.get('sort') === 'asc'

  const sortedQuotes = sortQuotes(props.quotes, isSortingAscending)

  const changeSortingHandler = () => {
    history.push({
      pathname: location.pathname,
      search: `?sort=${isSortingAscending ? 'des' : 'asc'}`,
    })
  }
  return (
    <>
      <section>
        {/* <ul className={classes.list}> */}
        <div className="centered">
          <ul>
            <button onClick={changeSortingHandler}>
              Sort {isSortingAscending ? 'Descending' : 'Ascending'}
            </button>
            {sortedQuotes.map((quote) => (
              <QuoteItem
                key={quote.id}
                id={quote.id}
                author={quote.author}
                text={quote.text}
              />
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}

export default QuoteList
