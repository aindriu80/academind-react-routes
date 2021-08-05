import { Route } from 'react-router-dom'
const Welcome = () => {
  return (
    <sectionY>
      <h2>Welcome Page</h2>
      <Route path="/welcome/new-user">
        <p>Welcome, new user</p>
      </Route>
    </sectionY>
  )
}

export default Welcome
