import { useState } from 'react'

// import classes from './Comments.module.css'
import NewCommentForm from './NewCommentForm'

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false)

  const startAddCommentHandler = () => {
    setIsAddingComment(true)
  }

  return (
    <section>
      <form>
        <h2>User Comments</h2>
        {!isAddingComment && (
          <button className="btn" onClick={startAddCommentHandler}>
            Add a Comment
          </button>
        )}
        {isAddingComment && <NewCommentForm />}
        <p>Comments...</p>
      </form>
    </section>
  )
}

export default Comments
