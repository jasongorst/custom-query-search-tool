import { Outlet } from 'react-router-dom'

const Pagelayout = () => {
  return (
    <div>
      <h2>Some subpage layout</h2>

      <Outlet/>
    </div>
  )
}

export default Pagelayout
