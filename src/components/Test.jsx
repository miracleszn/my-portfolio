import React from 'react'

const Test = ({ path, html, css, javaScript, react, tailwind, projectLink}) => {

  const icons = {
    html : "devicon-html5-plain",
    css : "devicon-css3-plain",
    javaScript : "devicon-javascript-plain",
    react : "devicon-react-original",
    tailwind : "devicon-tailwindcss-original"
  }

  return (
    // <div className='w-full overflow-hidden'>
        <div className='h-64 relative rounded-3xl w-full md:h-80 md:w-xl overflow-hidden'>
            <img className='h-full w-full object-cover' src={path} alt="" />
            <div className='absolute content-center text-center h-18 w-18 right-0 top-0 rounded-bl-3xl bg-white dark:bg-[#1A1A18] before:content-[" "] before:absolute before:w-6 before:h-6 before:bg-[#CCB877] before:top-0 before:-left-6 before:rounded-tr-3xl before:shadow-[4px_-6px_1px_3px_#ffffff] dark:before:shadow-[#1A1A18]
            after:content-[" "] after:absolute after:w-6 after:h-6 after:bg-[#CCB877] after:-bottom-6 after:right-0 after:rounded-tr-3xl after:shadow-[4px_-6px_1px_3px_#ffffff] dark:after:shadow-[#1A1A18] '>
                <button onClick={() => window.open(`${projectLink}`, "_blank")} className='h-14 w-14 rounded-full bg-[#1A1A18] text-white dark:bg-white dark:text-[#1A1A18] text-2xl -rotate-45'><i class="fa-solid fa-arrow-right"></i></button>
            </div>
            <div className='h-full w-10  md:w-14 absolute left-3 md:left-4 top-0 my-auto content-center'>
              <div className='h-[80%] rounded-xl text-3xl md:text-4xl flex flex-col items-center py-4 gap-2 text-neutral-800 bg-[#ffffff41] transition-all duration-300 hover:shadow-lg'>
                {html && <i className={icons.html}></i>}
                {css && <i className={icons.css}></i>}
                {javaScript && <i className={icons.javaScript}></i>}
                {react && <i className={icons.react}></i>}
                {tailwind && <i className={icons.tailwind}></i>}
              </div>
            </div>
        </div>
        //  <div className='my-32 h-80 border border-amber-50 w-xl'></div>
        // <div className='my-32 h-80 border border-amber-50 w-xl'></div> 
    //  </div>
  )
}

export default Test