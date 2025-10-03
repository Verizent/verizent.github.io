import { useState, useRef, useEffect } from 'react'

export default function Timeline(props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);
  const [lineHeight, setLineHeight] = useState(150); // Default line height

  const toggleExpand = () => {
    if (props.description) {
      setIsExpanded(!isExpanded);
    }
  };

  const desc_list = props.description_list || [];

  useEffect(() => {
    if (contentRef.current) {
      const height = isExpanded ? contentRef.current.scrollHeight : 0;
      setContentHeight(height);
      // Update line height based on content height + some padding
      setLineHeight(height + 100);
    }
  }, [isExpanded, props.description_list]);

  return (
    <div className="flex items-start w-full">
      {/* Logo */}
      <div className="flex flex-col items-center -mr-3 relative">
        <div className="flex-shrink-0 z-10">
          {props.logo ? (
            <div className='relative h-14 w-14 rounded-full overflow-hidden glass-card glass-card-hover'>
              <img 
                src={props.logo} 
                className="absolute inset-0 w-full h-full object-cover" 
                alt={props.name}
              />
            </div>
          ) : (
            <div className="rounded-full h-14 w-14 glass-card flex items-center justify-center">
              <span className="text-slate-500 dark:text-slate-400 text-xs"></span>
            </div>
          )}
        </div>
        
        {/* Connecting Line */}
        {!props.isLast && (
          <svg className="mx-auto bg-gradient-to-b from-slate-400/100 via-slate-400/90 to-slate-400/0 dark:from-slate-600/100 dark:via-slate-500/90 dark:to-slate-600/0 backdrop-blur-sm" width="2" height={props.description ? lineHeight + 20 : lineHeight}>
            <line 
              x1="1" 
              y1="0" 
              x2="1" 
              y2={props.description ? lineHeight + 50 : lineHeight} 
              stroke=""
              strokeWidth="2" 
              className="text-slate-300 dark:text-slate-600"
            />
          </svg>
        )}
      </div>
      
      {/* Content Card */}
      <div className="flex-grow glass-card glass-card-hover rounded-2xl p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
          <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 lg:mb-2 mb-0 tracking-tight transition-colors duration-300">{props.name}</h3>
          
          <div className="lg:flex md:flex hidden items-center space-x-4">
            {props.duration && (
              <span className="inline-flex items-center px-4 py-2 rounded-full backdrop-blur-lg bg-white/40 border border-white/30 text-gray-700 dark:text-slate-100 text-xs font-semibold shadow-lg">
                <svg className="w-3 h-3 mr-2 text-gray-600 dark:text-slate-100" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <p className='text-xs'>{props.duration}</p>
              </span>
            )}
            
            {props.description && (
              <button 
                onClick={toggleExpand}
                className={`group flex items-center justify-center w-10 h-10 rounded-full glass-button glass-button-hover text-slate-600 dark:text-slate-100 hover:text-slate-800 dark:hover:text-slate-200 transform hover:scale-105 transition-all duration-300 px-2 py-0 ${
                  isExpanded ? 'bg-slate-900/15 dark:bg-white/20 border-slate-200/40 dark:border-white/30 text-slate-800 dark:text-slate-200' : ''
                }`}
                aria-label={isExpanded ? "Collapse details" : "Expand details"}
              >
                <svg 
                  className={`w-5 h-5 focus:outline-none transition-transform duration-300 ${isExpanded ? 'rotate-90' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}
          </div>
        </div>
        
        {props.headline && (
          <p className="text-slate-700 dark:text-slate-300 mb-4 font-medium transition-colors duration-300">{props.headline}</p>
        )}

        <div className="flex items-center justify-between md:hidden lg:hidden mt-3 pt-3 border-t border-slate-200/30">
          <div className="flex items-center space-x-2">
            {props.duration && (
              <span className="inline-flex items-center px-4 py-2 rounded-full glass-button glass-button-hover text-slate-700 dark:text-slate-300 text-xs font-semibold transition-colors duration-300">
                <svg className="w-3 h-3 mr-2 text-slate-600 dark:text-slate-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                {props.duration}
              </span>
            )}
          </div>
          
          {props.description && (
            <button 
              onClick={toggleExpand}
              className={`group flex items-center justify-center w-10 h-10 rounded-full glass-button glass-button-hover text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transform hover:scale-105 transition-all duration-300 ${
                isExpanded ? 'bg-slate-900/15 dark:bg-white/20 border-slate-200/40 dark:border-white/30 text-slate-800 dark:text-slate-200' : ''
              }`}
              aria-label={isExpanded ? "Collapse details" : "Expand details"}
            >
              <svg 
                className={`w-4 h-4 transition-all duration-300 ${isExpanded ? 'rotate-90' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                width="16"
                height="16"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}
        </div>
        
        {props.description && (
          <div 
            ref={contentRef}
            className="overflow-hidden transition-all duration-500"
            style={{ height: isExpanded ? `${contentHeight}px` : '0' }}
          >
            <div className="mt-4 pt-4 border-t border-slate-200/30 dark:border-slate-600/30">
              <ul className="space-y-3">
                {desc_list.map((desc, index) => (
                  <li key={index} className="text-slate-600 dark:text-slate-300 flex items-start font-medium transition-colors duration-300">
                    <svg 
                      className="w-4 h-4 text-slate-500 dark:text-slate-400 mt-1 mr-3 flex-shrink-0" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
