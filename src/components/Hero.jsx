import React from 'react'
import { Button } from '@headlessui/react'
import SocialBar from './SocialBar'
import 'animate.css';

const Hero = () => {
  return (
    <section className='px-2 md:px-8 lg:px-32'>
        <div className='h-[550px] hidden justify-between items-center lg:flex'>
            <div className="hero-intro flex flex-col justify-center p-1 gap-2">
                <h1 className='font-lufga md:text-4xl lg:text-6xl text-[#ccb877] dark:text-[#F0F0EA]'>MiracleCodes</h1>
                <p className='text-[#8D8B83] font-poppins md:textarea-md lg:textarea-lg'>FullStack Web Dev | Andriod Dev</p>
                <SocialBar gapValue={1.5}/>
                <div className='flex gap-3'>
                    <Button onClick={() => window.open("https://drive.google.com/file/d/1arMBfMR5C9jl4BVVyYvHQ8otlUm1iXu8/view?usp=sharing", "_blank")} className="bg-neutral-800 font-poppins px-6 py-3 rounded-2xl md:textarea-md md:px-4  text-white data-active:bg-[#8D8B83] data-hover:bg-neutral-700">
                        Download CV
                    </Button>
                    <Button onClick={() => window.location.href = "https://cal.com/miraclecodes"} className="bg-neutral-800 font-poppins px-6 py-3 rounded-2xl md:textarea-md md:px-4 text-white data-active:bg-[#8D8B83] data-hover:bg-neutral-700">
                        Book Me
                    </Button>
                </div>
            </div>
            <div className=' md:w-[500px] lg:w-[700px] h-full content-center justify-items-center'>
                <div className="hero-image group md:w-[250px] md:h-[250px] lg:w-[370px] lg:h-[370px] border-8 border-[#ccb877] rounded-full relative z-3">
                    <div className='absolute overflow-hidden bg-amber-600 md:w-38 md:h-38 lg:w-48 lg:h-48  rounded-full border-5 border-[#ccb877] -left-22 -bottom-11 -z-1  transition-transform duration-1100 group-hover:-translate-y-70 '>
                        <img className='h-full w-full object-cover' src="/left-p.jpg" alt="" />
                    </div>
                    <div className='w-full h-full rounded-full overflow-hidden ring-4 ring-white dark:ring-[#1A1A18]'>
                        <img className='w-full h-full object-cover' src="/middle-p.jpg" alt="" />
                    </div>
                    <div className='absolute overflow-hidden bg-[#ccb877] md:w-38 md:h-38 lg:w-48 lg:h-48 rounded-full border-4 border-white dark:border-[#1A1A18] -right-22 -top-11 transition-transform duration-1100 group-hover:translate-y-70'>
                        <img className='h-full w-full object-cover' src="/right-p.jpg" alt="" />

                    </div>
                </div>
            </div>
        </div>

        {/* Mobile View */}

        <div className='h-[400px] mt-40 bg-[#ccb877] block rounded-4xl relative font-poppins pt-[150px] lg:hidden'>
            <div className='w-48 h-48 rounded-full absolute -top-[70px] left-0 right-0 mx-auto border-13 border-white dark:border-[#1A1A18] z-4
             before:absolute before:content-[" "] before:w-8 before:h-8 before:top-[57px] before:bg-[#ccb877] before:rounded-tr-4xl 
              before:-left-[45px] before:shadow-[7px_-8px_0px_5px_#ffffff] dark:before:shadow-[#1A1A18] 
              after:absolute after:content-[" "] after:w-8 after:h-8 after:top-[57px] after:bg-[#ccb877] after:rounded-tl-4xl 
              after:-right-[45px] after:shadow-[-7px_-8px_0px_5px_#ffffff] dark:after:shadow-[#1A1A18]'>
                <div className='h-full w-full rounded-full overflow-hidden'> 
                    <img className='w-full h-full object-cover' src="/middle-p.jpg" alt="" />
                </div>
            </div>
            <h4 className='font-lufga font-medium text-center text-2xl'>Miracle Codes</h4>
            <p className='text-[14px] mb-4 text-center'>FullStack Web Dev | Andriod Dev</p>
            <div className='justify-items-center mb-4'>
                <SocialBar gapValue={2.5}/>
            </div>
            <div className='h-max flex flex-col gap-2.5 items-center'>
                <Button onClick={() => window.open("https://drive.google.com/file/d/1arMBfMR5C9jl4BVVyYvHQ8otlUm1iXu8/view?usp=sharing", "_blank")} className="bg-neutral-800 h-11 w-36 font-poppins px-1 font-medium text-[16px] rounded-2xl  text-white data-active:bg-[#8D8B83] data-hover:bg-neutral-700">
                    Download CV
                </Button>
                <Button onClick={() => window.location.href = "https://cal.com/miraclecodes"} className="bg-neutral-800 h-11 w-36 font-poppins px-1 font-medium text-[16px] rounded-2xl text-white data-active:bg-[#8D8B83] data-hover:bg-neutral-700">
                    Book Me
                </Button>
            </div>

        </div>

    </section>
  )
}

export default Hero