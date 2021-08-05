import { NavLink } from 'react-router-dom'
import classes from '../../mvp.css'
const MainHeader = () => {
  return (
    <header>
      <nav>
        <a href="/">
          <img src="../moh3.gif" alt="searchcode small logo" height="30"></img>
        </a>
        <h2>Great Quotes</h2>
        <ul>
          <li>
            <NavLink activeClassName={classes.active} to="/quotes">
              All Quotes
            </NavLink>
          </li>
          <li>
            <NavLink to="/new-quote">Add a Quote</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
export default MainHeader
