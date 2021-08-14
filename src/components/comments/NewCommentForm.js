import { useRef, useEffect } from 'react'

import useHttp from '../../hooks/use-http'
import { addComment } from '../../lib/api'
import LoadingSpinner from '../UI/LoadingSpinner'
import classes from './NewCommentForm.module.css'

const NewCommentForm = (props) => {
  const commentTextRef = useRef()

  const { sendRequest, status, error } = useHttp(addComment)

  const { onAddedComment } = props

  useEffect(() => {
    if (status === 'completed' && !error) {
      onAddedComment();
    }
  }, [status, error, onAddedComment])

  const submitFormHandler = (event) => {
    event.preventDefault()

    // optional: Could validate here

    const enteredText = commentTextRef.current.value

    sendRequest({ commentData: { text: enteredText }, quoteId: props.quoteId })

    // send comment to server
  }

  return (
    <div className={classes.form} onSubmit={submitFormHandler}>
      {status === 'pending' && (
        <div className="centered">
          <LoadingSpinner />
        </div>
      )}

      {/* <div className={classes.control} onSubmit={submitFormHandler}> */}
      <div onSubmit={submitFormHandler}>
        <label htmlFor="comment">Your Comment</label>
        <textarea
          id="comment"
          rows="6"
          cols="50"
          ref={commentTextRef}></textarea>
      </div>
      {/* <div className={classes.actions}> */}
      <div>
        <button className="btn">Add Comment</button>
      </div>
    </div>
  )
}

export default NewCommentForm
