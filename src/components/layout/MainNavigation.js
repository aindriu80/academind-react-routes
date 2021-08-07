import { NavLink } from 'react-router-dom'

import classes from '../../mvp.css'
const MainNavigation = () => {
  return (
    <header>
      <div>Great Quotes</div>
      <ul>
        <li>
          <NavLink to="/quotes" activeClassName={classes.active}>
            All Quotes
          </NavLink>
        </li>
        <li>
          <NavLink to="/new-quote" activeClassName={classes.active}>
            Add a Quote
          </NavLink>
        </li>
      </ul>
    </header>
  )
}

export default MainNavigation
