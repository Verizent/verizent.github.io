import { useState } from 'react'
import DarkModeToggle from './DarkModeToggle'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const menuItems = [
    { label: 'Home', href: '/#Hero' },
    { label: 'Experience', href: '/#TechExperience' },
    { label: 'Education', href: '/#Education' },
    { label: 'Awards', href: '/#Awards' },
    { label: 'Tech Stack', href: '/#TechStack' },
    { label: 'Projects', href: '/#Projects' },
  ]

  return (
    <nav className="w-screen flex items-end">
      <div className="relative w-full flex justify-center lg:justify-end lg:pr-[100px]">
        {/* Menu Items */}
        <div 
          className={`absolute bottom-16  transform lg:translate-x-0 -translate-x-1/2' transition-all duration-500 ${
            isOpen 
              ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto' 
              : 'opacity-0 translate-y-8 scale-95 pointer-events-none'
          }`}
          style={{
            transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            transitionProperty: 'transform, pointer-events',
          }}
        >
          <div 
            className={`glass-card rounded-2xl px-6 py-5 flex flex-col gap-3 min-w-[220px] transition-opacity duration-500 ${
              isOpen ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {menuItems.map((item, index) => (
              <a
                key={index}
                className={`font-semibold text-slate-800 dark:text-slate-200 hover:text-slate-900 dark:hover:text-slate-100 transition-all duration-300 px-4 py-3 rounded-xl hover:bg-slate-900/10 dark:hover:bg-white/10 tracking-wide ${
                  isOpen ? 'animate-slideInUp' : ''
                }`}
                href={item.href}
                onClick={() => setIsOpen(false)}
                style={{
                  animationDelay: `${index * 100}ms`,
                  animationFillMode: 'both'
                }}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
        
        {/* Dark Mode Button */}
        <DarkModeToggle />

        {/* Hamburger Button */}
        <button
          onClick={toggleMenu}
          className={`ml-5 glass-button glass-button-hover rounded-full p-4 transition-all duration-500 ${
            isOpen ? 'rotate-180 scale-110' : 'rotate-0 scale-100'
          }`}
          style={{
            transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
          }}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center">
            <span 
              className={`bg-slate-800 dark:bg-slate-200 block transition-all duration-200 ease-out h-0.5 w-6 rounded-sm ${
                isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
              }`}
            />
            <span 
              className={`bg-slate-800 dark:bg-slate-200 block transition-all duration-200 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
                isOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span 
              className={`bg-slate-800 dark:bg-slate-200 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
              }`}
            />
          </div>
        </button>
      </div>

      {/* Custom CSS for water-like animation */}
      <style jsx>{`
        @keyframes slideInUp {
          0% {
            transform: translateY(20px) scale(0.9);
          }
          60% {
            transform: translateY(-2px) scale(1.02);
          }
          100% {
            transform: translateY(0) scale(1);
          }
        }
        
        .animate-slideInUp {
          animation: slideInUp 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
      `}</style>
    </nav>
  )
}
