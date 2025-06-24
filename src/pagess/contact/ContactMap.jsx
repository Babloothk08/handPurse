import React from 'react'

function ContactMap() {
  return (
    <div className='relative h-full  '>
        <iframe
         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6794.096534695673!2d76.39598604295058!3d31.632528796651055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391b2a7b793adcfd%3A0x5e65f5500e37035e!2sKashmir%2C%20Himachal%20Pradesh%20177006!5e0!3m2!1sen!2sin!4v1750076158077!5m2!1sen!2sin" 
         className='w-screen'
        
         height="450" 
         style={{border:0 }}
         allowfullscreen="" 
         loading="lazy" 
         referrerpolicy="no-referrer-when-downgrade">
         </iframe>



        
    </div>
  )
}

export default ContactMap