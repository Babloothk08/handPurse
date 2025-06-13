import React from 'react';
import { IoIosMail } from "react-icons/io";

function DesignBag() {
  return (
    <div className="w-full py-12 bg-[#fce4d1]">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-10">
        
        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="https://wp.dreamitsolution.net/totes/wp-content/uploads/2024/12/newslatter-thumb.png"
            alt="Newsletter"
            className="w-full max-w-md h-auto object-contain"
          />
        </div>

        {/* Newsletter Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left gap-6">
          <div className="text-5xl text-black">
            <IoIosMail />
          </div>
          <h1 className="text-3xl sm:text-4xl font-semibold">Newsletter Signup</h1>
          <p className="text-gray-700">
            Join our list and get <span className="font-semibold">25% off</span> your first purchase!
          </p>

          {/* Email Input + Button */}
          <form className="w-full max-w-md flex flex-col sm:flex-row items-center gap-4">
            <input
              type="email"
              placeholder="Your Email Address"
              className="flex-1 w-full border border-gray-300 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
            <button
              type="submit"
              className="bg-black text-white px-6 py-3 rounded w-full sm:w-auto hover:bg-gray-800 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default DesignBag;
