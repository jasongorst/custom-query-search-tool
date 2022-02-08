import { Route, Routes } from 'react-router-dom'
import QueryTool from './components/QueryTool'
import Layout from './routes/Layout'
import Home from './routes/Home'
import PageLayout from './routes/PageLayout'
import About from './routes/About'
import NotFound from './routes/NotFound'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route element={<PageLayout/>}>
          <Route path="app" element={<QueryTool/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Route>
      </Route>
    </Routes>
  )
}

export default App
