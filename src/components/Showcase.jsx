import ProjectCarousel from './project_slider'


const Showcase = () => {
  return (
    <section id='project-section' className='px-2 md:px-8 lg:px-32'>
      <div className='mb-2.5 text-neutral-800 dark:text-white'>
        <h2 className='text-3xl font-lufga'>Projects</h2>
        <p className='font-poppins font-light text-[#8D8B83] text-lg'>Catalog of Recent Projects</p>
      </div>
      <div className='min-h-max'>
        <ProjectCarousel />
      </div>
    </section>
  )
}

export default Showcase