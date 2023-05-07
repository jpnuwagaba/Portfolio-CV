import React from 'react'
import LeftColumn from './LeftColumn'
import RightColumn from './RightColumn'

const Layout = () => {
  return (
    <div className='flex flex-col w-[95%] md:w-[75%] xl:w-[65%] mx-auto'>
      <div className=''>
        <LeftColumn />
      </div>
      <div className='p-6'>
        <RightColumn />
      </div>
    </div>
  )
}

export default Layout