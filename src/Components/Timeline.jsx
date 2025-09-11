import { useState, useRef, useEffect } from 'react'

export default function Timeline(props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);
  const [lineHeight, setLineHeight] = useState(100); // Default line height

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
      setLineHeight(height + 90);
    }
  }, [isExpanded, props.description_list]);

  return (
    <div className="flex items-start w-full">
      {/* Logo */}
      <div className="flex flex-col items-center -mr-3 relative">
        <div className="flex-shrink-0 z-10">
          {props.logo ? (
            <div className='relative h-14 w-14 rounded-full overflow-hidden backdrop-blur-xl bg-white/40 border border-white/30 shadow-xl'>
              <img 
                src={props.logo} 
                className="absolute inset-0 w-full h-full object-cover" 
                alt={props.name}
              />
            </div>
          ) : (
            <div className="rounded-full h-14 w-14 backdrop-blur-xl bg-white/40 border border-white/30 flex items-center justify-center shadow-xl">
              <span className="text-gray-500 text-xs"></span>
            </div>
          )}
        </div>
        
        {/* Connecting Line */}
        {!props.isLast && (
          <svg className="mx-auto bg-gradient-to-t from-white/50 via-blue-300/30 to-purple-300/30 backdrop-blur-sm" width="2" height={lineHeight}>
            <line 
              x1="1" 
              y1="0" 
              x2="1" 
              y2={lineHeight} 
              strokeWidth="2" 
            />
          </svg>
        )}
      </div>
      
      {/* Content Card */}
      <div className="flex-grow backdrop-blur-xl bg-white/30 border border-white/20 rounded-2xl p-5 shadow-xl hover:shadow-2xl hover:bg-white/40 transition-all duration-300 hover:scale-[1.02]">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
          <h3 className="text-base font-bold text-gray-800 lg:mb-2 mb-0">{props.name}</h3>
          
          <div className="lg:flex md:flex hidden items-center space-x-4">
            {props.duration && (
              <span className="inline-flex items-center px-4 py-2 rounded-full backdrop-blur-lg bg-white/40 border border-white/30 text-gray-700 text-xs font-semibold shadow-lg">
                <svg className="w-3 h-3 mr-2 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <p className='text-xs'>{props.duration}</p>
              </span>
            )}
            
            {props.description && (
              <button 
                onClick={toggleExpand}
                className={`group flex items-center justify-center w-10 h-10 rounded-full backdrop-blur-lg bg-white/40 hover:bg-white/60 border border-white/30 hover:border-white/40 text-gray-600 hover:text-gray-700 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 px-2 py-0 ${
                  isExpanded ? 'bg-white/60 border-white/40 text-gray-700' : ''
                }`}
                aria-label={isExpanded ? "Collapse details" : "Expand details"}
              >
                <svg 
                  className={`focus:outline-none transition-transform duration-300 flex ${isExpanded ? 'rotate-90' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 48 48"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 12l20 12-20 12" />
                </svg>
              </button>
            )}
          </div>
        </div>
        
        {props.headline && (
          <p className="text-gray-700 mb-4">{props.headline}</p>
        )}

        <div className="flex items-center justify-between md:hidden lg:hidden mt-3 pt-3 border-t border-white/30">
          <div className="flex items-center space-x-2">
            {props.duration && (
              <span className="inline-flex items-center px-4 py-2 rounded-full backdrop-blur-lg bg-white/40 border border-white/30 text-gray-700 text-xs font-semibold shadow-lg">
                <svg className="w-3 h-3 mr-2 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                {props.duration}
              </span>
            )}
          </div>
          
          {props.description && (
            <button 
              onClick={toggleExpand}
              className={`group flex items-center justify-center w-10 h-10 rounded-full backdrop-blur-lg bg-white/40 hover:bg-white/60 border border-white/30 hover:border-white/40 text-gray-600 hover:text-gray-700 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ${
                isExpanded ? 'bg-white/60 border-white/40 text-gray-700' : ''
              }`}
              aria-label={isExpanded ? "Collapse details" : "Expand details"}
            >
              <svg 
                className={`w-4 h-4 transition-all duration-300 ${isExpanded ? 'rotate-90' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
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
            <div className="mt-4 pt-4 border-t border-white/30">
              <ul className="space-y-2">
                {desc_list.map((desc, index) => (
                  <li key={index} className="text-gray-700 flex items-start">
                    <svg 
                      className="w-4 h-4 text-gray-500 mt-1 mr-2 flex-shrink-0" 
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
