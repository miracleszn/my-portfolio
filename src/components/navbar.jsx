import { Switch, Button } from '@headlessui/react'
import DarkMode from './darkMode'
// import { useState } from 'react'

const Navbar = () => {

    // const [ theme, setTheme ] = useState('');

  return (
    <nav className='h-16 px-2 md:px-8 lg:px-32 flex items-center justify-between bg-[rgba(255,255,255,0.032)] rounded-b-2xl backdrop-blur-sm shadow-lg dark:nav-shadow sticky top-0 z-50'>

        <h1 className='text-2xl md:text-3xl font-bold md:font-medium text-neutral-800 dark:text-white'>Portfolio</h1>

        <div className='flex items-center gap-3'>
          <Button onClick={() => window.location.href = "#project-section"} className="hidden md:block bg-neutral-800 font-poppins px-6 py-3 rounded-2xl  text-white data-active:bg-[#8D8B83] data-hover:bg-neutral-700">
            Projects
          </Button>
          
          <DarkMode/>

          <a href="https://github.com/miracleszn" target='_blank'><i className="fa-brands fa-github text-[35px] text-neutral-800 dark:text-white"></i></a>
        </div>
        {/* <Switch
            checked={enabled}
            onChange={setEnabled}
            className="group inline-flex h-[45px] w-[70px] items-center rounded-full bg-gray-200 transition data-checked:bg-blue-600"
            >
            <span className="size-9 translate-x-1 rounded-full bg-white transition group-data-checked:translate-x-8" />
        </Switch> */}
    </nav>
  )
}

export default Navbar