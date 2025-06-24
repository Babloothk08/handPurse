import React from 'react'
import { IoMdPerson } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import { CiSearch } from "react-icons/ci";

function BlogMain() {
  return (
    <div className='relative h-full w-full px-3 lg:px-15 '>
        <div className='flex max-sm:flex-col max-md:flex-col max-lg:flex-col py-10 lg:gap-30 '>

            {/* .....................Left-1....................... */}
            <div className='flex flex-col'>
                <div className='max-w-1200'>
                <img src='https://www.damilano.com/cdn/shop/files/shop-the-look_1600x.webp?v=1725874624' 
                className='bg-cover bg-center  h-[300px] w-full
                lg:h-[450px] lg:w-[950px]'/>
                <div className='flex flex-row'>
                    <div className='flex flex-row gap-4 px-5 py-5'>
                      <div className='text-2xl'><IoMdPerson/></div>
                      <h3 className=''>By Quotes</h3>
                    </div>
                    <div className='flex flex-row gap-4 px-5 py-5'>
                      <div className='text-2xl'><SlCalender/></div>
                      <h3 className=''>December 2, 2024</h3>
                    </div>
                </div>
                <div className='flex flex-col items-start  gap-6 py-5 '>
                    <h1 className='text-3xl lg:text-4xl lg:w-172 font-semibold'>Stylish Handbags That Keep Up with Your Best Busy Lifestyle For Easy</h1>
                    <p className=''>Whether you're looking for a chic tote to elevate yourwork attire, a sleek crossbody . Interactivelyinterdum velit laoreet id donec ultrices tincidunt arcu non. Augue neque  gravida in fermentum et. Vestibulum rhoncus est
                    </p>
                    <div className=' flex h-12 w-35  text-center justify-center items-center bg-[#7A7571] text-white font-bold'>
                        <button>Read More</button>
                    </div>
                </div>
            </div>
            {/* .....................Left-2....................... */}
            <div className=' max-w-1200'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHsr6he3z6irk6O7LN6XHHyu1pdkEBElBW4Q&s' 
                className='bg-cover bg-center  h-[300px] w-full
                lg:h-[450px] lg:w-[950px]'/>
                <div className='flex flex-row'>
                    <div className='flex flex-row gap-4 px-5 py-5'>
                      <div className='text-2xl'><IoMdPerson/></div>
                      <h3 className=''>By Quotes</h3>
                    </div>
                    <div className='flex flex-row gap-4 px-5 py-5'>
                      <div className='text-2xl'><SlCalender/></div>
                      <h3 className=''>December 2, 2024</h3>
                    </div>
                </div>
                <div className='flex flex-col gap-6 py-5 '>
                    <h1 className='text-3xl lg:text-4xl lg:w-172 font-semibold'>Stylish Handbags That Keep Up with Your Best Busy Lifestyle For Easy</h1>
                    <p className=''>Whether you're looking for a chic tote to elevate yourwork attire, a sleek crossbody . Interactivelyinterdum velit laoreet id donec ultrices tincidunt arcu non. Augue neque  gravida in fermentum et. Vestibulum rhoncus est
                    </p>
                    <div className=' flex h-12 w-35  text-center justify-center items-center bg-[#7A7571] text-white font-bold'>
                        <button>Read More</button>
                    </div>
                </div>
            </div>
            {/* .....................Left-3....................... */}
            <div className='max-w-1200'>
                <img src='https://www.beyoung.in/blog/wp-content/uploads/2023/01/The-Shoulder-Bag-853x1024.jpg' 
                className='bg-cover bg-center  h-[300px] w-full
                lg:h-[450px] lg:w-[950px]'/>
                <div className='flex flex-row'>
                    <div className='flex flex-row gap-4 px-5 py-5'>
                      <div className='text-2xl'><IoMdPerson/></div>
                      <h3 className=''>By Quotes</h3>
                    </div>
                    <div className='flex flex-row gap-4 px-5 py-5'>
                      <div className='text-2xl'><SlCalender/></div>
                      <h3 className=''>December 2, 2024</h3>
                    </div>
                </div>
                <div className='flex flex-col gap-6 py-5 '>
                    <h1 className='text-3xl lg:text-4xl lg:w-172 font-semibold'>Stylish Handbags That Keep Up with Your Best Busy Lifestyle For Easy</h1>
                    <p className=''>Whether you're looking for a chic tote to elevate yourwork attire, a sleek crossbody . Interactivelyinterdum velit laoreet id donec ultrices tincidunt arcu non. Augue neque  gravida in fermentum et. Vestibulum rhoncus est
                    </p>
                    <div className=' flex h-12 w-35  text-center justify-center items-center bg-[#7A7571] text-white font-bold'>
                        <button>Read More</button>
                    </div>
                </div>
            </div>
            </div>

            {/* ..............................RIGHT........................ */}
            <div className='md:sticky top-0 max-sm:pt-5 flex flex-col gap-5 '>
                <div className='flex flex-col h-35 w-full lg:w-120 lg:h-40 bg-[#7A7571] justify-center gap-5 px-5'>
                    <h1 className='text-3xl '>Search</h1>
                    <div className='flex flex-row bg-white justify-between items-center px-5'>
                        <input type="text " placeholder='Search Here'className=' h-13 pl-5' />
                       <CiSearch/>
                    </div>
                </div>
                <div className='bg-[#7A7571] flex flex-col gap-8 px-5 py-7 lg:h-90'>
                    <h1 className='text-3xl font-semibold'>Recent Post</h1>
                    <p>Stylish Handbags That Keep Up with Your Best Busy Lifestyle For Easy <br></br><br></br>
                    Exploring the Stories of Iconic Handbag Like To Designers Thats Great People <br></br><br></br>
                    Stylish Handbags That Keep Up with Your BestBusy Lifestyle For Easy
                    </p>
                </div>
                
            </div>

            {/* <div className='md:sticky top-0 max-sm:pt-5 flex flex-col gap-5 bg-white'>
  <div className='flex flex-col h-35 w-full lg:w-120 lg:h-40 bg-[#7A7571] justify-center gap-5 px-5'>
    <h1 className='text-3xl'>Search</h1>
    <div className='flex flex-row bg-white justify-between items-center px-5'>
      <input type="text" placeholder='Search Here' className='h-13 pl-5' />
      <CiSearch />
    </div>
  </div>
  <div className='bg-[#7A7571] flex flex-col gap-8 px-5 py-7 lg:h-90'>
    <h1 className='text-3xl font-semibold'>Recent Post</h1>
    <p>
      Stylish Handbags That Keep Up with Your Best Busy Lifestyle For Easy <br /><br />
      Exploring the Stories of Iconic Handbag Like To Designers Thats Great People <br /><br />
      Stylish Handbags That Keep Up with Your BestBusy Lifestyle For Easy
    </p>
  </div>
</div> */}

        </div>
    </div>
  )
}

export default BlogMain