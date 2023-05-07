import React from 'react'
import Social from './Social'
import {BsPhone} from 'react-icons/bs'
import {IoLocationSharp} from 'react-icons/io5'

const BioData = () => {
  return (
    <div className='py-3'>
      <div className="text-sm text-gray-700 mb-3">Bio Data</div>
      <div className='flex flex-col gap-6'>
        <Social icon={<BsPhone />} socialName={'Telephone'} socialLink={''} socialLinkName={'+256 781 147096 / +256 700 670 395'}/>
        <Social icon={<IoLocationSharp />} socialName={'City'} socialLink={''} socialLinkName={'Kampala, Uganda'}/>
      </div>
    </div>
  )
}

export default BioData