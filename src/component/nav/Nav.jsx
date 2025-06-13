import React from 'react'
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { IoIosTabletPortrait } from "react-icons/io";
import { MdLaptopWindows } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";

function Nav() {
  return (
    <div className='fixed t-0 w-full bg-blue-950  '>
        <div className='flex justify-between content-center items-center h-[70px] w-100% text-white'>
          <div className='flex justify-center content-center items-center gap-10 ml-6 '>
            <div><a href='#'>Totes – Handbags & Shopping Clothes WordPress Theme</a></div>
            <div className='flex justify-center content-center items-center gap-2 text-3xl max-sm:hidden  '>
               <HiOutlineDevicePhoneMobile/>
               <IoIosTabletPortrait/>
               <MdLaptopWindows/>
            </div>
          </div>
          <div className='flex justify-center content-center items-center gap-8 mr-18'>
            <div className='flex justify-center content-center items-center gap-2 bg-green-600 w-38 h-10 rounded-xl max-sm:hidden'>
                <AiOutlineShoppingCart className='text-xl'/>
                <h1 className=''> Add to Cart</h1> 
            </div>
            <div className='bg-white text-black w-58 h-10  text-center flex justify-center content-center items-center rounded-xl sd:text-hidden max-sm:hidden'><h1>Get Unlimited Downloads</h1></div>
            <div className='text-2xl'><AiOutlineShoppingCart/></div>
          </div>
        </div>
    </div>
    
  )
}

export default Nav