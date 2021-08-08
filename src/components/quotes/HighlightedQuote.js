// import classes from './HighlightedQuote.module.css';

const HighlightedQuote = (props) => {
  return (
    // <figure className={classes.quote}>
    <figure>
      <p>{props.text}</p>
      <figcaption>{props.author}</figcaption>
    </figure>
  )
}

export default HighlightedQuote
