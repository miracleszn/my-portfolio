import React from 'react'

export default function SocialBar({ gapValue }) {
  return (
    <div className={`flex gap-${gapValue} bg-[#ccb877] h-11 w-max px-6 py-1 rounded-2xl`}>
        <img onClick={() => window.open("https://www.linkedin.com/in/miracleszn/", "_blank")} className='w-10' src="/icons/icons8-linkedin.svg" alt="" />
        
        <img onClick={() => window.open("https://x.com/miraclecodes", "_blank")} className='w-10' src="/icons/icons8-x.svg" alt="" />
        <img onClick={() => window.open("https://github.com/miracleszn", "_blank")} className='w-10' src="/icons/icons8-github.svg" alt="" />
        <img onClick={() => window.open("mailto:miraclesznofficial@gmail.com?subject=Hello%2C%20I'm%20...", "_blank")} className='w-10' src="/icons/icons8-gmail.svg" alt="" />
    </div>
  )
}
