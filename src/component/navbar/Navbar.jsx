import React, { useState } from 'react';
import { PiShoppingBagBold } from "react-icons/pi";
import { MdMenu, MdClose } from "react-icons/md";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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
          <li className="hover:text-amber-500 cursor-pointer">Home</li>
          <li className="hover:text-amber-500 cursor-pointer">About</li>
          <li className="hover:text-amber-500 cursor-pointer">Shop</li>
          <li className="hover:text-amber-500 cursor-pointer">Pages</li>
          <li className="hover:text-amber-500 cursor-pointer">Blog</li>
          <li className="hover:text-amber-500 cursor-pointer">Contact</li>
        </ul>

        {/* Desktop Right Buttons */}
        <div className="hidden md:flex items-center gap-5">
          <button className="bg-amber-400 px-4 py-2 rounded-lg text-white font-semibold hover:bg-amber-500">
            Get a Quote
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
            <li className="hover:text-amber-500 cursor-pointer">Home</li>
            <li className="hover:text-amber-500 cursor-pointer">About</li>
            <li className="hover:text-amber-500 cursor-pointer">Shop</li>
            <li className="hover:text-amber-500 cursor-pointer">Pages</li>
            <li className="hover:text-amber-500 cursor-pointer">Blog</li>
            <li className="hover:text-amber-500 cursor-pointer">Contact</li>
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
