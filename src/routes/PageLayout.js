import { Outlet } from 'react-router-dom'

const Pagelayout = () => {
  return (
    <div>
      <h3>Some subpage layout</h3>

      <Outlet/>
    </div>
  )
}

export default Pagelayout
