import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div style={{margin: 50}}>
      <header>
        <h1>Global Page Header</h1>
        <nav>Some | links | here</nav>
      </header>

      <Outlet/>

      <footer>
        <h5>Footer stuff</h5>
      </footer>
    </div>
  )
}

export default Layout
