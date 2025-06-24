import React from 'react'
import Hero from '../../component/hero/Hero'
import Bag1 from '../../component/bag1/Bag1'
import BrandBags from '../../component/brandBag/BrandBags'
import Fashion from '../../component/fashion/Fashion'
import Brandbags1 from '../../component/brandBags1/Brandbags1'
import DesignBag from '../../component/design/DesignBag'
// import Default from '../../component/defaultChoice/Default'

function Home() {
  return (
    <div>
        <Hero/>
        <Bag1/>
        <BrandBags/>
        <Fashion/>
        <Brandbags1/>
        <DesignBag/>
        {/* <Default/> */}
    </div>
  )
}

export default Home