import React from "react";

function Contact2() {
  return (
    <div className="min-h-fit mx-4 md:mx-20">
      {/* Title */}
      <div className="text-center pt-7 mt-7 text-3xl underline underline-offset-4">
        <h1>Contact Us</h1>
      </div>

      {/* Form Container */}
      <div className="h-auto md:h-[550px] py-6">
        {/* First Row */}
        <div className="flex flex-col md:flex-row gap-6 px-5 py-5 mt-5 justify-center items-center">
          <div className="w-full md:w-[600px]">
            <input
              type="text"
              placeholder="Your Name"
              required
              className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
          <div className="w-full md:w-[600px]">
            <input
              type="email"
              placeholder="Your Email"
              required
              className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
        </div>

        {/* Second Row */}
        <div className="flex flex-col md:flex-row gap-6 px-5 justify-center items-center">
          <div className="w-full md:w-[600px]">
            <input
              type="tel"
              placeholder="Your Phone"
              required
              className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-green-400 my-5 md:my-0"
            />
          </div>
          <div className="w-full md:w-[600px]">
            <input
              type="text"
              placeholder="Subject"
              required
              className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
        </div>

        {/* Message Box */}
        <div className="px-5 mt-6 flex justify-center">
          <textarea
            placeholder="Write your message..."
            className="w-full md:w-[1220px] h-[200px] p-4 border rounded-lg outline-none focus:ring-2 focus:ring-green-400 resize-none"
          />
        </div>

        {/* Submit Button */}
        <div className="px-5 mt-6 flex justify-center">
          <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg transition">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact2;





// import React from 'react'

// function Contact2() {
//   return (
//     <div className=' min-h-fit  mx-20 '>
//         <div className='text-center pt-7 mt-7 text-3xl underline underline-offset-25'> 
//           <h1>Contact Us</h1>
//         </div>
//         <div className='h-[650px] md:h-[550px] '>
//          <div className='md:flex md:flex-row  gap-6 px-5 py-5 mt-5 justify-center items-center '>
//             <div className='w-full md:w-[600px] h-15 p-3.5 border-1 my-5'>
//                 <input type='text' placeholder='Your Name'class='required'className='w-full'></input>
//             </div>
//             <div className='w-full md:w-[600px]  h-15 p-3.5 border-1 '>
//                 <input type='text' placeholder='Your Name'class='required'className='w-full'></input>
//             </div>
//          </div>

//          <div className='md:flex md:flex-row gap-6 px-5 justify-center items-center '>
//             <div className=' w-full md:w-[600px]  h-15 p-3.5 border-1 my-5'>
//                <input type='text' placeholder='Your Name'class='required 'className='w-full'></input>
//             </div>
//             <div className=' w-full md:w-[600px]  h-15 p-3.5 border-1'>
//                <input type='text' placeholder='Your Name'class='required 'className='w-full'></input>
//             </div>
//          </div>

//          <div className=' h-[200px]  m-4.5  xl:m-35 p-6 border-1 xl:mt-10 '>
//           <input type='text'placeholder='Write Message 'className='w-full h-full'></input>
//          </div>
//         </div>
//     </div>
//   )
// }

// export default Contact2