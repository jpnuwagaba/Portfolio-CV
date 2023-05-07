import Link from 'next/link'
import React from 'react'

interface props {
  icon: JSX.Element,
  socialName: string,
  socialLink: string,
  socialLinkName: string,
}

const Social: React.FC<props> = ({ icon, socialName, socialLink, socialLinkName }) => {
  return (
    <div className='flex items-center gap-3 experience-timeline'>
      <Link href={socialLink} target={'_blank'} className=''>{icon}</Link>
      {/* <div>
        <div>
          <a href={socialLink} target={'_blank'} className="text-xs font-bold text-gray-700">{socialLinkName}</a>
        </div>
      </div> */}
    </div>
  )
}

export default Social