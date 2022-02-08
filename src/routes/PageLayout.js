import '../css/starter.css'
import { Outlet } from 'react-router-dom'
import Navigation from '../components/Navigation'

const PageLayout = () => {
  return (
    <div className="PageLayout">
      <Navigation/>

      <Outlet/>
    </div>
  )
}

export default PageLayout
