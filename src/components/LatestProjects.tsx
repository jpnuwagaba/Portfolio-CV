import React from 'react'
import Project from './Project'

const LatestProjects = () => {
  return (
    <div className='mt-6'>
      <div className="font-bold text-xl">Latest Projects</div>
      <div className='py-6'>
        <div className='flex flex-col lg:flex-row gap-3'>
          <Project
            name={'Modern Website'}
            image={'scapes-logo.png'}
            description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat repudiandae vero, doloribus officia corporis accusamus id beatae nihil fuga suscipit.'}
            link={''}
            linkName={'Scapes and Surveys Asscoiates'}
          />
          <Project
            name={'Utility Mapping'}
            image={'kpi-logo.png'}
            description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat repudiandae vero, doloribus officia corporis accusamus id beatae nihil fuga suscipit.'}
            link={''}
            linkName={'Spotlight Kampala - Youth Mappers'}
          />
        </div>
      </div>
    </div>
  )
}

export default LatestProjects