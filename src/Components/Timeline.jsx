import { useState, useRef, useEffect } from 'react'

export default function Timeline(props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);
  const [lineHeight, setLineHeight] = useState(90); // Default line height

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
            <div className='relative h-14 w-14 rounded-full overflow-hidden border-white border-4 shadow-md'>
              <img 
                src={props.logo} 
                className="absolute inset-0 w-full h-full object-cover" 
                alt={props.name}
              />
            </div>
          ) : (
            <div className="rounded-full h-14 w-14 bg-gray-200 flex items-center justify-center shadow-md">
              <span className="text-gray-500 text-xs"></span>
            </div>
          )}
        </div>
        
        {/* Connecting Line */}
        {!props.isLast && (
          <svg className="mx-auto bg-gradient-to-t from-white via-gray-300 to-gray-300" width="2" height={lineHeight}>
            <line 
              x1="1" 
              y1="0" 
              x2="1" 
              y2={lineHeight} 
              // stroke="#d1d5db" 
              strokeWidth="2" 
            />
          </svg>
        )}
      </div>
      
      {/* Content Card */}
      <div className="flex-grow bg-white rounded-lg p-5 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
          <h3 className="text-base font-bold text-gray-800 lg:mb-2 mb-0">{props.name}</h3>
          
          <div className="lg:flex md:flex hidden items-center space-x-3">
            {props.duration && (
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-xs font-medium">
                {props.duration}
              </span>
            )}
            
            {props.description && (
              <button 
                onClick={toggleExpand}
                style={{
                  width: '28px',
                  height: '28px',
                  background: 'transparent',
                  border: 'none',
                  outline: 'none',
                  boxShadow: 'none',
                  color: '#4B5563', // Tailwind's text-gray-600
                  fontWeight: 'bold',
                  fontSize: '0.875rem', // text-sm
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '9999px', // rounded-full
                  cursor: 'pointer',
                  transition: 'transform 0.2s ease',
                  WebkitTapHighlightColor: 'transparent' // removes tap highlight on mobile
                }}
                onMouseDown={e => e.preventDefault()} // prevents focus ring on click
                aria-label={isExpanded ? "Collapse details" : "Expand details"}
              >
                <span style={{
                  transform: isExpanded ? 'rotate(90deg)' : 'rotate(0deg)',
                  display: 'inline-block',
                  transition: 'transform 0.2s ease'
                }}>
                  &gt;
                </span>
              </button>
            )}
          </div>
        </div>
        
        {props.headline && (
          <p className="text-gray-600 mb-4">{props.headline}</p>
        )}

        <div className="flex items-center space-x-3 md:hidden lg:hidden">
          {props.duration && (
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm font-medium">
              {props.duration}
            </span>
          )}
          
          {props.description && (
            <button 
              onClick={toggleExpand}
              className={`flex items-center justify-center w-7 h-7 rounded-full hover:bg-gray-100 transition-colors ${
                isExpanded ? 'transform rotate-90' : ''
              }`}
              aria-label={isExpanded ? "Collapse details" : "Expand details"}
            >
              <svg 
                className="w-4 h-4 text-gray-600" 
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
            <div className="mt-4 pt-4 border-t border-gray-100">
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