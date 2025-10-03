import { useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

import { FaLinkedin, FaInstagramSquare, FaGithub } from "react-icons/fa";
import { RiMailUnreadFill } from "react-icons/ri";

import MyPhoto from './Assets/Photo.png'
import Timeline from './Components/Timeline'
import technical_experience from './Components/TechnicalExperience'
import Education from './Components/Education'
import Navbar from './Components/Navbar'
import Awards from './Components/Awards'
import TechStack from './Components/TechStack'
import MyProjects from './Components/MyProjects'
import DarkModeToggle from './Components/DarkModeToggle';

export default function App() {
  const [showFullContent, setShowFullContent] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)

  AOS.init({
    duration: 1200,
    once: false,
  });

  const handleScrollForMore = () => {
    setIsTransitioning(true)
    // Delay the content change to allow for smooth animation
    setTimeout(() => {
      setShowFullContent(true)
      setIsTransitioning(false)
    }, 800)
  }

  // Hero Component
  const HeroSection = ({ isIntro = false }) => (
    <section 
      id="Hero" 
      className={`transition-all duration-1000 ease-out ${
        isIntro && !isTransitioning
          ? "mb-0 py-auto h-[100dvh] flex flex-col justify-center my-auto align-middle items-center relative text-left w-full" 
          : showFullContent || isTransitioning
          ? "py-[30px] h-auto"
          : "mb-0 py-auto h-auto flex flex-col justify-center my-auto align-middle items-center relative text-left w-full"
      }`}
      style={{
        transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        transform: isTransitioning ? 'scale(0.98)' : 'scale(1)',
      }}
      data-aos="fade-up"
    >
      <h2 className='text-2xl font-semibold mb-4 text-left w-full text-slate-600 dark:text-slate-400 tracking-wide transition-colors duration-300'>Hi, I'm</h2>
      <h1 className='mb-6 text-5xl font-bold leading-tight text-left w-full text-gradient dark:text-gradient-dark font-inter tracking-tight'>Michael Richard Suryajaya</h1>
      <div className="inline-flex w-full">
        <div className='block w-[65%] pr-8'>
          <p className="text-slate-700 dark:text-slate-300 text-lg lg:text-xl text-left w-full leading-relaxed font-medium transition-colors duration-300">
            A CS student and software engineer focused on AI and web development. I build reliable MERN web apps. Outside work: pop covers on piano/guitar, Valorant, and edtech non-profit collabs. Always open to building something cool or random chats.
          </p>
          <div className='mt-[20px] flex flex-row justify-start text-left'>
            <a className="mr-4 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-all duration-300 text-3xl hover:scale-110 transform" href="https://www.instagram.com/michaelrichardsuryajaya" target="_blank" rel="noopener noreferrer"><FaInstagramSquare/></a>
            <a className="mr-4 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-all duration-300 text-3xl hover:scale-110 transform" href="https://id.linkedin.com/in/michael-richard-suryajaya" target="_blank" rel="noopener noreferrer"><FaLinkedin/></a>
            <a className="mr-4 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-all duration-300 text-3xl hover:scale-110 transform" href="https://www.github.com/Verizent" target="_blank" rel="noopener noreferrer"><FaGithub/></a>
            <a className="mr-4 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-all duration-300 text-3xl hover:scale-110 transform" href="mailto:mrichardsuryajaya@gmail.com" target="_blank" rel="noopener noreferrer"><RiMailUnreadFill/></a>
          </div>
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
            className="glass-button glass-button-hover rounded-full px-8 py-4 flex flex-col items-center gap-3 group hover:scale-105 transform"
          >
            <span className="text-slate-800 dark:text-slate-200 font-semibold text-sm tracking-wide transition-colors duration-300">
              Click for more
            </span>
            <svg 
              className="w-5 h-5 text-slate-700 dark:text-slate-300 group-hover:translate-y-1 transition-transform duration-300" 
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
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50 dark:from-gray-900 dark:via-slate-900 dark:to-zinc-900 transition-colors duration-500">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-slate-600/8 to-gray-700/8 dark:from-slate-400/8 dark:to-gray-300/8 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-zinc-600/8 to-slate-700/8 dark:from-zinc-400/8 dark:to-slate-300/8 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-br from-gray-600/8 to-slate-600/8 dark:from-gray-400/8 dark:to-slate-400/8 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      {/* Water Drop */}
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

      {/* Navbar */}
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
        className={`max-w-2xl mx-auto px-[5%] lg:px-0 w-full transition-all duration-1000 relative z-10 ${
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
            {/* Hero Section - normal height */}
            <HeroSection isIntro={false} />

            {/* Content sections */}
            <div className={`transition-all duration-700 delay-500 ${
              showFullContent && !isTransitioning ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <hr/>

              {/* About Section */}
              <section id="About" className='mt-16 text-sm lg:text-base'
                data-aos="fade-up"
              >
                <h2 className='text-3xl font-bold mb-12 text-slate-900 dark:text-slate-100 tracking-tight transition-colors duration-300'>About</h2>
                <p className='text-base text-slate-600 dark:text-slate-300 text-justify leading-relaxed font-medium transition-colors duration-300'>
                  I was born in Indonesia and now study Computer Science in Hong Kong, where most of my adventures happen from behind a screen. I’m the kind of person who builds a Discord bot to track currency exchange rates just because the idea popped into my head and wouldn’t leave. That’s how most things start for me: a spark of curiosity, a few hours of research, and suddenly I’m knee-deep in APIs and documentation. 
                  <br/>
                  <br/>
                  Growing up, I was always drawn to math, tech, and anything that made me ask “how does this work?” That curiosity didn’t stay confined to one field—it pulled me into education, psychology, and even productivity systems. I love learning how people think, how systems scale, and how ideas evolve. I’m not just interested in building things—I want to understand the logic behind them.
                  <br/>
                  <br/>
                  These days, I spend most of my time coding and occasionally falling down rabbit holes of niche topics. I help run INAkademia, a non-profit led by Indonesian students studying both abroad and locally. As head of our Summer Bridge program, I helped organize free online courses for over 250 students and built the registration platform using the MERN stack. It taught me that leadership isn’t about being loud—it’s about being reliable, thoughtful, and willing to learn alongside others.
                  <br/>
                  <br/>
                  I’m a stay-at-home kind of person, happiest when I’m deep in a project, exploring a new concept, or just tinkering with something that might turn into something bigger. Curiosity isn’t just part of me—it’s the reason I keep moving forward.
                </p>
              </section>
            </div>

            <div className={`transition-all duration-700 delay-700 ${
              showFullContent && !isTransitioning ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              {/* Technical Experience Section */}
              <section id="TechExperience" className='mt-20 text-sm lg:text-base'
                data-aos="fade-up"
              >
                <h2 className='text-3xl font-bold mb-12 text-slate-900 dark:text-slate-100 tracking-tight transition-colors duration-300'>Technical Experience</h2>
                {technical_experience.map((exp) => (
                  <div className='mb-0'>
                    <Timeline key={exp.id} id={exp.id} logo={exp.logo} name={exp.company_name} duration={exp.duration} headline={exp.position} description={true} description_list={exp.description_list} isLast={exp.isLast}/>
                  </div>
                ))}
              </section>

              {/* Education Section */}
              <section id="Education" className='mt-20 text-sm lg:text-base'
                data-aos="fade-up"
              >
                <h2 className='text-3xl font-bold mb-12 text-slate-900 dark:text-slate-100 tracking-tight transition-colors duration-300'>Education</h2>
                {Education.map((ed) => (
                  <div className='mb-0'>
                    <Timeline key={ed.id} id={ed.id} logo={ed.logo} name={ed.school_name} duration={ed.duration} headline={ed.degree} description={false} isLast={ed.isLast}/>
                  </div>
                ))}
              </section>

              {/* Awards Section */}
              <section id="Awards" className='mt-20 text-sm lg:text-base'
                data-aos="fade-up"
              >
                <h2 className='text-center text-3xl font-bold mb-4 text-slate-900 dark:text-slate-100 tracking-tight transition-colors duration-300'>My Awards</h2>
                <p className='text-lg mb-12 text-center text-slate-600 dark:text-slate-300 font-medium transition-colors duration-300'>
                  Awards I have been fortunate to attain.
                </p>
                <div className='flex flex-row w-full'>
                  <Awards />
                </div>
              </section>

              {/* Tech Stack */}
              <section id="TechStack" className='mt-20'
                data-aos="fade-up"
              >
                <h2 className='text-4xl font-bold mb-4 text-center text-slate-900 dark:text-slate-100 tracking-tight transition-colors duration-300'>My Tech Stack</h2>
                <p className='text-lg mb-12 text-center text-slate-600 dark:text-slate-300 font-medium transition-colors duration-300'>
                  Technologies I work with to build interesting projects.
                </p>
                <div>
                  <TechStack />
                </div>
              </section>

              {/* My Projects */}
              <section id="Projects" className='mt-20'
                data-aos="fade-up"
              >
                <h2 className='text-4xl font-bold mb-4 text-center text-slate-900 dark:text-slate-100 tracking-tight transition-colors duration-300'>My Projects</h2>
                <p className='text-lg mb-12 text-center text-slate-600 dark:text-slate-300 font-medium transition-colors duration-300'>
                  A selection of my recent work, showcasing my skills and interests.
                </p>
                <MyProjects />
              </section>
              
              {/* Movie Recommendations */}
              

              {/* Contacts Section */}
              
              <div className='w-full text-center mb-32 text-slate-500 dark:text-slate-400 font-medium text-lg transition-colors duration-300'>That's all for now :)</div>

            </div>
          </div>
        )}
      </div>
    </div>
  )
}
