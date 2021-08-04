import { NavLink } from 'react-router-dom'
import classes from '../mvp.css'
const MainHeader = () => {
  return (
    <header>
      <nav>
        <a href="/">
          <img src="../moh3.gif" alt="searchcode small logo" height="30"></img>
        </a>
        <ul>
          <li>
            <NavLink activeClassName={classes.active} to="/welcome">
              Welcome
            </NavLink>
          </li>
          <li>
            <NavLink to="/products">Products</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
export default MainHeader
