import React from 'react';
import { RiVisaLine } from "react-icons/ri";
import { FaCcPaypal, FaCcMastercard } from "react-icons/fa";

function Footer() {
  return (
    <div className="w-full bg-[#fce4d1] pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
        <div className="flex flex-col gap-4 items-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMWRHUvSJeIpW0PWtuGS57bCsCGdf9N4ttLbo_679_fEfbXpWLljtyS2YkS32XHJOM-EE&usqp=CAU"
            alt="Totes Logo"
            className="w-32 bg-[#fce4d1] rounded-full"
          />
          <h1 className=' text-2xl text-rose-500 font-bold'>Shop Authentic</h1>
          <p className="text-sm text-gray-700">
            Totes has survived not only five centuries but also the leap into electronic typesetting, remaining unchanged.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-semibold">Help & Information</h2>
          <p>About Us</p>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
          <p>Products Return</p>
          <p>Wholesale Policy</p>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-semibold">About Us</h2>
          <p>Contact</p>
          <p>Home Page</p>
          <p>Terms & Conditions</p>
          <p>Accessories</p>
          <p>Pagination</p>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-semibold">Categories</h2>
          <p>Menu Item</p>
          <p>Help Center</p>
          <p>Address Store</p>
          <p>Privacy Policy</p>
          <p>Home Page</p>
        </div>
      </div>

      <div className="mt-12 border-t border-gray-300 pt-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-700">
          <p>© 2025 Totes. All Rights Reserved.</p>
          <div className="flex items-center gap-5 text-2xl text-black">
            <RiVisaLine />
            <FaCcPaypal />
            <FaCcMastercard />
            <FaCcMastercard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
