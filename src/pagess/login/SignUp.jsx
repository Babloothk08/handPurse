import React from 'react'

function SignUp() {
  return (
    <div className='w-full min-h-screen px-4 py-10 pt-30  p-25 flex flex-col justify-center  items-center shadow-md'>
      <div className='w-full max-w-[500px] rounded-lg shadow-2xl bg-white p-8 flex flex-col justify-start gap-7 '>
        <h1 className='text-2xl'>Sign In</h1>
        <div className='flex flex-col gap-7 '>
          <input type='text' placeholder='Your Name' className='border-1 h-12 p-7 text-xl rounded-xl'/>
          <input type='email' placeholder='Your Email'className='border-1 h-12 p-7 text-xl rounded-xl'/>
          <input type='password' placeholder='Your Password' className='border-1 h-12 p-7 text-xl rounded-xl'/>
        </div>
        <button className='text-white text-3xl bg-red-600 h-16 rounded-xl'>Continue</button>
        <p className='px-5 text-xl flex gap-19'>Create Your Account ? <Link to = "/signUp"><span className='text-blue-700'>Ragisteration</span></Link></p>
        <div className='flex gap-2 '>
          <input type='checkbox' name='' id=''/>
          <p className=''>By Continuing, You agree to the terms of use & privacy Policy.</p>
        </div>
      </div>
    </div>
  )
}

export default SignUp