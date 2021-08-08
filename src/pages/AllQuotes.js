import QuoteList from '../components/quotes/QuoteList'
const DUMMY_QUOTES = [
  { id: 'q1', author: 'Aindriú', text: 'Learning React is fun!' },
  { id: 'q2', author: 'Neptune', text: 'Learning React is fabulous!' },
]
const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />
}
export default AllQuotes
