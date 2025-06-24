import React from 'react'
import { CiSearch } from "react-icons/ci";
import { BsGrid3X3Gap } from "react-icons/bs";
import { MdMenu } from "react-icons/md";

function ShopPurse1() {
  return (
    <div className='relative h-full w-full mt-18'>
        <div className='flex flex-col  xl:flex xl:flex-row 2xl:flex 2xl:flex-row'>

            {/* .................Left Part..................... */}
            <div className='  xl:sticky xl:top-10 2xl:sticky 2xl:top-10  lg:h-[700px] xl:h-[1200px] 2xl:h-[1470px] w-[460px] xl:w-[460px] 2xl:w-[460px] md:w-[730px]  px-2 ml-3 flex flex-col gap-8 py-8'>

                {/* .........Search Bar.......... */}
                <div className='bg-[#5D5F62] h-[140px] w-[430px] md:w-[730px] 2xl:w-[430px] xl:w-[430px] flex justify-between items-center text-2xl px-9 '>
                   <div className='bg-white flex flex-row justify-between  items-center px-4 h-[45px] w-[350px] md:w-[650px] md:h-[55px] 2xl:w-[430px] xl:w-[430px]'>
                      <div className=''><input type='text' placeholder='Search Here'></input> </div>
                      <div className=''><CiSearch/></div>
                   </div>
                </div>

                {/* .........Category.......... */}
                <div className='bg-[#5D5F62] h-[150px] w-[430px] md:w-[730px] 2xl:w-[430px] xl:w-[430px] flex flex-col gap-8 px-9 py-5 content-center '>
                    <h1 className='text-white text-4xl  '>Category</h1>
                    <p className='text-white text-xl'>Handbag</p>
                </div>

                {/* .........Filter By Price.......... */}
                <div className='bg-[#5D5F62] h-[200px] w-[430px] md:w-[730px] 2xl:w-[430px] xl:w-[430px] flex flex-col  gap-18 px-9 text-white'>
                    <div className='text-4xl pt-5 '><h1>Filter by price</h1></div>
                    <div className='flex flex-row justify-between'>
                        <h2 className='text-3xl'>Filter</h2>
                        <p>Price:OS -- SOS</p>
                    </div>
                </div>
            </div>

            {/* .........................Right Part................... */}


            <div className='flex flex-col gap-13'>
                <div className='flex flex:row justify-between px-20 max-sm:px-4 py-8 pb-10'>
                    <div className='bg-[#5D5F62] text-white text-xl text-center content-center h-15 w-[180px]'>
                        {/* <Link to="/default">
                           <button>Default Choice</button>
                        </Link> */}
                        <button>Default Choice</button>
                    </div>
                    <div className='flex flex-row text-3xl gap-3 '>
                        <div className=' h-[50px] w-[50px  pt-2'>
                            <BsGrid3X3Gap/>
                        </div>
                        <div className='text-5xl h-[50px] w-[50px] '>
                            <MdMenu/>
                        </div>
                    </div>
                </div>


                {/* ......................Image 1st Row.................... */}
               <div className='md:flex md:flex-1/3 justify-start gap-30'>
                   <div className='flex flex-col items-center px-4'>
                      <img src='https://5.imimg.com/data5/CO/XW/MY-44197581/ladies-stylish-purse.jpg' className='h-[320px] w-[320px]'/>
                      <h1>Buckle Handbag</h1>
                      <p>22.00$</p>
                   </div>
                   <div className='flex flex-col items-center'>
                      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj1Bsx_JUni5HgqZJhFSK2IcqonalFiI12a4g64UWWR5HHGy7AZqb7eG7T2k3WtkI8-Ek&usqp=CAU' className='h-[320px] w-[320px]'/>
                      <h1>Buckle Handbag</h1>
                      <p>22.00$</p>
                      </div>
                   <div className='flex flex-col items-center'>
                      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX7b4nFEqmbOQwH4qXK6sTeCkFn8JCb1jFTRwCKV8akr0fYqPwrvieCNM6HAWXDmjZimY&usqp=CAU' className='h-[320px] w-[320px]'/>
                      <h1>Buckle Handbag</h1>
                      <p>22.00$</p>
                   </div>
               </div>
   
               {/* .........................Image 2nd Row..................... */}
               <div className='md:flex md:flex-1/2 justify-start gap-30'>
                   <div className='flex flex-col items-center px-4'>
                      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVGZN0TOhsx4G_D6avavHSFYhW3YiW-cM5ex2E-mAJgfZbud1ieMDDCZdet3Eqw1nte5Q&usqp=CAU' className='h-[320px] w-[320px]'/>
                      <h1>Buckle Handbag</h1>
                      <p>22.00$</p>
                   </div>
                   <div className='flex flex-col items-center'>
                      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzrZbjKmA8wQAOQT6wRRMTNJ6u3KjGjjxYQAv_MtcMVXQroOALfay5miUuuc_jmFbrw8g&usqp=CAU' className='h-[320px] w-[320px]'/>
                      <h1>Buckle Handbag</h1>
                      <p>22.00$</p>
                      </div>
                   <div className='flex flex-col items-center'>
                      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAni9X7M1Wr5RQ21ozBlyLWTcaCkPs3uDsLP2qiJyZnuDDrsVFhLFhR75Admgnub8l4Bc&usqp=CAU' className='h-[320px] w-[320px]'/>
                      <h1>Buckle Handbag</h1>
                      <p>22.00$</p>
                   </div>
               </div>
   
               {/* .........................Image 3rd Row..................... */}
               <div className='md:flex md:flex-1/2 justify-start gap-30'>
                   <div className='flex flex-col items-center px-4'>
                      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwFg2ptkgB9dYyDiLlpVw_jRZ6LGOpxIMzikhU1j6PhTuMW9owEaIMHQpSq73nVNIW7UM&usqp=CAU' className='h-[320px] w-[320px]'/>
                      <h1>Buckle Handbag</h1>
                      <p>22.00$</p>
                   </div>
                   <div className='flex flex-col items-center'>
                      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqcnpdmjxb0QL8Nkw-fRoALw_bBgmjmZRxSQb7IP6uAsv_LyMHJQx8LEnAmJuwigCt8nY&usqp=CAU' className='h-[320px] w-[320px]'/>
                      <h1>Buckle Handbag</h1>
                      <p>22.00$</p>
                      </div>
                   <div className='flex flex-col items-center'>
                      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV1Ap2L5Yuay1YhSkC3iOsHGZx8aJ5fuxgySdPSQvAzNkbz4xJHXR109D3sGNwEzeI3Ig&usqp=CAU' className='h-[320px] w-[320px]'/>
                      <h1>Buckle Handbag</h1>
                      <p>22.00$</p>
                   </div>
               </div>
   
               {/* ............................Image 4th Row..................... */}
               <div className='md:flex md:flex-1/2 justify-start gap-30'>
                   <div className='flex flex-col items-center px-4'>
                      <img src='https://m.media-amazon.com/images/I/61InTmDDd5L._AC_SY500_.jpg' className='h-[320px] w-[320px]'/>
                      <h1>Buckle Handbag</h1>
                      <p>22.00$</p>
                   </div>
                   <div className='flex flex-col items-center'>
                      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-aw8TO7k7bGzInIdOKv1ai_uFaKFboVYXv4WSO2QIREhuFkY-3ApTJ7MOF5V2aUG6YT8&usqp=CAU' className='h-[320px] w-[320px]'/>
                      <h1>Buckle Handbag</h1>
                      <p>22.00$</p>
                      </div>
                   <div className='flex flex-col items-center pb-30'>
                      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIPxIihnYmQyW3hpc-3etp6WLzCg2RX5S-qpJ3lum5OXJInsH_z5vMQVqYa2FnBcaDm6Y&usqp=CAU' className='h-[320px] w-[320px]'/>
                      <h1>Buckle Handbag</h1>
                      <p>22.00$</p>
                   </div>
               </div>
            </div>
        </div>
    </div>
  )
}

export default ShopPurse1