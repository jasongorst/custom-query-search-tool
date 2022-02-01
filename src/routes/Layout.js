import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
      <header>
        <h1>Global Page Header</h1>
        <nav>Some links here</nav>
      </header>

      <Outlet/>

      <footer>
        <h6>Footer stuff</h6>
      </footer>
    </div>
  )
}

export default Layout
