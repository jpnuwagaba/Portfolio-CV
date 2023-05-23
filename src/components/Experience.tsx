import React from 'react'
import ExperienceItem from './ExperienceItem'

const Experience = () => {
  return (
    <div className='mt-6'>
      <div className="font-bold text-xl">Experience</div>
      <div className='py-6 grid gap-4'>
        <div>
          <ExperienceItem
            dates='Feb to May 2023'
            company='Spotlight Kampala - Youth Mappers'
            companyLogo='kpi-logo.png'
            jobTitle='Assistant Manager'
            location='Kampala'
            description='      Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis non ipsa repellendus quidem beatae. Incidunt earum sit officia asperiores assumenda atque inventore, saepe eaque? Obcaecati dolorem adipisci ad esse. Ipsum?
          '
          />
        </div>
        <div>
          <ExperienceItem
            dates='May to Sept 2022'
            company='Scapes & Surveys Associates'
            companyLogo='scapes-logo.png'
            jobTitle='Intern Land Surveyor'
            location='Kampala'
            description='      Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis non ipsa repellendus quidem beatae. Incidunt earum sit officia asperiores assumenda atque inventore, saepe eaque? Obcaecati dolorem adipisci ad esse. Ipsum?
          '
          />
        </div>
      </div>
    </div>
  )
}

export default Experience