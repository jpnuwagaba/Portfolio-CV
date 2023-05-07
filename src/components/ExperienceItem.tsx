import { IoLocationSharp } from 'react-icons/io5'
import React from 'react'

interface props {
  dates: string,
  company: string,
  companyLogo: string,
  jobTitle: string,
  location: string,
  description: string,
}

const ExperienceItem: React.FC<props> = ({ dates, company, companyLogo, jobTitle, description, location }) => {
  return (
    <div className=' p-6 bg-gray-100 rounded-lg'> 
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-12">
        <div className='w-full'>
          <div className="text-xs flex gap-2 mb-2"><span className='font-bold'>{dates}</span> <span className='text-gray-700'><IoLocationSharp /></span>  <span>{location}</span></div>
          <div className="flex items-center gap-6">
            <div className='rounded-xl w-12 h-12 aspect-square border' 
              style={{
                background: `url(/assets/${companyLogo})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
              }}
            />
            <div className='text-sm'>
              <div className="text-gray-700">{jobTitle}</div>
              <div className='font-bold'>{company}</div>
            </div>
          </div>
        </div>
        <div className='text-sm '>{description}</div>
      </div>
    </div>
  )
}

export default ExperienceItem