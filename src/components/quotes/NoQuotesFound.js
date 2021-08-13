import { Link } from 'react-router-dom'
const NoQuotesFound = () => {
  return (
    <div className="centered">
      <h2>No Quotes found!</h2>
      <Link to="/new-quote">
        <button>Add a quote</button>
      </Link>
    </div>
  )
}
export default NoQuotesFound
