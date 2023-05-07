import React from 'react'

interface props {
  category: string,
  categoryIcon: JSX.Element,
}

const SkillCategory: React.FC<props> = ({category, categoryIcon}) => {
  return (
    <div>
      <div className="flex gap-3 items-center">
        <div className='bg-gray-100 rounded-full p-2 text-lavender'>{categoryIcon}</div>
        <div className='font-bold text-xl'>{category}</div>
      </div>
    </div>
  )
}

export default SkillCategory