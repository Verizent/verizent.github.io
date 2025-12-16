import { useState } from 'react';

export function ResumeCard({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  period,
  description,
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = (e) => {
    if (description) {
      e.preventDefault();
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <a
      href={href || "#"}
      target="_blank"
      className="block cursor-pointer group"
      onClick={handleClick}
    >
      <div className="flex border border-gray-200 dark:border-gray-800 rounded-lg p-4 hover:shadow-lg transition-all duration-300 bg-white dark:bg-black hover:scale-[1.02]">
        <div className="flex-none">
          <div className="w-12 h-12 rounded-full border border-gray-300 dark:border-gray-700 overflow-hidden bg-white dark:bg-white flex items-center justify-center">
            <img
              src={logoUrl}
              alt={altText}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <div className="flex-grow ml-4">
          <div className="flex items-center justify-between gap-x-2 text-base mb-1">
            <h3 className="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm text-gray-800 dark:text-gray-100">
              {title}
              <svg
                className={`w-4 h-4 ml-1 transition-all duration-300 ${
                  isExpanded ? 'rotate-90' : 'rotate-0'
                } opacity-0 group-hover:opacity-100 group-hover:translate-x-1 text-gray-600 dark:text-gray-400`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </h3>
            <div className="text-xs sm:text-sm tabular-nums text-gray-500 dark:text-gray-400 text-right">
              {period}
            </div>
          </div>
          {subtitle && (
            <div className="font-sans text-xs text-gray-600 dark:text-gray-400 mb-1">
              {subtitle}
            </div>
          )}
          {isExpanded && description && (
            <div className="mt-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
              {Array.isArray(description) ? (
                <ul className="list-disc list-inside space-y-1">
                  {description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              ) : (
                <div className="whitespace-pre-line">{description}</div>
              )}
            </div>
          )}
        </div>
      </div>
    </a>
  );
}
