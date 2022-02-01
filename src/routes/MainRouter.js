import React from 'react'
import { Route, Routes } from 'react-router-dom'
import App from '../App'
import Home from './Home'
import About from './About'
import NotFound from './NotFound'

const MainRouter = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route path="/app" element={<App/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  )
}

export default MainRouter
