import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa6";
import { ImCross } from "react-icons/im";

function FaqMain1() {
    const[open, setOpen] = useState(false)
    const[item, setItem] = useState(false)
    const[change, setChange] = useState(false)
    const[first, setFirst] = useState(false)
    const[second, setSecond] = useState(false)
    

    let isOpen = () => {
        setOpen(!open)
    }
    let isitem = () => {
        setItem(!item)
    }
    let isChange = () => {
        setChange(!change)
    }
    let isFirst = () => {
        setFirst(!first)
    }
    let isSecond = () => {
        setSecond(!second)
    }
   
  return (
    <div className='relative h-full   bg-[#F8EFE8]'>
        <div className='grid md:grid-cols-1 lg:grid-cols-2 max-w-[1320px] mx-auto max-sm:mx-1'>
            <div className='max-w-screen py-5'>
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.8350858839417!2d77.22533537529033!3d28.664656175647213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfda004af6c5f%3A0x478a5ece4ee10da5!2sKashmiri%20Gate!5e0!3m2!1sen!2sin!4v1750225325925!5m2!1sen!2sin" 
                    width="475 max-w-md:700" 
                    height="450" 
                    style={{border:0 }} 
                    allowfullscreen="" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>

            
            <div className='py-5 flex flex-col gap-3'>
                <div className={open ? (`flex justify-between h-27 bg-yellow-200  px-2 py-2`):(`flex justify-between h-27 bg-white text-black px-2 py-2`)}>
                    <div className='flex flex-col gap-2'>
                        <h1 className={open ?(`text-3xl font-bold py-2 text-white  `):(`text-2xl font-semibold py-2`) }>How do you charge for your services?</h1>
                        <p className={open ? (`block text-black `):(`hidden`)}>Discover you question from underneath or present your inquiry the submit box. </p>
                        {/* {open &&(
                            <p className='block'>Discover you question from underneath or present your inquiry the submit box.</p>)
                        } */}
                    </div>
                    <div className={open ? (`p-2 mt-3.5 text-xl text-white cursor-pointer `):(`p-2 mt-3.5 text-xl cursor-pointer `)} onClick={isOpen}>{open ?(<ImCross/>): (<FaPlus/>)}</div>
                </div>

                {/* ...................2nd....................... */}
                <div className={item ? (`flex justify-between h-27 bg-yellow-200  px-2 py-2`):(`flex justify-between h-27 bg-white text-black px-2 py-2`)}>
                    <div className=''>
                        <h1 className={item ? (`text-3xl font-bold py-2 text-white`):(`text-2xl font-semibold py-2`)}>How do you charge for your services?</h1>
                        <p className={item ? (`block text-black`):(`hidden`)}>Discover you question from underneath or present your inquiry the submit box. Growing businesses need strong tax managient meet current and future tax liabilities</p>
                        {/* {item &&(
                            <p className='block'>Discover you question from underneath or present your inquiry the submit box.</p>)
                        } */}
                    </div>
                    <div className={item ? (`p-2 mt-3.5 text-xl text-white cursor-pointer `):(`p-2 mt-3.5 text-xl cursor-pointer `)}onClick={isitem}>{item ? <ImCross/> : <FaPlus/>}</div>
                </div>
                
                {/* ...................3rd....................... */}
                <div className={change ? (`flex justify-between h-27 bg-yellow-200  px-2 py-2`):(`flex justify-between h-27 bg-white text-black px-2 py-2`)}>
                    <div className=''>
                        <h1 className={change ? (`text-3xl font-bold py-2 text-white`):(`text-2xl font-semibold py-2`)}>How do you charge for your services?</h1>
                        <p className={change ? (`block text-black`):(`hidden`)}>Discover you question from underneath or present your inquiry the submit box. Growing businesses need strong tax managient meet current and future tax liabilities</p>
                        {/* {change &&(
                            <p className='block'>Discover you question from underneath or present your inquiry the submit box.</p>)
                        } */}
                    </div>
                    <div className={change ? (`p-2 mt-3.5 text-xl text-white cursor-pointer `):(`p-2 mt-3.5 text-xl cursor-pointer `)} onClick={isChange}>{change ? <ImCross/> : <FaPlus/>}</div>
                </div>

                {/* ...................4th....................... */}
                <div className={first ? (`flex justify-between h-27 bg-yellow-200  px-2 py-2`):(`flex justify-between h-27 bg-white text-black px-2 py-2`)}>
                    <div className=''>
                        <h1 className={first ? (`text-3xl font-bold py-2 text-white`):(`text-2xl font-semibold py-2`)}>How do you charge for your services?</h1>
                        <p className={first ? (`block text-black`):(`hidden`)}>Discover you question from underneath or present your inquiry the submit box. Growing businesses need strong tax managient meet current and future tax liabilities</p>
                        {/* {first &&(
                            <p className='block'>Discover you question from underneath or present your inquiry the submit box.</p>)
                        } */}
                    </div>
                    <div className={first ? (`p-2 mt-3.5 text-xl text-white cursor-pointer `):(`p-2 mt-3.5 text-xl cursor-pointer `)} onClick={isFirst}>{first ? <ImCross/>:<FaPlus/>}</div>
                </div>
 
                {/* ...................5th....................... */}
                <div className={second ? (`flex justify-between h-27 bg-yellow-200  px-2 py-2`):(`h-27 bg-white text-black flex justify-between px-2 py-2`)}>
                    <div className=''>
                        <h1 className={second ? (`text-3xl font-bold py-2 text-white`):(`text-2xl font-semibold py-2`)}>How do you charge for your services?</h1>
                        <p className={second ? (`block text-black`): (`hidden`)}>Discover you question from underneath or present your inquiry the submit box. Growing businesses need strong tax managient meet current and future tax liabilities</p>
                        {/* {second &&(
                            <p className='block'>Discover you question from underneath or present your inquiry the submit box.</p>)
                        } */}
                    </div>
                    <div className={second ? (`p-2 mt-3.5 text-xl text-white cursor-pointer `):(`p-2 mt-3.5 text-xl cursor-pointer `)} onClick={isSecond}>{second ? <ImCross/> : <FaPlus/>}</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FaqMain1