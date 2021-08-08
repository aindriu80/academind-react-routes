// import classes from './QuoteItem.module.css';
import '../../mvp.css'

const QuoteItem = (props) => {
  return (
    // <li className={classes.item}>
    <form>
      <>
        <figure>
          <blockquote>
            <p>{props.text}</p>
          </blockquote>
          <figcaption>{props.author}</figcaption>
        </figure>
        {/* <a className="btn">View Fullscreen</a> */}
        <button className="btn">View Fullscreen</button>
      </>
    </form>
  )
}

export default QuoteItem
