import { Link } from 'react-router-dom'
import classes from './NotFound.module.css'
const NotFound = () => {
  return (
    <>
      <section>
        <div className={classes.four_zero_four_bg}>
          <h1>404</h1>
          {/* </div> */}

          <div className={classes.contant_box_404} />
          <h3>Look like you're lost</h3>

          <h4>the page you are looking for not avaible!</h4>

          <Link to="/" className="link_404">
            Go to Home
          </Link>
        </div>
      </section>
      {/* </div> */}
    </>
  )
}
export default NotFound
