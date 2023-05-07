import React from 'react'
import SkillCategory from './SkillCategory'
import { BiCodeAlt } from 'react-icons/bi'
import { FaRegMap } from 'react-icons/fa'
import Skill from './Skill'

const Skills = () => {
  return (
    <div className='mt-6 '>
      <div className="font-bold text-xl">Skills</div>
      <div className="grid grid-cols-1 gap-16 py-6">
        <div>
          <SkillCategory
            category='GIS & Land Surveying'
            categoryIcon={<FaRegMap size={'1.5em'} />}
          />
          <div className="flex flex-wrap gap-2 mt-6">
            <Skill skill={'Spatial Analysis'} />
            <Skill skill={'Remote Sensing'} />
            <Skill skill={'Cadastral Surveys'} />
            <Skill skill={'Topographic Surveys'} />
            <Skill skill={'Engineering Surveys'} />
          </div>
          <hr className='my-5' />
          <div className='flex flex-col md:flex-row gap-4 items-start md:items-center'>
            <div className='text-sm font-bold text-vistaBlue'>Tools:</div>
            <div className="flex flex-wrap gap-2">
              <div className="p-2 text-xs font-bold bg-gray-100 rounded-full">ArcGIS</div>
              <div className="p-2 text-xs font-bold bg-gray-100 rounded-full">QGIS</div>
              <div className="p-2 text-xs font-bold bg-gray-100 rounded-full">AutoCAD</div>
              <div className="p-2 text-xs font-bold bg-gray-100 rounded-full">Google Earth</div>
              <div className="p-2 text-xs font-bold bg-gray-100 rounded-full">Global Positioning Systems</div>
              <div className="p-2 text-xs font-bold bg-gray-100 rounded-full">Total Stations</div>
              <div className="p-2 text-xs font-bold bg-gray-100 rounded-full">Laser Scan Stations</div>
            </div>
          </div>
        </div>
        <div>
          <SkillCategory
            category='Development'
            categoryIcon={<BiCodeAlt size={'1.5em'} />}
          />
          <div className="flex flex-wrap gap-2 mt-6">
            <Skill skill={'HTML/CSS/JavaScript'} />
            <Skill skill={'React (NextJS)'} />
            <Skill skill={'Python'} />
            <Skill skill={'TailwindCSS'} />
            <Skill skill={'TypeScript'} />
          </div>
          <hr className='my-5' />
          <div className='flex flex-col md:flex-row gap-4 items-start md:items-center'>
            <div className='text-sm font-bold text-vistaBlue'>Tools:</div>
            <div className="flex flex-wrap gap-2">
              <div className="p-2 text-xs font-bold bg-gray-100 rounded-full">VSCode</div>
              <div className="p-2 text-xs font-bold bg-gray-100 rounded-full">GitHub</div>
              <div className="p-2 text-xs font-bold bg-gray-100 rounded-full">Anaconda</div>
            </div>
          </div>
        </div>
        <div>
          <SkillCategory
            category='Design'
            categoryIcon={<BiCodeAlt size={'1.5em'} />}
          />
          <div className="flex flex-wrap gap-2 mt-6">
            <Skill skill={'UI/UX Design'} />
            <Skill skill={'Graphic Design'} />
          </div>
          <hr className='my-5' />
          <div className='flex flex-col md:flex-row gap-4 items-start md:items-center'>
            <div className='text-sm font-bold text-vistaBlue'>Tools:</div>
            <div className="flex flex-wrap gap-2">
              <div className="p-2 text-xs font-bold bg-gray-100 rounded-full">Adobe Illustrator</div>
              <div className="p-2 text-xs font-bold bg-gray-100 rounded-full">Adobe XD</div>
              <div className="p-2 text-xs font-bold bg-gray-100 rounded-full">Figma</div>
              <div className="p-2 text-xs font-bold bg-gray-100 rounded-full">Canva</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills