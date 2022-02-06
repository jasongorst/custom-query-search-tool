import { Outlet } from 'react-router-dom'

const PageLayout = () => {
  return (
    <div className="PageLayout">
      <Outlet/>
    </div>
  )
}

export default PageLayout
