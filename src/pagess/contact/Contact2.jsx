import React from 'react'

function Contact2() {
  return (
    <div className='relative h-full w-full'>
        <div className='text-center pt-7 mt-7 text-3xl underline underline-offset-25'> 
          <h1>Contact Us</h1>
        </div>
        <div className='h-[650px] md:h-[550px] '>
         <div className='md:flex md:flex-row  gap-6 px-5 py-5 mt-5 justify-center items-center '>
            <div className='w-full md:w-[600px] h-15 p-3.5 border-1 my-5'>
                <input type='text' placeholder='Your Name'class='required'></input>
            </div>
            <div className='w-full md:w-[600px]  h-15 p-3.5 border-1 '>
                <input type='text' placeholder='Your Name'class='required'></input>
            </div>
         </div>

         <div className='md:flex md:flex-row gap-6 px-5 justify-center items-center '>
            <div className=' w-full md:w-[600px]  h-15 p-3.5 border-1 my-5'>
               <input type='text' placeholder='Your Name'class='required'></input>
            </div>
            <div className=' w-full md:w-[600px]  h-15 p-3.5 border-1'>
               <input type='text' placeholder='Your Name'class='required'></input>
            </div>
         </div>

         <div className=' h-[200px]  m-4.5  xl:m-35 p-6 border-1 xl:mt-10 '>
          <input type='text'placeholder='Write Message'></input>
         </div>
        </div>
    </div>
  )
}

export default Contact2