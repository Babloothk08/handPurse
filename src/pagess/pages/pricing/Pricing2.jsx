import React from 'react'

function Pricing2() {
  return (
    <div className='relative w-full h-full flex flex-col items-center pt-10 '>
        <div className='text-3xl pb-5'>
            <h1>Pricing Plan</h1>
        </div>
        <div className=' 2xl:flex 2xl:flex-row xl:flex xl:flex-row justify-center content-center items-center text-center gap-10 '>

            <div className='border-2 h-[550px] w-[450px] flex flex-col items-center gap-15 pt-10  relative my-15'>
               <h1 className='absolute -mt-18 h-15 pt-1.5 w-90 bg-orange-400 text-white rounded-2xl text-4xl hover:bg-black hover:text-white cursor-pointer'>Basic</h1>
               <h2 className='text-5xl '>$ 39.00 / <span className='text-2xl'>Month</span></h2>
               <p className='w-60 text-2xl'>Lorem ipsum dolor sit
                  Exercitation ullamco
                  Excepteur occaecat
                  Sed quia non numquam
                  At vero eos et accusamus et
                  Quas molestias excepturi
               </p>
               <button className='bg-orange-400 text-xl h-11 w-40 rounded-xl hover:bg-black hover:text-white cursor-pointer'>Buy Now</button>
            </div>

            <div className='border-2 h-[550px] w-[450px] flex flex-col items-center gap-15 pt-10 my-15'>
               <h1 className='absolute -mt-18 h-15 pt-1.5 w-90 bg-orange-400 text-white rounded-2xl text-4xl hover:bg-black hover:text-white cursor-pointer'>Standard</h1>
               <h2 className='text-5xl'>$ 59.00 / <span className='text-2xl'>Month</span></h2>
               <p className='w-60 text-2xl'>Lorem ipsum dolor sit
                  Exercitation ullamco
                  Excepteur occaecat
                  Sed quia non numquam
                  At vero eos et accusamus et
                  Quas molestias excepturi
               </p>
               <button className='bg-orange-400 text-xl h-11 w-40 rounded-xl hover:bg-black hover:text-white cursor-pointer'>Buy Now</button>
            </div>
            
            <div className='border-2 h-[550px] w-[450px] flex flex-col items-center gap-15 pt-10 my-10'>
               <h1 className='absolute -mt-18 h-15 pt-1.5 w-90 bg-orange-400 text-white rounded-2xl text-4xl hover:bg-black hover:text-white cursor-pointer'>Advance</h1>
               <h2 className='text-5xl'>$ 99.99 / <span className='text-2xl'>Month</span></h2>
               <p className='w-60 text-2xl'>Lorem ipsum dolor sit
                  Exercitation ullamco
                  Excepteur occaecat
                  Sed quia non numquam
                  At vero eos et accusamus et
                  Quas molestias excepturi
               </p>
               <button className='bg-orange-400 text-xl h-11 w-40 rounded-xl hover:bg-black hover:text-white cursor-pointer'>Buy Now</button>
            </div>
        </div>
    </div>
  )
}

export default Pricing2