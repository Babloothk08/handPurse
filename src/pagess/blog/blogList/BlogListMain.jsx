// import React from 'react'
// import { IoMdPerson } from "react-icons/io";
// import { SlCalender } from "react-icons/sl";

// // Dummy data for posts
// const posts = [
//   {
//     id: 1,
//     title: "Stylish Handbags That Keep Up with Your Best Busy Lifestyle For Easy",
//     img: "https://wp.dreamitsolution.net/totes/wp-content/uploads/2024/12/blog1.jpg",
//     date: "December 2, 2024",
//   },
//   {
//     id: 2,
//     title: "Handbags for Everyday Fashion & Comfort",
//     img: "https://s.alicdn.com/@sc04/kf/Hab3b0d564f6747ee966a2d5db375d5bdY.jpg_720x720q50.jpg",
//     date: "December 3, 2024",
//   },
//   {
//     id: 3,
//     title: "Trendy Bags You Need This Season",
//     img: "https://m.media-amazon.com/images/I/51syIdlCFFL._AC_SY350_.jpg",
//     date: "December 4, 2024",
//   },
//   {
//     id: 4,
//     title: "Elegant Styles for Professional Women",
//     img: "https://www.shutterstock.com/image-photo/elegant-young-woman-looking-her-260nw-2304208171.jpg",
//     date: "December 5, 2024",
//   },
//   {
//     id: 5,
//     title: "Affordable Yet Stylish Bags",
//     img: "https://images.meesho.com/images/products/229579692/u4wsr_512.webp",
//     date: "December 6, 2024",
//   },
//   {
//     id: 6,
//     title: "Designer Bags for Special Occasions",
//     img: "https://www.shutterstock.com/image-photo/high-fashion-clothing-beautiful-sexy-260nw-511870498.jpg",
//     date: "December 7, 2024",
//   },
//   {
//     id: 7,
//     title: "Casual Bags for Daily Use",
//     img: "https://img.kwcdn.com/product/open/a978abdea19e4e408f85d9cd8b41cae6-goods.jpeg",
//     date: "December 8, 2024",
//   },
//   {
//     id: 8,
//     title: "Leather Bags That Last Forever",
//     img: "https://passionleather.com/cdn/shop/products/81reG6rNnwL._AC_UL1500_1500x1500_crop_center@2x.jpg",
//     date: "December 9, 2024",
//   },
//   {
//     id: 9,
//     title: "Handbags That Match Your Personality",
//     img: "https://media.istockphoto.com/id/500157629/photo/shes-packing-a-purse-and-a-smile.jpg?s=612x612&w=0&k=20&c=KeQyfzMytl0GPcXBHz4SmxQ6p5CxRsHdUT4gtpUtxM4=",
//     date: "December 10, 2024",
//   },
// ];

// function BlogListMain() {
//   return (
//     <div className="relative w-full h-full pt-10 px-5 md:px-15">
//       {/* Grid Layout */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {posts.map((post) => (
//           <div
//             key={post.id}
//             className="flex flex-col shadow-lg rounded-2xl overflow-hidden bg-white hover:shadow-2xl transition duration-300"
//           >
//             {/* Image */}
//             <img
//               src={post.img}
//               alt={post.title}
//               className="h-64 w-full object-cover"
//             />

//             {/* Meta Info */}
//             <div className="flex flex-row justify-between px-5 py-3 text-gray-600 text-sm">
//               <div className="flex flex-row gap-2 items-center">
//                 <IoMdPerson className="text-lg" />
//                 <span>By Quotes</span>
//               </div>
//               <div className="flex flex-row gap-2 items-center">
//                 <SlCalender className="text-lg" />
//                 <span>{post.date}</span>
//               </div>
//             </div>

//             {/* Content */}
//             <div className="flex flex-col gap-4 p-5">
//               <h1 className="text-xl md:text-2xl font-semibold line-clamp-2">
//                 {post.title}
//               </h1>
//               <p className="text-gray-700 text-sm">
//                 Whether you're looking for a chic tote to elevate your work attire, or a sleek crossbody for everyday ease.
//               </p>
//               <button className="px-5 py-2 bg-[#7A7571] text-white font-semibold rounded-lg hover:bg-[#5e5956] transition">
//                 Read More
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default BlogListMain




import React from 'react'
import { IoMdPerson } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import { CiSearch } from "react-icons/ci";

