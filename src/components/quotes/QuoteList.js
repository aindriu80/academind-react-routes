import { Fragment } from 'react'

import QuoteItem from './QuoteItem'
// import classes from './QuoteList.module.css';

import '../../mvp.css'

const QuoteList = (props) => {
  return (
    <>
      <section>
        {/* <ul className={classes.list}> */}
        <ul>
          {props.quotes.map((quote) => (
            <QuoteItem
              key={quote.id}
              id={quote.id}
              author={quote.author}
              text={quote.text}
            />
          ))}
        </ul>
      </section>
    </>
  )
}

export default QuoteList
