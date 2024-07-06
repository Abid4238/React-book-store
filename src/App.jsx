import React from 'react'
import Home from './component/Home/Home'
import Course from './component/Course/Course'
import {Routes,Route,Router} from 'react-router-dom'

const App = () => {
  return (
    <>
    {/* <Home/>
    <Course/> */}

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/course' element={<Course/>}/>
    </Routes>
    </>
  )
}

export default App