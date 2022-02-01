import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import Home from './Home'
import App from '../App'
import PageLayout from './PageLayout'
import About from './About'
import NotFound from './NotFound'

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="app" element={<App/>}/>
        <Route element={<PageLayout/>}>
          <Route path="about" element={<About/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Route>
      </Route>
    </Routes>
  )
}

export default MainRouter
