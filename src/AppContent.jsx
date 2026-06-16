import {useLocation } from "react-router-dom";
import { useEffect } from "react";
import Login from './assets/components/login/page'
import Signup from './assets/components/signup/page'
import Forget from './assets/components/forgetPassword/page'
import Header from './assets/components/header/header'
import Course from './assets/components/course/courses'
import WebDevelopement from './assets/components/course/webDevelopement'
import {Route, Routes } from 'react-router-dom'
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
import Courses from './assets/components/admin/courses'
import Payment from './assets/components/admin/payment'
import Inquiry  from './assets/components/admin/inquiry'
import Enrollments from './assets/components/admin/enrollment'
import SucessStories from './assets/components/admin/sucessStrories'
import Analytics from './assets/components/admin/analytics'


const AppContent = ({
  setShowInquiryPopup,
}) => {

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      const timer = setTimeout(() => {
        setShowInquiryPopup(true);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [location.pathname]);
   const isAdminRoute =
    location.pathname.startsWith("/admin");

  return (
<>
     {!isAdminRoute && (
        <Header
          openInquiry={() =>
            setShowInquiryPopup(true)
          }
        />
      )}

    
     <Routes>
      <Route path='/admin/inquiry' element={<AdminLayout><Inquiry/></AdminLayout>}/>
       <Route path='/admin/analytics' element={<AdminLayout><Analytics/></AdminLayout>}/>
       <Route path='/admin/successStories' element={<AdminLayout><SucessStories/></AdminLayout>}/>
       <Route path='/admin/enrollment' element={<AdminLayout><Enrollments/></AdminLayout>}/>
      <Route path='/admin/students' element={<AdminLayout><Students/></AdminLayout>}/>
      <Route path='/admin/courses' element={<AdminLayout><Courses/></AdminLayout>}/>
      <Route path='/admin/payment' element={<AdminLayout><Payment/></AdminLayout>}/>
      <Route path='/admin/dashbord' element={<AdminLayout><Dashbord/></AdminLayout>}/>
      <Route path='/course' element={ <><Course/><Footer/></>}/>
      <Route path='/about' element={<><About/><Footer/></>}/>
      <Route path='/contact' element={<><Contact/><Footer/></>}/>
      <Route path='/' element={<><Home/><Footer/></>}/>
      <Route path='/successStories' element={<><SuccessStrories/><Footer/></>}/>
      <Route path='/course/cloudComputing' element={<><CloudComputing/><Footer/></>}/>
      <Route path='/course/artificialIntelligence' element={<><ArtificialIntelligence/><Footer/></>}/>
      <Route path='/course/cyberSecurity' element={<><CloudComputing/><Footer/></>}/>
      <Route path='/course/digitalMarketing' element={<><CloudComputing/><Footer/></>}/>
      <Route path='/course/uiUxDesign' element={<><CloudComputing/><Footer/></>}/>
      <Route path='/course/dataScience' element={<><CloudComputing/><Footer/></>}/>
      <Route path='/course/appDevelopement' element={<><CloudComputing/><Footer/></>}/>
       <Route path='/course/webDevelopement' element={<><CloudComputing/><Footer/></>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/forgetPassward' element={<Forget/>}/>
      </Routes>
       
</>
  );
};

export default AppContent;