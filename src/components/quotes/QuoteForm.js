import { Fragment, useRef, useState } from 'react'
import { Prompt } from 'react-router-dom'

import Card from '../UI/Card'
import LoadingSpinner from '../UI/LoadingSpinner'

import '../../mvp.css'

const QuoteForm = (props) => {
  const [isEntering, setIsEntering] = useState(false)
  const authorInputRef = useRef()
  const textInputRef = useRef()

  function submitFormHandler(event) {
    event.preventDefault()

    const enteredAuthor = authorInputRef.current.value
    const enteredText = textInputRef.current.value

    // optional: Could validate here

    props.onAddQuote({ author: enteredAuthor, text: enteredText })
  }

  const finishEnteringHandler = () => {
    setIsEntering(false)
  }

  const formFocusedHandler = () => {
    setIsEntering(true)
  }

  return (
    <Fragment>
      <Prompt
        when={isEntering}
        message={(location) =>
          'Are you sure you want to leave this page? All your entered data will be lost'
        }
      />

      <Card>
        <form onFocus={formFocusedHandler} onSubmit={submitFormHandler}>
          {props.isLoading && (
            // <div className={classes.loading}>
            <div className="centered">
              <LoadingSpinner />
            </div>
          )}

          <div>
            <label htmlFor="author">Author</label>
            <input type="text" id="author" ref={authorInputRef} />
          </div>
          <div>
            <label htmlFor="text">Text</label>
            <textarea
              id="text"
              cols="60"
              rows="10"
              ref={textInputRef}></textarea>
          </div>
          <div>
            <button onClick={finishEnteringHandler} className="btn">
              Add Quote
            </button>
          </div>
        </form>
      </Card>
    </Fragment>
  )
}

export default QuoteForm
