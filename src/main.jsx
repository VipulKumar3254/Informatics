import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter,Routes,Route,useNavigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Signup from './components/Signup'
import Login from "./components/Login"
import LandingPage from './components/LandingPage'
import Notes from './components/Notes'
import ViewNote from './components/ViewNote'
import EditNote from './components/EditNote'
import CreateNote from './components/CreateNote'
import PageNotFound from './components/PageNotFound'
import AboutUs from './components/AboutUs'
import ContactUs from './components/ContactUs'
import { useEffect } from 'react'



ReactDOM.createRoot(document.getElementById('root')).render(
  
  <BrowserRouter>
  <Routes>
  <Route path='/' element={[<Navbar about="About Us" contact="Contact Us" right="Logout" /> ,  <LandingPage/>,<AboutUs/>,<ContactUs/>]} ></Route>
    <Route exact  path='/login' element={[<Navbar about="About Us" contact="Contact Us" right="Logout" /> ,<Login/>,<AboutUs/>,<ContactUs/>]}></Route>
    <Route path='/signup' element={[ <Navbar about="About Us" contact="Contact Us"  right="Logout" /> ,<Signup/>,<AboutUs/>,<ContactUs/>]}></Route>
    <Route path='/notes' element={[ <Navbar right="Logout" /> , <Notes/>]}></Route>
    <Route path='/viewNote' element={[ <Navbar right="Logout" /> , <ViewNote/>]} > </Route>
    <Route path='/editNote' element={[ <Navbar right="Logout" /> , <EditNote/>]} > </Route>
    <Route path='/createNote' element={ [<Navbar right="Logout" />, <CreateNote/>]}></Route>
    <Route path='*'  element={[ <Navbar  about="About Us" contact="Contact Us" right="Logout"/> ,<PageNotFound/>,<AboutUs/>,<ContactUs/>] }></Route>
  </Routes>

  </BrowserRouter>
 
)
