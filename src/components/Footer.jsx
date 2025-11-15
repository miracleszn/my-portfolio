import React from 'react'


const Footer = () => {
  return (
    <footer className='h-70 mt-16 px-2 pt-6 flex flex-col justify-evenly text-neutral-800 md:h-68 md:pt-12 md:px-8 lg:px-32 lg:h-88  dark:text-white'>
      <div className='flex flex-wrap gap-3 md:gap-0 md:flex-nowrap md:justify-between  md:items-center'>
        <div>
          <h1 className='text-2xl font-logo md:text-3xl lg:text-5xl'>MiracleCodes</h1>
          <p className='font-poppins textarea-sm md:textarea-md lg:text-[16px]'>Crafting clean, scalable web & mobile apps.</p>
        </div>
        <ul className='w-96 font-poppins md:text-center textarea-sm md:textarea-md lg:text-[16px]'>
          <li><a href="#about-section">About</a></li>
          <li><a href="#project-section">Projects</a></li>
          <li><a href="https://cal.com/miraclecodes">Schedule a Meeting</a></li>
        </ul>
        <div className='w-[400px] font-poppins textarea-sm md:textarea-md lg:text-[16px]'>
          <p>Open to freelance & remote collaborations. Let’s build something cool → 📧 
            <a className='text-blue-600' href="mailto:miraclesznofficial@gmail.com?subject=Hello%2C%20I'm%20..." target='_blank'>miraclesznofficial@gmail.com 
              <i class="fa-solid fa-arrow-right -rotate-45 text-sm"></i>
            </a>
          </p>
        </div>
      </div>
      <div>
        <hr className='text-[#8D8B83] w-[88%] justify-self-center md:w-full'/>
      </div>
      <ul className='flex justify-center gap-2.5 font-poppins textarea-sm md:textarea-md lg:text-[16px]'>
        <li><a href="https://www.linkedin.com/in/miracleszn/" target='_blank'>Linkedln</a></li>
        <li>•</li>
        <li><a href="https://x.com/miraclecodes" target='_blank'>X (formerly Twitter)</a></li>
        <li>•</li>
        <li><a href="#">Instagram</a></li>
        <li>•</li>
        <li><a href="https://github.com/miracleszn" target='_blank'>GitHub</a></li>
      </ul>
      <div className='flex font-poppins justify-center textarea-sm md:textarea-md lg:text-[16px]'>
        <p>© 2025 MiracleCodes</p>
      </div>

    </footer>
  )
}

export default Footer