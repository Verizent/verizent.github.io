import ReactGitHubCalendar from 'react-github-calendar'
import { useState } from 'react'

import MyPhoto from './Assets/Photo.png'
import NavWheel from './Components/NavWheel'
import Timeline from './Components/Timeline'
import technical_experience from './Components/TechnicalExperience'
import Education from './Components/Education'
import Navbar from './Components/Navbar'
import Awards from './Components/Awards'

export default function App() {
  const [showFullContent, setShowFullContent] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const handleScrollForMore = () => {
    setIsTransitioning(true)
    // Delay the content change to allow for smooth animation
    setTimeout(() => {
      setShowFullContent(true)
      setIsTransitioning(false)
    }, 800)
  }

  // Hero Component (reusable)
  const HeroSection = ({ isIntro = false }) => (
    <section 
      id="Hero" 
      className={`transition-all duration-1000 ease-out ${
        isIntro && !isTransitioning
          ? "mb-0 py-auto h-screen flex flex-col justify-center my-auto align-middle items-center relative text-left w-full" 
          : showFullContent || isTransitioning
          ? "py-[30px] h-auto"
          : "mb-0 py-auto h-auto flex flex-col justify-center my-auto align-middle items-center relative text-left w-full"
      }`}
      style={{
        transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        transform: isTransitioning ? 'scale(0.98)' : 'scale(1)',
      }}
    >
      <h2 className='text-2xl font-bold mb-3 text-left w-full'>Hi, I'm</h2>
      <h1 className='mb-[20px] text-4xl font-extrabold leading-tight text-left w-full'>Michael Richard Suryajaya.</h1>
      <div className="inline-flex w-full">
        <div className='block w-[65%] pr-8'>
          <p className="text-gray-600 text-base lg:text-lg text-left w-full">
            A CS student and software engineer focused on AI, cybersecurity, and robotics. I build reliable MERN web apps. Outside work: pop covers on piano/guitar, Valorant, and edtech non-profit collabs. Always open to building something cool or chatting about tech's future.
          </p>
        </div>
        <img src={MyPhoto} alt="MyPhoto" className="w-[25%] max-w-[320px] ml-[2%] mx-auto flex h-auto align-middle items-center justify-center my-auto rounded-full object-cover hover:shadow-xl transition-shadow shadow-lg"/>
      </div>
      
      {/* Scroll for More Button - only show on intro */}
      {isIntro && !isTransitioning && (
        <div className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 transition-all duration-300 ${
          isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100 animate-bounce'
        }`}>
          <button
            onClick={handleScrollForMore}
            className="backdrop-blur-lg bg-white/20 hover:bg-white/30 dark:bg-gray-900/20 dark:hover:bg-gray-900/30 border border-gray-300 dark:border-gray-700 shadow-lg rounded-full px-6 py-3 flex flex-col items-center gap-2 transition-all duration-300 group hover:scale-105"
            style={{
              boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
              border: '1px solid rgba(255, 255, 255, 0.18)',
            }}
          >
            <span className="text-gray-800 dark:text-gray-100 font-medium text-sm">
              Scroll for more
            </span>
            <svg 
              className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:translate-y-1 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </div>
      )}
    </section>
  )

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Water Drop Transition Overlay */}
      {isTransitioning && (
        <div 
          className="fixed inset-0 z-50 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
          }}
        >
          <div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-blue-400/30 rounded-full animate-ping"
            style={{
              animationDuration: '0.8s',
            }}
          />
        </div>
      )}

      {/* Navbar - only show when full content is visible */}
      {showFullContent && !isTransitioning && (
        <div 
          className={`fixed bottom-[30px] mb-0 z-20 mt-auto transition-all duration-500 ${
            showFullContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <Navbar />
        </div>
      )}

      <div 
        className={`max-w-2xl mx-auto px-[5%] lg:px-0 w-full transition-all duration-1000 ${
          isTransitioning ? 'scale-98 opacity-90' : 'scale-100 opacity-100'
        }`}
        style={{
          transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        }}
      >
        {!showFullContent ? (
          /* Intro View - Hero Only */
          <div className={`transition-all duration-1000 ${
            isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
          }`}>
            <HeroSection isIntro={true} />
          </div>
        ) : (
          /* Full Content View */
          <div className={`transition-all duration-1000 delay-300 ${
            showFullContent && !isTransitioning ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            {/* Hero Section - now with normal height */}
            <HeroSection isIntro={false} />

            {/* Content sections with staggered animations */}
            <div className={`transition-all duration-700 delay-500 ${
              showFullContent && !isTransitioning ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <hr/>

              {/* About Section */}
              <section id="About" className='mt-[20px] text-xs lg:text-sm'>
                <h2 className='text-base font-bold'>About</h2>
                <p className='text-sm text-gray-600'>
                  W
                </p>
              </section>
            </div>

            {/* More sections with additional delays */}
            <div className={`transition-all duration-700 delay-700 ${
              showFullContent && !isTransitioning ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              {/* Technical Experience Section */}
              <section id="TechExperience" className='mt-[20px] text-xs lg:text-sm'>
                <h2 className='text-base font-bold mb-2'>Technical Experience</h2>
                {technical_experience.map((exp) => (
                  <Timeline key={exp.id} id={exp.id} logo={exp.logo} name={exp.company_name} duration={exp.duration} headline={exp.position} description={true} description_list={exp.description_list} isLast={exp.isLast}/>
                ))}
              </section>

              {/* Education Section */}
              <section id="Education" className='mt-[20px] text-xs lg:text-sm'>
                <h2 className='text-base font-bold mb-2'>Education</h2>
                {Education.map((ed) => (
                  <Timeline key={ed.id} id={ed.id} logo={ed.logo} name={ed.school_name} duration={ed.duration} headline={ed.degree} description={false} isLast={ed.isLast}/>
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
          </div>
        )}
      </div>

      {/* Navigation Wheel - only show when full content is visible */}
      {showFullContent && !isTransitioning && (
        <div 
          className={`fixed bottom-0 right-0 transition-all duration-500 delay-300 ${
            showFullContent ? 'opacity-100 translate-x-0 translate-y-0' : 'opacity-0 translate-x-4 translate-y-4'
          }`}
        >
          <NavWheel />
        </div>
      )}
    </div>
  )
}
