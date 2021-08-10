import { Link } from 'react-router-dom'
import classes from './NotFound.module.css'
const NotFound = () => {
  return (
    <>
      <section>
        <div className={classes.four_zero_four_bg}>
          <h1>404</h1>

          <div className={classes.lost}>
            <h3>Looks like you're lost</h3>
            <h4>The page you are looking for not avaible!</h4>
          </div>

          <div className={classes.contant_box_404} />

          <Link to="/" className="link_404">
            Go to Home
          </Link>
        </div>
      </section>
    </>
  )
}
export default NotFound
