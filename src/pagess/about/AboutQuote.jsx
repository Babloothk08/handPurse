import React from 'react'

function AboutQuote() {
  return (
    <div className='relative h-full w-full pt-20 md:flex md:flex-row md:gap-16 md:px-28'>
        <div className='flex flex-row px-15 md:pt-22  '>
            <div className='h-20 w-33'>
                <img src='https://wp.dreamitsolution.net/totes/wp-content/uploads/2024/12/quote.png'alt='commas' className=''/>
            </div>
            <div className=' '>
                <h1 className='px-2 text-3xl leading-normal md:w-93 md:px-0 md:text-4xl md:font-semibold'>We are strong team  brings innovative ideas into production.</h1><br></br>
               <h2 className='py-1 px-2 underline -underline-offset-28'>Joshua Jones</h2>
               <p className='px-2'>Co Founder, Developer</p>
            </div>
        </div>
        <div className='w-full h-full md:flex'>
            <div className='flex flex-col items-center gap-2'>
                <img src='https://wp.dreamitsolution.net/totes/wp-content/uploads/2024/12/team1.png' alt='pic' className='w-screen px-5 pt-10 md:h-[350px] md:w-[350px]'/>
                <h1 className='text-2xl'>Joshua Jones</h1>
                <p>Web Developer</p>
            </div>
            <div className='flex flex-col items-center gap-2 pb-6'>
                <img src='https://wp.dreamitsolution.net/totes/wp-content/uploads/2024/12/team2.png' alt='pic' className='w-screen px-5 pt-10 md:h-[350px] md:w-[350px]'/>
                <h1 className='text-2xl'>Joshua Jecky</h1>
                <p>Creative Designer</p>
            </div>
        </div>
    </div>
  )
}

export default AboutQuote