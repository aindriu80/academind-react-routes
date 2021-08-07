import { useRef } from 'react'

import classes from './NewCommentForm.module.css'

const NewCommentForm = (props) => {
  const commentTextRef = useRef()

  const submitFormHandler = (event) => {
    event.preventDefault()

    // optional: Could validate here

    // send comment to server
  }

  return (
    // <form className={classes.form} onSubmit={submitFormHandler}>
    <>
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
    </>
  )
}

export default NewCommentForm
