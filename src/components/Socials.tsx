import React from 'react'
import Social from './Social'
import {FaLinkedinIn, FaTwitter, FaGithub} from 'react-icons/fa'
import {SiGmail} from 'react-icons/si'

const Socials = () => {
  return (
    <div className='py-3'>
      {/* <div className="text-sm text-gray-700 mb-3">Socials</div> */}
      <div className='flex flex-row gap-6 bg-gray-100 px-5 py-3 rounded-full'>
        <Social icon={<FaLinkedinIn size={'1.2rem'} color='#0072b1'/>} socialName={'LinkedIn'} socialLinkName={'JOHN PETER NUWAGABA'} socialLink={'https://www.linkedin.com/in/john-peter-nuwagaba-39a2a11b9/'}/>
        <Social icon={<SiGmail size={'1.2rem'}  color='#DB4437'/>} socialName={'Email'} socialLinkName={'jpnuwagaba1@gmail.com'} socialLink={'mailto:jpnuwagaba1@gmail.com'}/>
        <Social icon={<FaTwitter size={'1.2rem'}  color='#00acee'/>} socialName={'Twitter'} socialLinkName={'@jpnuwagaba'} socialLink={'https://twitter.com/jpnuwagaba'}/>
        <Social icon={<FaGithub size={'1.2rem'}  color='#171515'/>} socialName={'GitHub'} socialLinkName={'John Peter Nuwagaba'} socialLink={'https://github.com/jpnuwagaba'}/>
      </div>
    </div>
  )
}

export default Socials