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
import Footer from './assets/components/footer/Footer'
import About from './assets/components/aboutUs/About'
import Contact from './assets/components/contact/Contact'
import AdminLayout from './assets/components/admin/adminLayout'
import Students from './assets/components/admin/students'
import Dashbord from './assets/components/admin/dashbord'


const App = () => { 
  return (
    <BrowserRouter>
    

    <Routes>
      <Route path='/admin/students' element={<AdminLayout><Students /></AdminLayout>}/>
      <Route path='/admin/dashbord' element={<AdminLayout><Dashbord/></AdminLayout>}/>
      <Route path='/course' element={ <><Header /><Course/><Footer/></>}/>
      <Route path='/about' element={<><Header /><About/><Footer/></>}/>
      <Route path='/contact' element={<><Header /><Contact/><Footer/></>}/>
      <Route path='/' element={<><Header /><Home/><Footer/></>}/>
      <Route path='/successStories' element={<><Header /><SuccessStrories/><Footer/></>}/>
      <Route path='/course/cloudComputing' element={<><Header /><CloudComputing/><Footer/></>}/>
      <Route path='/course/artificialIntelligence' element={<><Header/><ArtificialIntelligence/><Footer/></>}/>
      <Route path='/course/cyberSecurity' element={<><Header/><CloudComputing/><Footer/></>}/>
      <Route path='/course/digitalMarketing' element={<><Header /><CloudComputing/><Footer/></>}/>
      <Route path='/course/uiUxDesign' element={<><Header/><CloudComputing/><Footer/></>}/>
      <Route path='/course/dataScience' element={<><Header /><CloudComputing/><Footer/></>}/>
      <Route path='/course/appDevelopement' element={<><Header /><CloudComputing/><Footer/></>}/>
       <Route path='/course/webDevelopement' element={<><Header /><CloudComputing/><Footer/></>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/forgetPassward' element={<Forget/>}/>
      </Routes>
       
     </BrowserRouter>

  )
}

export default App
