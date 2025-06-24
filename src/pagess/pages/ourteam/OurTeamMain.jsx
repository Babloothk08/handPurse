import React from 'react'

function OurTeamMain() {
  return (
    <div className='relative w-full h-full pt-10 py-20'>
        <div className='flex flex-col  items-center text-center'>
            <div className='py-10'>
                <h1 className='text-6xl font-semibold'>Our Team</h1>
            </div>

            <div className='flex flex-col gap-12 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 2xl:grid 2xl:grid-cols-4 xl:grid xl:grid-cols-4 px-10'>
                <div>
                    <img src='https://i.pinimg.com/236x/27/d7/9b/27d79b35cab419e95a0c05f990f13d9f.jpg'alt='images' className='bg-center bg-cover bg-no-repeat h-100 w-100' />
                    <h2 className='text-3xl font-semibold'>Ranbir Kapoor</h2>
                </div>

                <div>
                    <img src='https://images1.dnaindia.com/images/DNA-EN/900x1600/2024/4/11/1712820321334_2.webp'alt='images' className='bg-center bg-cover bg-no-repeat  h-100 w-100'/>
                    <h2 className='text-3xl font-semibold'>Sunil Setty</h2>
                </div>

                <div>
                    <img src='https://www.yovizag.com/wp-content/uploads/2022/05/act_WEB-Recovered-Recovered.jpg'alt='images' className='bg-center bg-cover bg-no-repeat  h-100 w-100'/>
                    <h2 className='text-3xl font-semibold'>Ajay Devgan</h2>
                </div>

                <div>
                    <img src='https://www.bolnews.com/wp-content/uploads/2023/12/desktop-wallpaper-akshay-kumar-pics-akshay-kumar-full.jpg'alt='images' className='bg-center bg-cover bg-no-repeat  h-100 w-100'/>
                    <h2 className='text-3xl font-semibold'>Akshay Kumar</h2>
                </div>

                <div>
                    <img src='https://cf-img-a-in.tosshub.com/sites/visualstory/wp/2025/03/Hrithik_Roshan_promoting_Mohenjo_DaroITG-1743155339983.jpg?size=*:900'alt='images' className='bg-center bg-cover bg-no-repeat  h-100 w-100'/>
                    <h2 className='text-3xl font-semibold'>Hrithik Roshan</h2>
                </div>

                <div>
                    <img src='https://im.indiatimes.in/content/2023/Feb/000_336Z3ZJ_63edeef584a78.jpg?w=1200&h=900&cc=1&webp=1&q=75'alt='images' className='bg-center bg-cover bg-no-repeat  h-100 w-100'/>
                    <h2 className='text-3xl font-semibold'>Shahid Kapoor</h2>
                </div>

                <div>
                    <img src='https://www.tribuneindia.com/sortd-service/imaginary/v22-01/jpg/large/high?url=dGhldHJpYnVuZS1zb3J0ZC1wcm8tcHJvZC1zb3J0ZC9tZWRpYTViNzllODIwLTRlNzktMTFlZi1hZjA3LTQzNGZmN2YyMTQ4MS5qcGc='alt='images' className='bg-center bg-cover bg-no-repeat  h-100 w-100'/>
                    <h2 className='text-3xl font-semibold'>John Abraham</h2>
                </div>

                <div>
                    <img src='https://i.cdn.newsbytesapp.com/images/l59120250521175342.jpeg'alt='images' className='bg-center bg-cover bg-no-repeat  h-100 w-100'/>
                    <h2 className='text-3xl font-semibold'>Sunny Deol</h2>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OurTeamMain