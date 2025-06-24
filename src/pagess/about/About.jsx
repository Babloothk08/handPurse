import React from 'react'
import Footer from '../../component/footer/Footer'
import Fashion from '../../component/fashion/Fashion'
import AboutContent from './AboutContent'
import AboutContent1 from './AboutContent1'
import AboutMsg from './AboutMsg'
import AboutQuote from './AboutQuote'
import DesignBag from '../../component/design/DesignBag'

function About() {
  return (
    <div>
        <AboutContent/>
        <AboutContent1/>
        <AboutMsg/>
        <AboutQuote/>
        <DesignBag/>
        {/* <Fashion/> */}
    </div>

  )
}

export default About