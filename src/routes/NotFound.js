import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
      <h1>Not Found</h1>
      <p>We couldn't find the page you were looking for.</p>
      <p>Click <Link to="/">here</Link> to return to the home page.</p>
    </div>
  )
}

export default NotFound