function BlogListMain() {
  return (
    <div className='relative w-full h-full pt-10 md:mx-15'>
        <div className='flex flex-row max-sm:flex-col'>
            {/* .............................1st Part......................... */}
            <div className=' flex flex-col  shadow-lg md:h-[600px] md:w-[500px]'>
                    <div className=' pt-10 max-w-1200 max-md:h-[400px] max-md:w-450px'>
                        <img src="https://wp.dreamitsolution.net/totes/wp-content/uploads/2024/12/blog1.jpg" alt="purseImages"
                        className='bg-cover bg-center  h-[300px] w-full
                                       md:h-[200px] md:w-[410px]'/>
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
                    </div>
                
                    <div className='flex flex-col gap-6 py-2 items-start md:w-[450px] px-5'>
                        <h1 className='text-3xl max-md:text-3xl font-semibold'>Stylish Handbags That Keep Up with Your Best Busy Lifestyle For Easy</h1>
                        <p className=''>Whether you're looking for a chic tote to elevate yourwork attire, a sleek crossbody .
                        </p>
                        <div className=' flex h-12 w-35  text-center justify-center items-center bg-[#7A7571] text-white font-bold'>
                            <button>Read More</button>
                        </div>
                    </div>
            </div>
            {/* .............................2nd Part......................... */}
            <div className=' flex flex-col shadow-4xl md:h-[600px] md:w-[500px]'>
                    <div className=' pt-10 max-w-1200 max-md:h-[400px] max-md:w-450px '>
                        <img src="https://s.alicdn.com/@sc04/kf/Hab3b0d564f6747ee966a2d5db375d5bdY.jpg_720x720q50.jpg" alt="purseImages"
                        className='bg-cover bg-center  h-[300px] w-full
                                       md:h-[200px] md:w-[410px]'/>
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
                    </div>
                
                    <div className='flex flex-col gap-6 py-2 items-start md:w-[450px] px-5'>
                        <h1 className='text-3xl max-md:text-3xl font-semibold'>Stylish Handbags That Keep Up with Your Best Busy Lifestyle For Easy</h1>
                        <p className=''>Whether you're looking for a chic tote to elevate yourwork attire, a sleek crossbody .
                        </p>
                        <div className=' flex h-12 w-35  text-center justify-center items-center bg-[#7A7571] text-white font-bold'>
                            <button>Read More</button>
                        </div>
                    </div>
            </div>
            {/* .............................3rd Part......................... */}
            <div className=' flex flex-col shadow-4xl md:h-[600px] md:w-[500px]'>
                    <div className=' pt-10 max-w-1200 max-md:h-[400px] max-md:w-450px'>
                        <img src="https://m.media-amazon.com/images/I/51syIdlCFFL._AC_SY350_.jpg" alt="purseImages"
                        className='bg-cover bg-center  h-[300px] w-full
                                       md:h-[200px] md:w-[410px]'/>
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
                    </div>
                
                    <div className='flex flex-col gap-6 py-2 items-start md:w-[450px] px-5'>
                        <h1 className='text-3xl max-md:text-3xl  font-semibold'>Stylish Handbags That Keep Up with Your Best Busy Lifestyle For Easy</h1>
                        <p className=''>Whether you're looking for a chic tote to elevate yourwork attire, a sleek crossbody.   
                        </p>
                        <div className=' flex h-12 w-35  text-center justify-center items-center bg-[#7A7571] text-white font-bold'>
                            <button>Read More</button>
                        </div>
                    </div>
            </div>
        </div>
        <div className='flex flex-row max-sm:flex-col'>
            {/* .............................1st Part......................... */}
            <div className=' flex flex-col  shadow-lg md:h-[600px] md:w-[500px]'>
                    <div className=' pt-10 max-w-1200 max-md:h-[400px] max-md:w-450px'>
                        <img src="https://www.shutterstock.com/image-photo/elegant-young-woman-looking-her-260nw-2304208171.jpg" alt="purseImages"
                        className='bg-cover bg-center  h-[300px] w-full
                                       md:h-[200px] md:w-[410px]'/>
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
                    </div>
                
                    <div className='flex flex-col gap-6 py-2 items-start md:w-[450px] px-5'>
                        <h1 className='text-3xl max-md:text-3xl font-semibold'>Stylish Handbags That Keep Up with Your Best Busy Lifestyle For Easy</h1>
                        <p className=''>Whether you're looking for a chic tote to elevate yourwork attire, a sleek crossbody .
                        </p>
                        <div className=' flex h-12 w-35  text-center justify-center items-center bg-[#7A7571] text-white font-bold'>
                            <button>Read More</button>
                        </div>
                    </div>
            </div>
            {/* .............................2nd Part......................... */}
            <div className=' flex flex-col shadow-4xl md:h-[600px] md:w-[500px]'>
                    <div className=' pt-10 max-w-1200 max-md:h-[400px] max-md:w-450px '>
                        <img src="https://images.meesho.com/images/products/229579692/u4wsr_512.webp" alt="purseImages"
                        className='bg-cover bg-center  h-[300px] w-full
                                       md:h-[200px] md:w-[410px]'/>
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
                    </div>
                
                    <div className='flex flex-col gap-6 py-2 items-start md:w-[450px] px-5'>
                        <h1 className='text-3xl max-md:text-3xl font-semibold'>Stylish Handbags That Keep Up with Your Best Busy Lifestyle For Easy</h1>
                        <p className=''>Whether you're looking for a chic tote to elevate yourwork attire, a sleek crossbody .
                        </p>
                        <div className=' flex h-12 w-35  text-center justify-center items-center bg-[#7A7571] text-white font-bold'>
                            <button>Read More</button>
                        </div>
                    </div>
            </div>
            {/* .............................3rd Part......................... */}
            <div className=' flex flex-col shadow-4xl md:h-[600px] md:w-[500px]'>
                    <div className=' pt-10 max-w-1200 max-md:h-[400px] max-md:w-450px'>
                        <img src="https://www.shutterstock.com/image-photo/high-fashion-clothing-beautiful-sexy-260nw-511870498.jpg" alt="purseImages"
                        className='bg-cover bg-center  h-[300px] w-full
                                       md:h-[200px] md:w-[410px]'/>
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
                    </div>
                
                    <div className='flex flex-col gap-6 py-2 items-start md:w-[450px] px-5'>
                        <h1 className='text-3xl max-md:text-3xl  font-semibold'>Stylish Handbags That Keep Up with Your Best Busy Lifestyle For Easy</h1>
                        <p className=''>Whether you're looking for a chic tote to elevate yourwork attire, a sleek crossbody.   
                        </p>
                        <div className=' flex h-12 w-35  text-center justify-center items-center bg-[#7A7571] text-white font-bold'>
                            <button>Read More</button>
                        </div>
                    </div>
            </div>
        </div>
        <div className='flex flex-row max-sm:flex-col'>
            {/* .............................1st Part......................... */}
            <div className=' flex flex-col  shadow-lg md:h-[600px] md:w-[500px]'>
                    <div className=' pt-10 max-w-1200 max-md:h-[400px] max-md:w-450px'>
                        <img src="https://img.kwcdn.com/product/open/a978abdea19e4e408f85d9cd8b41cae6-goods.jpeg"
                        className='bg-cover bg-center  h-[300px] w-full
                                       md:h-[200px] md:w-[410px]'/>
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
                    </div>
                
                    <div className='flex flex-col gap-6 py-2 items-start md:w-[450px] px-5'>
                        <h1 className='text-3xl max-md:text-3xl font-semibold'>Stylish Handbags That Keep Up with Your Best Busy Lifestyle For Easy</h1>
                        <p className=''>Whether you're looking for a chic tote to elevate yourwork attire, a sleek crossbody .
                        </p>
                        <div className=' flex h-12 w-35  text-center justify-center items-center bg-[#7A7571] text-white font-bold'>
                            <button>Read More</button>
                        </div>
                    </div>
            </div>
            {/* .............................2nd Part......................... */}
            <div className=' flex flex-col shadow-4xl md:h-[600px] md:w-[500px]'>
                    <div className=' pt-10 max-w-1200 max-md:h-[400px] max-md:w-450px '>
                        <img src="https://passionleather.com/cdn/shop/products/81reG6rNnwL._AC_UL1500_1500x1500_crop_center@2x.jpg" alt="purseImages"
                        className='bg-cover bg-center  h-[300px] w-full
                                       md:h-[200px] md:w-[410px]'/>
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
                    </div>
                
                    <div className='flex flex-col gap-6 py-2 items-start md:w-[450px] px-5'>
                        <h1 className='text-3xl max-md:text-3xl font-semibold'>Stylish Handbags That Keep Up with Your Best Busy Lifestyle For Easy</h1>
                        <p className=''>Whether you're looking for a chic tote to elevate yourwork attire, a sleek crossbody .
                        </p>
                        <div className=' flex h-12 w-35  text-center justify-center items-center bg-[#7A7571] text-white font-bold'>
                            <button>Read More</button>
                        </div>
                    </div>
            </div>
            {/* .............................3rd Part......................... */}
            <div className=' flex flex-col shadow-4xl md:h-[600px] md:w-[500px]'>
                    <div className=' pt-10 max-w-1200 max-md:h-[400px] max-md:w-450px'>
                        <img src="https://media.istockphoto.com/id/500157629/photo/shes-packing-a-purse-and-a-smile.jpg?s=612x612&w=0&k=20&c=KeQyfzMytl0GPcXBHz4SmxQ6p5CxRsHdUT4gtpUtxM4=" alt="purseImages"
                        className='bg-cover bg-center  h-[300px] w-full
                                       md:h-[200px] md:w-[410px]'/>
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
                    </div>
                
                    <div className='flex flex-col gap-6 py-2 items-start md:w-[450px] px-5'>
                        <h1 className='text-3xl max-md:text-3xl  font-semibold'>Stylish Handbags That Keep Up with Your Best Busy Lifestyle For Easy</h1>
                        <p className=''>Whether you're looking for a chic tote to elevate yourwork attire, a sleek crossbody.   
                        </p>
                        <div className=' flex h-12 w-35  text-center justify-center items-center bg-[#7A7571] text-white font-bold'>
                            <button>Read More</button>
                        </div>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default BlogListMain