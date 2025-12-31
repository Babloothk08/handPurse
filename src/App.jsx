import './App.css'
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Footer from './component/footer/Footer';
import Navbar from './component/navbar/Navbar';
import About from './pagess/about/About';
import Home from './pagess/home/Home'
import { BrowserRouter,  Routes, Route } from 'react-router-dom';
import Shop from './pagess/shop/Shop';
import Blog from './pagess/blog/Blog';
import Contact from './pagess/contact/Contact';
import Pages from './pagess/pages/Pages';
import Pricing from './pagess/pages/pricing/Pricing';
import Services from './pagess/pages/service/Services';
import Faq from './pagess/pages/faq/Faq';
import OurTeam from './pagess/pages/ourteam/OurTeam';
import BlogChd1 from './pagess/blog/blogGrid/BlogChd1';
import BlogList from './pagess/blog/blogList/BlogList';
import DetailPage from './pagess/DetailPage';
import SignUp from './pagess/login/SignUp';
import Login from './pagess/login/Login';


  const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,     
    });
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar/>
         <Routes>
            <Route path='/' element = {<Home/>} />
            <Route path='/about' element = {<About/>} />
            <Route path='/shop' element = {<Shop/>} />
            <Route path='/blog' element = {<Blog/>} />
            <Route path='/contact' element = {<Contact/>} />
            <Route path='/pages' element = {<Pages/>} />
            <Route path='/services' element = {<Services/>}/>
            <Route path='/ourteam' element = {<OurTeam/>} />
            <Route path='/pricing' element = {<Pricing/>} />
            <Route path='/faq' element = {<Faq/>}/>
            <Route path='/blogchl' element = {<BlogChd1/>}/>
            <Route path='/bloglist' element = {<BlogList/>}/>
            <Route path='/:category/detailPage/id' element = {<DetailPage/>}/>
            <Route path='/signUp' element = {<SignUp/>}/>
            <Route path='/login' element = {<Login/>}/>
         </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  )
}

export default App
