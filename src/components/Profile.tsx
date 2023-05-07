import React from 'react'
import Avatar from './Avatar'

const Profile = () => {
  return (
    <div className='flex justify-between items-center gap-3 md:gap-8 py-6'>
      <Avatar />
      <div>
        <div className="font-bold text-lg md:text-xl lg:text-2xl mt-2 text-vistaBlue">John Peter Nuwagaba</div>
        <div className="font-bold text-sm mt-1 mb-3 text-lavender">Land Surveyor / React Front-end Developer</div>
      </div>
    </div>
  )
}

export default Profile