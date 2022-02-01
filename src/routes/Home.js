import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <header>
        <h1>Home</h1>
        <p>The home page of the site.</p>
      </header>

      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/app">Custom Query Search Tool</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>

      <Outlet/>
    </div>
  )
}

export default Home
