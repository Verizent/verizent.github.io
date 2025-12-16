import { useState } from 'react';
import { techStack } from '../data/techStack';

// Flat list of all tech for carousel
const allTech = [];
Object.values(techStack).forEach(category => {
  Object.values(category).forEach(subcategory => {
    Object.values(subcategory).forEach(tech => {
      allTech.push(tech);
    });
  });
});

function CarouselItem({ imgUrl, imgTitle }) {
  return (
    <div className="flex-shrink-0 w-24 h-24 flex items-center justify-center rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-black hover:shadow-lg transition-all duration-300 hover:scale-110">
      <img 
        src={imgUrl} 
        alt={imgTitle} 
        title={imgTitle} 
        className={`w-16 h-16 object-contain ${['Express.js', 'GitHub', 'MacOS'].includes(imgTitle) ? 'dark:invert' : ''}`} 
      />
    </div>
  );
}

function TechCategorySection({ title, subcategories }) {
  return (
    <div className="mb-8">
      <h3 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-gray-100">
        {title}
      </h3>
      {Object.entries(subcategories).map(([subcategoryName, technologies]) => (
        <div key={subcategoryName} className="mb-4">
          {subcategoryName && (
            <h4 className="text-lg font-semibold mb-3 text-gray-700 dark:text-gray-300 text-center">
              {subcategoryName}
            </h4>
          )}
          <div className="flex flex-wrap justify-center gap-4">
            {Object.entries(technologies).map(([key, tech]) => (
              <div key={key} className="flex flex-col items-center group">
                <div className="relative w-16 h-16 mb-3 rounded-xl p-2 border border-gray-200 dark:border-gray-800 bg-white dark:bg-black hover:shadow-lg transition-all duration-300 hover:scale-110 hover:-translate-y-1">
                  <img
                    src={tech.imgUrl}
                    alt={tech.title}
                    title={tech.title}
                    className={`w-full h-full object-contain ${['Express.js', 'GitHub', 'MacOS'].includes(tech.title) ? 'dark:invert' : ''}`}
                  />
                </div>
                <span className="text-xs text-gray-600 dark:text-gray-300 text-center font-medium group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors">
                  {tech.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export function TechStack() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div>
      {/* Carousel */}
      <div className={`overflow-hidden relative w-full transition-all duration-500 ${showDetails ? 'opacity-0 h-0 mb-0' : 'opacity-100 h-32 mb-8'}`}>
        <div className="flex absolute left-0 items-center h-full gap-4 animate-carousel">
          {allTech.map((tech, idx) => (
            <CarouselItem key={idx} imgUrl={tech.imgUrl} imgTitle={tech.title} />
          ))}
          {allTech.map((tech, idx) => (
            <CarouselItem key={`dup-${idx}`} imgUrl={tech.imgUrl} imgTitle={tech.title} />
          ))}
        </div>
      </div>

      {/* Detailed View */}
      <div className={`transition-all duration-500 ${showDetails ? 'block opacity-100' : 'hidden opacity-0'}`}>
        <div className="space-y-8">
          {Object.entries(techStack).map(([categoryName, subcategories]) => (
            <TechCategorySection
              key={categoryName}
              title={categoryName}
              subcategories={subcategories}
            />
          ))}
        </div>
      </div>

      {/* Toggle Button */}
      <div className="flex justify-center mt-8">
        <button
          onClick={() => setShowDetails(!showDetails)}
          className="rounded-full py-3 px-8 border border-gray-200 dark:border-gray-800 bg-white dark:bg-black hover:shadow-lg transition-all duration-300 hover:scale-105 font-semibold text-gray-700 dark:text-gray-300"
        >
          {showDetails ? 'Hide Details' : 'Show Details'}
        </button>
      </div>
    </div>
  );
}
