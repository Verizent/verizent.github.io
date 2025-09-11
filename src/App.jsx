import ReactGitHubCalendar from 'react-github-calendar'

import MyPhoto from './Assets/Photo.png'
import NavWheel from './Components/NavWheel'
import Timeline from './Components/Timeline'
import technical_experience from './Components/TechnicalExperience'
import Education from './Components/Education'
import Navbar from './Components/Navbar'
import Awards from './Components/Awards'
import React from 'react'

export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      {/* Main Content */}
        <div className='fixed bottom-[30px] mb-0 z-20 mt-auto'>
          <Navbar />
        </div>

      <div className="max-w-2xl mx-auto px-[5%] lg:px-0 w-full">
        {/* Hero Section */}
        <section id="Hero" className="mb-[60px] py-auto h-screen flex flex-col justify-center my-auto align-middle items-center relative text-left w-full">
          <h2 className='text-2xl font-bold mb-3 text-left w-full'>Hi, I'm</h2>
          <h1 className='mb-[20px] text-4xl font-extrabold leading-tight text-left w-full'>Michael Richard Suryajaya.</h1>
          <div className="inline-flex w-full">
            <div className='block w-[65%] pr-8'>
              <p className="text-gray-600 text-base lg:text-lg text-left w-full">
                A CS student and software engineer focused on AI, cybersecurity, and robotics. I build reliable MERN web apps. Outside work: pop covers on piano/guitar, Valorant, and edtech non-profit collabs. Always open to building something cool or chatting about tech’s future.
              </p>
            </div>
            <img src={MyPhoto} alt="MyPhoto" className="w-[25%] max-w-[320px] ml-[2%] mx-auto flex h-auto align-middle items-center justify-center my-auto rounded-full object-cover hover:shadow-xl transition-shadow shadow-lg"/>
          </div>
        </section>

        <hr/>

        {/* About Section */}
        <section id="About" className='mt-[20px] text-xs lg:text-sm'>
          <h2 className='text-base font-bold'>About</h2>
          <p>
            W
          </p>
        </section>

        {/* Technical Experience Section */}
        <section id="TechExperience" className='mt-[20px] text-xs lg:text-sm'>
          <h2 className='text-base font-bold mb-2'>Technical Experience</h2>
          {technical_experience.map((exp) => (
            <Timeline id={exp.id} logo={exp.logo} name={exp.company_name} duration={exp.duration} headline={exp.position} description={true} description_list={exp.description_list} isLast={exp.isLast}/>
          ))}
        </section>

        {/* Education Section */}
        <section id="Education" className='mt-[20px] text-xs lg:text-sm'>
          <h2 className='text-base font-bold mb-2'>Education</h2>
          {Education.map((ed) => (
            <Timeline id={ed.id} logo={ed.logo} name={ed.school_name} duration={ed.duration} headline={ed.degree} description={false} isLast={ed.isLast}/>
          ))}
        </section>

        {/* Awards Section */}
        <section id="Awards" className='mt-[20px] text-xs lg:text-sm'>
          <h2 className='text-base font-bold mb-2'>Awards</h2>
          <div className='flex flex-row'>
            <Awards />
          </div>
        </section>

        {/* Tech Stack */}
        <section id="TechStack" className='mt-[50px]'>
          <h2 className='text-3xl font-bold mb-1 text-center'>My Tech Stack</h2>
          <p className='text-base mb-2 text-center'>
            Technologies I work with to build interesting projects.
          </p>
          <div>
            {/* Carousel of my stacks */}
          </div>
        </section>

        {/* My Projects */}

        

        {/* My GitHub Activities */}
        {/* <ReactGitHubCalendar username='Verizent' /> */}
        

        {/* Movie Recommendations */}


        {/* Contacts Section */}


      </div>

      {/* Navigation Bar (Like wheel but only half) */}
      <div className="fixed bottom-0 right-0">
        <NavWheel />
      </div>
    </div>
  )
}