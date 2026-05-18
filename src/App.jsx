import React from 'react'

import Login from './assets/components/login/page'
import Signup from './assets/components/signup/page'
import Forget from './assets/components/forgetPassword/page'
import Header from './assets/components/header/header'
import Course from './assets/components/course/courses'
import WebDevelopement from './assets/components/course/webDevelopement'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AppDevelopement from './assets/components/course/appDevelopement'
import DataScience from './assets/components/course/dataScience'
import UiUxDesign from './assets/components/course/uiUxDesign'
import DigitalMarketing from './assets/components/course/digitalMarketing'
import CyberSecurity from './assets/components/course/cyberSecurity'
import ArtificialIntelligence from './assets/components/course/artificialIntelligence'
import CloudComputing from './assets/components/course/cloudComputing'
import Home from './assets/components/home/Home'
import SuccessStrories from './assets/components/successStories/successStrories'
const App = () => {
  return (
    <BrowserRouter>
     <Header />
    <Routes>
      
      <Route path='/course' element={<Course/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/successStories' element={<SuccessStrories/>}/>
      <Route path='/course/cloudComputing' element={<CloudComputing/>}/>
      <Route path='/course/artificialIntelligence' element={<ArtificialIntelligence/>}/>
      <Route path='/course/cyberSecurity' element={<CyberSecurity/>}/>
      <Route path='/course/digitalMarketing' element={<DigitalMarketing/>}/>
      <Route path='/course/uiUxDesign' element={<UiUxDesign/>}/>
      <Route path='/course/dataScience' element={<DataScience/>}/>
      <Route path='/course/appDevelopement' element={<AppDevelopement/>}/>
       <Route path='/course/webDevelopement' element={<WebDevelopement/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/forgetPassward' element={<Forget/>}/>
      </Routes>
    </BrowserRouter>

  )
}

export default App
