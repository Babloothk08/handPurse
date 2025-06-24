import React from 'react'

function ServiceMain() {
  return (
    <div  className='relative w-full h-full pt-10 py-20'>
        <div className='flex flex-col  items-center text-center'>
            <div>
                <h1 className='text-4xl font-semibold'>Our Services</h1>
            </div>

            <div className='flex flex-col  items-center text-center  py-10 gap-5
            md:grid md:grid-cols-2 2xl:grid 2xl:grid-cols-4 2xl:gap-5 xl:grid xl:grid-cols-4 xl:gap-2 lg:grid lg:grid-cols-4 lg:gap-1  '>
                <div className='h-[190px] w-[440px] flex flex-col justify-center items-center bg-[#f8EFE8] gap-2  xl:w-[350px] xl:h-[250px]2xl:gap-5 2xl:w-[350px] 2xl:h-[250px]'>
                    <img src='https://wp.dreamitsolution.net/totes/wp-content/uploads/2024/12/service1.png'alt='images' className='bg-center bg-cover bg-no-repeat ' />
                    <h2 className='text-3xl font-semibold'>Discount system</h2>
                </div>

                <div className='h-[190px] w-[440px] flex flex-col justify-center items-center bg-[#f8EFE8] gap-2 xl:w-[350px] xl:h-[250px]2xl:gap-5 2xl:w-[350px] 2xl:h-[250px]'>
                    <img src='https://wp.dreamitsolution.net/totes/wp-content/uploads/2024/12/service2.png'alt='images' className='bg-center bg-cover bg-no-repeat'/>
                    <h2 className='text-3xl font-semibold'>Best quality</h2>
                </div>

                <div className='h-[190px] w-[440px] flex flex-col justify-center items-center bg-[#f8EFE8] gap-2 xl:w-[350px] xl:h-[250px]2xl:gap-5 2xl:w-[350px] 2xl:h-[250px]'>
                    <img src='https://wp.dreamitsolution.net/totes/wp-content/uploads/2024/12/service3.png'alt='images' className='bg-center bg-cover bg-no-repeat'/>
                    <h2 className='text-3xl font-semibold'>Online shop</h2>
                </div>

                <div className='h-[190px] w-[440px] flex flex-col justify-center items-center bg-[#f8EFE8] gap-2 xl:w-[350px] xl:h-[250px]2xl:gap-5 2xl:w-[350px] 2xl:h-[250px]'>
                    <img src='https://wp.dreamitsolution.net/totes/wp-content/uploads/2024/12/service4.png'alt='images' className='bg-center bg-cover bg-no-repeat'/>
                    <h2 className='text-3xl font-semibold'>Public Service</h2>
                </div>

                <div className='h-[190px] w-[440px] flex flex-col justify-center items-center bg-[#f8EFE8] gap-2 xl:w-[350px] xl:h-[250px]2xl:gap-5 2xl:w-[350px] 2xl:h-[250px]'>
                    <img src='https://wp.dreamitsolution.net/totes/wp-content/uploads/2024/12/service5.png'alt='images' className='bg-center bg-cover bg-no-repeat'/>
                    <h2 className='text-3xl font-semibold'>Flexible payment</h2>
                </div>

                <div className='h-[190px] w-[440px] flex flex-col justify-center items-center bg-[#f8EFE8] gap-2 xl:w-[350px] xl:h-[250px]2xl:gap-5 2xl:w-[350px] 2xl:h-[250px]'>
                    <img src='https://wp.dreamitsolution.net/totes/wp-content/uploads/2024/12/service6.png'alt='images' className='bg-center bg-cover bg-no-repeat'/>
                    <h2 className='text-3xl font-semibold'>Product Return</h2>
                </div>

                <div className='h-[190px] w-[440px] flex flex-col justify-center items-center bg-[#f8EFE8] gap-2 xl:w-[350px] xl:h-[250px]2xl:gap-5 2xl:w-[350px] 2xl:h-[250px]'>
                    <img src='https://wp.dreamitsolution.net/totes/wp-content/uploads/2024/12/service7.png'alt='images' className='bg-center bg-cover bg-no-repeat'/>
                    <h2 className='text-3xl font-semibold'>Free Delivery</h2>
                </div>

                <div className='h-[190px] w-[440px] flex flex-col justify-center items-center bg-[#f8EFE8] gap-2 xl:gap-5 xl:w-[350px] xl:h-[250px]2xl:gap-5 2xl:w-[350px] 2xl:h-[250px]'>
                    <img src='https://wp.dreamitsolution.net/totes/wp-content/uploads/2024/12/service8.png'alt='images' className='bg-center bg-cover bg-no-repeat'/>
                    <h2 className='text-3xl font-semibold'>Public Service</h2>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ServiceMain