import React from 'react'

interface props {
  name: string,
  image: string,
  description: string,
  link: string,
  linkName: string,
}

const Project: React.FC<props> = ({ name, image, description, link, linkName }) => {
  return (
    <div className='bg-gray-100 p-6 rounded-lg'>
      <div className="flex flex-col md:flex-row justify-between gap-6 mb-4">
        <div style={{
          background: `url(/assets/${image})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }} className="rounded-lg w-20 aspect-square h-20"></div>
        <div>
          <div className="font-bold mb-2 text-gray-700">{name}</div>
          <div className="text-gray-700 text-sm">{description}</div>
        </div>
      </div>
      <a href={link} className="text-vistaBlue text-sm font-bold">{linkName}</a>
    </div>
  )
}

export default Project