import { Link, Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <header>
        <h2>Home</h2>
        <p>The home page of the site.</p>
      </header>

      <nav>
        <ul>
          <li><Link to="/app">Custom Query Search Tool</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>

      <Outlet/>
    </div>
  )
}

export default Home
