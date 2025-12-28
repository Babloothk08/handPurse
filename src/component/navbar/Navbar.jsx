import React, { useState } from 'react';
import { PiShoppingBagBold } from "react-icons/pi";
import { MdMenu, MdClose } from "react-icons/md";
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [item , setItem] = useState(false)
  const [menu , setMenu] = useState("shop")

  // let visible = () =>{
  //   setIsOpen(!isOpen)
  // }
  // let handClicks = () => {
  //   setItem (!item)
  // }

  return (
    <div className="w-full fixed top-0 z-10 bg-white shadow-md">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between px-4 h-[80px]">
        {/* Logo */}
        <div className="flex-shrink-0 h-16 w-auto flex items-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMWRHUvSJeIpW0PWtuGS57bCsCGdf9N4ttLbo_679_fEfbXpWLljtyS2YkS32XHJOM-EE&usqp=CAU"
            alt="logo"
            className="h-full object-contain rounded-full"
          />
          <p className=' text-2xl text-rose-500 font-bold'>Shop Authentic </p>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-lg font-medium">
          <li onClick={() => setMenu("home")} className="hover:text-amber-500 cursor-pointer border-none">
          <Link to="/"
              className={menu === "home" ? " underline underline-offset-8" : ""}
            >
            Home
          </Link>
          </li>
          <li onClick={() => setMenu("about")} className="hover:text-amber-500 cursor-pointer border-none">
            <Link to = '/about' 
              className={menu === "about" ? " underline underline-offset-8" : ""}>About</Link>
          </li>
          <li onClick={() => setMenu("shop")} className="hover:text-amber-500 cursor-pointer border-none">
            <Link to = '/shop' className={menu === "shop" ? " underline underline-offset-8" : ""}>Shop</Link>
          </li>
          <li
            onClick={() => {
              setMenu("pages")
              setIsOpen(!isOpen); // toggle the dropdown
            }}
            className="hover:text-amber-500 cursor-pointer relative border-none"
          >
            <Link to='/pages' className={menu === "pages" ? " underline underline-offset-8" : ""}>Pages</Link>
            {
              isOpen && (
                <div className='absolute text-center bg-amber-50 p-5 w-56  -left-20'>
                   <Link to = '/about'>
                      <p className='hover:bg-red-500 hover:text-white '>About</p>
                   </Link>

                   <Link to = '/services'>
                      <p className='hover:bg-red-500 hover:text-white'>Our Service</p>
                   </Link>

                   <Link to = '/pricing'>
                      <p className='hover:bg-red-500 hover:text-white'>Pricing Plan</p>
                   </Link>   
                   <Link to = '/ourteam'>
                      <p className='hover:bg-red-500 hover:text-white'>Our Team</p>
                   </Link>

                   <Link to = '/faq'>
                     <p className='hover:bg-red-500 hover:text-white'>Faq</p>
                   </Link>

                   <Link to = '/contact'>
                      <p className='hover:bg-red-500 hover:text-white'>Contact</p>
                   </Link>
                </div>
              )
            }

          </li>
          <li
            onClick={() => {
              setMenu("blog")
              setItem(!item); // toggle the dropdown
            }}
            className="hover:text-amber-500 cursor-pointer relative border-none"
            >
            <Link to = '/blog' className= {menu === "blog" ? " underline underline-offset-8" : ""}>Blog</Link>
            {
              item &&(
                <div className='absolute bg-amber-50  p-5 w-36  -left-10'>
                  <Link to = '/blogchl'>
                      <p className='hover:bg-red-500 hover:text-white'>Blog Grid</p>
                  </Link>
                  <Link to = '/bloglist'>
                      <p className='hover:bg-red-500 hover:text-white'>Blog List</p>
                  </Link>
            </  div>
              )
            }
          </li>
          <li onClick={() => setMenu("contact")} className="hover:text-amber-500 cursor-pointer border-none">
            <Link to = '/contact' className={menu === "contact" ? "underline underline-offset-8" : ""}>Contact</Link>
          </li>
        </ul>

        {/* Desktop Right Buttons */}
        <div className="hidden md:flex items-center gap-5">
          <button className="bg-amber-400 px-4 py-2 rounded-lg text-white font-semibold hover:bg-amber-500">
            <Link to='/signUp'>Get a Quote/Login</Link>
          </button>
          <PiShoppingBagBold className="text-2xl text-orange-400 cursor-pointer" />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-3xl cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <MdClose /> : <MdMenu />}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white w-full px-4 pb-4 shadow-md">
          <ul className="flex flex-col gap-4 text-lg font-medium">
            <li className="hover:text-amber-500 cursor-pointer">
              <Link to = '/'>Home</Link>
            </li>
            <li className="hover:text-amber-500 cursor-pointer">
              <Link to = '/about'>About</Link>
            </li>
            <li className="hover:text-amber-500 cursor-pointer">
              <Link to = '/shop'>Shop</Link>
            </li>
            <li className="hover:text-amber-500 cursor-pointer">
              <Link to = '/pages'>Pages</Link>
            </li>
            <li className="hover:text-amber-500 cursor-pointer">
              <Link to='/blog'>Blog</Link>
            </li>
            <li className="hover:text-amber-500 cursor-pointer">
              <Link to = '/contact'>Contact</Link>
            </li>
            <button className="bg-amber-400 px-4 py-2 rounded-lg text-white font-semibold hover:bg-amber-500">
              Get a Quote
            </button>
            <PiShoppingBagBold className="text-2xl text-orange-400 cursor-pointer" />
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
