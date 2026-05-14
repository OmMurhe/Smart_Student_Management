import React from 'react'

import Login from './assets/components/login/page'
import Signup from './assets/components/signup/page'
import Forget from './assets/components/forgetPassword/page'
import Header from './assets/components/header/header'
import Course from './assets/components/course/course'
import WebDevelopement from './assets/components/course/webDevelopement'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
const App = () => {
  return (
    <BrowserRouter>
     <Header />
    <Routes>
      
      <Route path='/course' element={<Course/>}/>
       <Route path='/course/webDevelopement' element={<WebDevelopement/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/forgetPassward' element={<Forget/>}/>
      </Routes>
    </BrowserRouter>

  )
}

export default App
