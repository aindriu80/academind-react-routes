import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import '../../mvp.css'

const QuoteItem = (props) => {
  return (
    <form>
      <Fragment>
        <figure>
          <blockquote>
            <p>{props.text}</p>
          </blockquote>
          <figcaption>{props.author}</figcaption>
        </figure>
        <Link to={`/quotes/${props.id}`}>
          <button className="btn" to={`/quotes/${props.id}`}>
            View Fullscreen
          </button>
        </Link>
      </Fragment>
    </form>
  )
}

export default QuoteItem
