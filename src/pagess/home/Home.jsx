import React from 'react'
import Navbar from '../../component/navbar/Navbar'
import Nav from '../../component/nav/Nav'
import Hero from '../../component/hero/Hero'
import Bag1 from '../../component/bag1/Bag1'
import BrandBags from '../../component/brandBag/BrandBags'
import Fashion from '../../component/fashion/Fashion'
import Brandbags1 from '../../component/brandBags1/Brandbags1'
import DesignBag from '../../component/design/DesignBag'
import Footer from '../../component/footer/Footer'

function Home() {
  return (
    <div>
        {/* <Nav/> */}
        <Navbar/>
        <Hero/>
        <Bag1/>
        <BrandBags/>
        <Fashion/>
        <Brandbags1/>
        <DesignBag/>
        <Footer/>
    </div>
  )
}

export default Home