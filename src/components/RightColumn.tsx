import React from 'react'
import Experience from './Experience'
import LatestProjects from './LatestProjects'
import Skills from './Skills'

const RightColumn = () => {
  return (
    <div>
      <LatestProjects />
      <Experience />
      <Skills />
    </div>
  )
}

export default RightColumn