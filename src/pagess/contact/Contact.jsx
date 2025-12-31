import React from 'react'
import DesignBag from '../../component/design/DesignBag'
import Contact1 from './Contact1'
import ContactMap from './ContactMap'
import Contact2 from './Contact2'

function Contact() {
  return (
    <div className='mt-15'>
      <Contact1/>
      <Contact2/>
      <ContactMap/>
      <DesignBag/>
    </div>
  )
}

export default Contact