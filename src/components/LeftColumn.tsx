import React from 'react'
import BioData from './BioData'
import Profile from './Profile'
import Socials from './Socials'

const LeftColumn = () => {
  return (
    <div className='flex flex-col lg:flex-row justify-between items-center'>
      <Profile />
      {/* <BioData /> */}
      <Socials />
    </div>
  )
}

export default LeftColumn