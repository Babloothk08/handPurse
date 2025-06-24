import React from 'react'
import { CiSearch } from "react-icons/ci";

function ShopPurseStk() {
  return (
    <div className='h-full w-[450px] ml-4 mt-24 relative '>
        <div className=' sticky bg-yellow-400 h-[500px] flex flex-col  content-center px-6 py-6 gap-14 '>
            <div className=' flex bg-white h-15 w-[400px] justify-between content-center items-center text-xl px-6'>
                <input type='text' placeholder='Search Here' className='w-[250px] h-[55px]   '></input>
                <CiSearch/>
            </div>
            <div className='bg-red-500'>
                <h1>Categories</h1>
                <p>Handbag</p>
            </div>
            <div>
                <h1>Filter by price</h1>
                <div>
                    <h3>Filter</h3>
                    <p>Price: 0$ — 50$</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ShopPurseStk