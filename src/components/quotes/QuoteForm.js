import { useRef } from 'react'

import Card from '../UI/Card'
import LoadingSpinner from '../UI/LoadingSpinner'
// import classes from './QuoteForm.module.css';

const QuoteForm = (props) => {
  const authorInputRef = useRef()
  const textInputRef = useRef()

  function submitFormHandler(event) {
    event.preventDefault()

    const enteredAuthor = authorInputRef.current.value
    const enteredText = textInputRef.current.value

    // optional: Could validate here

    props.onAddQuote({ author: enteredAuthor, text: enteredText })
  }

  return (
    <Card>
      {/* <form className={classes.form} onSubmit={submitFormHandler}> */}
      <form onSubmit={submitFormHandler}>
        {props.isLoading && (
          <div className={classes.loading}>
            <LoadingSpinner />
          </div>
        )}

        {/* <div className={classes.control}> */}
        <div>
          <label htmlFor="author">Author</label>
          <input type="text" width="500px" id="author" ref={authorInputRef} />
        </div>
        {/* <div className={classes.control}> */}
        <div>
          <label htmlFor="text">Text</label>
          <textarea id="text" cols="60" rows="10" ref={textInputRef}></textarea>
        </div>
        {/* <div className={classes.actions}> */}
        <div>
          <button className="btn">Add Quote</button>
        </div>
      </form>
    </Card>
  )
}

export default QuoteForm
