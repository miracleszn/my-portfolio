import React from 'react'

// import React from 'react'

const ProgressBar = ({ value, projectType }) => {
  return (
    <>
        <div className='flex justify-between'>
            <h4 className='font-poppins font-medium text-lg'>{projectType} Projects</h4>
            <h4 className='font-poppins font-medium text-lg'>{value}</h4>
        </div>
        <progress className="progress w-full bg-gray-400 text-neutral-800 dark:bg-none dark:text-white" value={value} max="50"></progress>
    </>
  )
}


const About = () => {
  return (
    <section id='about-section' className='px-2 md:px-8 lg:px-32 my-16'>
        <div className='flex flex-col gap-24 h-max text-neutral-800 md:gap-12 lg:h-96 lg:flex-row dark:text-white'>
            <div className='w-full  border rounded-xl bborder-neutral-800 dark:border-white p-4 transition-all duration-300 hover:bg-[#0000001a] lg:w-[50%] lg:h-max'>
                <h2 className='font-lufga mb-2.5 text-2xl lg:text-3xl'>Behind the Work</h2>
                <p className='font-poppins md:textarea-md md:leading-5.5 lg:leading-7 lg:textarea-lg lg:max-h-max'>As a passionate web and app developer, I specialize in crafting dynamic, user-centric digital experiences for businesses and startups. With a strong background in both front-end and back-end technologies, I bring creative solutions to life through clean code, innovative design, and performance optimization. My expertise spans modern frameworks such as React, Laravel, and Android, enabling me to build responsive websites and robust mobile applications. Driven by a commitment to continuous learning, I thrive on turning ideas into impactful products that delight users and drive results</p>
            </div>

            <div className='w-full bg-transparent rounded-xl p-4 transition-all duration-300 hover:bg-[#0000001a] lg:w-[50%]'>
                <h2 className='font-lufga mb-2.5 text-2xl lg:text-3xl'>Projects Stats</h2>
                <ProgressBar value={10} projectType={"Main"} />
                <ProgressBar value={30} projectType={"Side"} />
                <h2 className='font-lufga my-2.5 text-2xl lg:text-3xl'>Tech Stack</h2>
                {/* <p className='text-lg w-[77%]'>CSS • HTML • JavaScript • Laravel • PHP • TailwindCSS • React.js • Java </p> */}
                <div className='text-5xl md:text-[60px] flex flex-wrap gap-3'>
                    <i class="devicon-html5-plain colored"></i>
                    <i class="devicon-css3-plain colored"></i>
                    <i class="devicon-laravel-original colored"></i>
                    <i class="devicon-php-plain colored"></i>
                    <i class="devicon-tailwindcss-original colored"></i>
                    <i class="devicon-react-original colored"></i>
                    <i class="devicon-bootstrap-plain-wordmark colored"></i>
                    <i class="devicon-javascript-plain colored"></i>

                    <i class="devicon-android-plain-wordmark colored"></i>
                    <i class="devicon-java-plain-wordmark colored"></i>
          
          
          
          
                </div>
            </div>

        </div>
    </section>
  )
}

export default About