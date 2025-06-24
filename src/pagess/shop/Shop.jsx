import React from 'react'
import DesignBag from '../../component/design/DesignBag'
import ShopPurse from './ShopPurse'
import ShopPurse1 from './ShopPurse1'
// import ShopPurseStk from './ShopPurseStk'

function Shop() {
  return (
    <div>
      <ShopPurse/>
      {/* <ShopPurseStk/> */}
      <ShopPurse1/>
      <DesignBag/>
    </div>
  )
}

export default Shop