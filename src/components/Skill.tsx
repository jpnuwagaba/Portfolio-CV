import React from 'react'

interface props {
  skill: string
}

const Skill: React.FC<props> = ({skill}) => {
  return (
    <div className='bg-gray-100 p-3 rounded-lg font-bold text-vistaBlue'>
      {skill}
    </div>
  )
}

export default Skill